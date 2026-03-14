import { GoogleGenAI } from "@google/genai";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

const genAI = new GoogleGenAI({
  apiKey: geminiApiKey,
});

export interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const fallbackResponses: { [key: string]: string } = {
  hello:
    "Halo! Saya Muria Assistant dari Muria Cellular. Ada yang bisa saya bantu hari ini? Anda bisa bertanya tentang produk, layanan service, lokasi, atau jam operasional.",
  produk:
    "Kami menyediakan berbagai kebutuhan gadget, seperti:\n- HP baru (Samsung, Xiaomi, Vivo, Oppo, Realme)\n- Aksesoris (charger, headset, casing, tempered glass)\n- Powerbank & MMC\n- Layanan service HP\n\nSemua produk bergaransi, harga kompetitif, dan pelayanan kami ramah serta cepat.",
  lokasi:
    "Lokasi toko kami:\nPerumahan Cemara Regency\nJl. Urip Sumoharjo No.1A\nGumilir, Kec. Cilacap Utara\nKabupaten Cilacap, Jawa Tengah 53231\n\nSilakan datang langsung, kami siap melayani Anda.",
  jam: "Jam operasional Muria Cellular:\nSenin - Minggu: 09:00 - 21:00\n\nJika ingin konfirmasi sebelum datang, silakan hubungi kami via WhatsApp.",
  service:
    "Layanan service kami meliputi:\n- Perbaikan HP (LCD, baterai, software)\n- Konsultasi teknis gratis\n- Service express (cepat dan terpercaya)\n\nJika layar rusak, baterai bermasalah, atau butuh pemulihan data, tim kami siap membantu. Anda juga bisa booking lewat WhatsApp.",
  default:
    "Terima kasih atas pertanyaannya. Untuk informasi lebih lengkap, silakan hubungi kami melalui WhatsApp atau kunjungi toko kami langsung di Perumahan Cemara Regency.",
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
  if (!geminiApiKey) {
    return getRelevantFallbackResponse(message);
  }

  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("lokasi") ||
    normalizedMessage.includes("alamat") ||
    normalizedMessage.includes("dimana")
  ) {
    return fallbackResponses.lokasi;
  }

  if (
    normalizedMessage.includes("jam") ||
    normalizedMessage.includes("operasional") ||
    normalizedMessage.includes("buka")
  ) {
    return fallbackResponses.jam;
  }

  if (
    normalizedMessage.includes("service") ||
    normalizedMessage.includes("servis") ||
    normalizedMessage.includes("perbaikan")
  ) {
    return fallbackResponses.service;
  }

  if (
    normalizedMessage.includes("produk") ||
    normalizedMessage.includes("jual")
  ) {
    return fallbackResponses.produk;
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
      const contents = [
        ...history.map((msg) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
        {
          role: "user",
          parts: [{ text: message }],
        },
      ];

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
