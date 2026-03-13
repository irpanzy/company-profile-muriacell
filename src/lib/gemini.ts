import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
});

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const fallbackResponses: { [key: string]: string } = {
  hello:
    "Halo! 👋 Saya Muria Cellular Assistant. Ada yang bisa saya bantu? Tanyakan tentang produk kami!",
  produk:
    "Kami menjual berbagai produk gadget:\n- 📱 HP Baru (Samsung, Xiaomi, Vivo, Oppo, Realme)\n- 🎧 Aksesoris (Charger, Headset, Casing, Tempered Glass)\n- 🔋 Powerbank & MMC\n- 🛠️ Jasa Service HP\n\nKenapa ke toko Muria? Semua produk bergaransi, harga bersaing, dan pelayanan cepat ramah! 😊",
  lokasi:
    "Lokasi kami:\n📍 Perumahan Cemara Regency\nJl. Urip Sumoharjo No.1A\nGumilir, Kec. Cilacap Utara\nKabupaten Cilacap, Jawa Tengah 53231\n\nTerbuka setiap hari untuk melayani Anda!",
  jam: "Jam operasional Muria Cellular:\n⏰ Senin - Minggu: 09:00 - 21:00\n\nUntuk pertanyaan lebih lanjut, hubungi kami via WhatsApp!",
  service:
    "Layanan Service kami:\n🔧 Perbaikan HP (LCD, Battery, Software)\n💻 Konsultasi Teknis Gratis\n⚡ Servis Express (cepat dan terpercaya)\n\nTukar screen rusak? Ganti baterai? Pulihkan data? Kami siap membantu! Contact WhatsApp untuk booking.",
  default:
    "Terima kasih atas pertanyaannya! 😊 Untuk informasi lebih detail atau pertanyaan yang lebih spesifik, silakan hubungi kami melalui WhatsApp atau kunjungi toko kami langsung di Perumahan Cemara Regency.",
};

function getRelevantFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (
    message.includes("halo") ||
    message.includes("hi") ||
    message.includes("hello")
  ) {
    return fallbackResponses.hello;
  } else if (message.includes("produk") || message.includes("jual")) {
    return fallbackResponses.produk;
  } else if (
    message.includes("lokasi") ||
    message.includes("alamat") ||
    message.includes("dimana")
  ) {
    return fallbackResponses.lokasi;
  } else if (
    message.includes("jam") ||
    message.includes("operasional") ||
    message.includes("buka")
  ) {
    return fallbackResponses.jam;
  } else if (
    message.includes("service") ||
    message.includes("servis") ||
    message.includes("perbaikan")
  ) {
    return fallbackResponses.service;
  }

  return fallbackResponses.default;
}

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  initialDelay: number = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error as Error;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      if (
        err?.error?.code === 429 ||
        err?.error?.status === "RESOURCE_EXHAUSTED"
      ) {
        const delay = initialDelay * Math.pow(2, i);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }

  throw lastError;
}

export async function chatWithMuriaAssistant(
  message: string,
  history: ChatMessage[]
): Promise<string> {
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("lokasi") ||
    normalizedMessage.includes("alamat") ||
    normalizedMessage.includes("dimana")
  ) {
    return fallbackResponses.lokasi;
  }

  const modelsToTry = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-2.0-flash-001",
    "gemini-2.5-pro",
  ];

  let lastError: unknown;

  for (const model of modelsToTry) {
    try {
      const contents = {
        parts: [
          ...history.map((msg) => ({
            text: msg.content,
            role: msg.role === "user" ? "user" : "model",
          })),
          {
            text: message,
            role: "user",
          },
        ],
      };

      const result = await retryWithBackoff(() =>
        genAI.models.generateContent({
          model,
          contents,
        })
      );

      const responseText =
        result.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, terjadi kesalahan. Silakan coba lagi.";
      return responseText;
    } catch (error: unknown) {
      lastError = error;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      if (
        err?.error?.status === "RESOURCE_EXHAUSTED" ||
        err?.error?.code === 429
      ) {
        console.warn("API quota exceeded or rate limited, using fallback mode");
        return getRelevantFallbackResponse(message);
      }

      if (err?.error?.code !== 404) {
        throw error;
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((lastError as any)?.error?.status === "RESOURCE_EXHAUSTED") {
    console.warn("All models exhausted, using fallback mode");
    return getRelevantFallbackResponse(message);
  }

  throw lastError;
}
