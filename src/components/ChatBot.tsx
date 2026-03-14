import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  MessageCircle,
  Smartphone,
  Clock3,
  MapPin,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chatWithMuriaAssistant, type ChatMessage } from "@/lib/gemini";

type TemplateQuestion = {
  icon: LucideIcon;
  text: string;
};

const TEMPLATE_QUESTIONS = [
  { icon: Smartphone, text: "Apa saja produk?" },
  { icon: Clock3, text: "Jam operasional?" },
  { icon: MapPin, text: "Lokasi toko?" },
  { icon: Wrench, text: "Layanan service?" },
] satisfies TemplateQuestion[];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content:
        "Halo, selamat datang di Muria Cellular 👋\nSaya Muria Assistant. Silakan tanyakan produk, service, atau lokasi kami.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text?: string) => {
    const messageToSend = text || input.trim();
    if (!messageToSend || isLoading) return;

    setInput("");

    // Add user message to chat
    const newUserMessage: ChatMessage = {
      role: "user",
      content: messageToSend,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await chatWithMuriaAssistant(messageToSend, [
        ...messages,
        newUserMessage,
      ]);

      const aiMessage: ChatMessage = {
        role: "model",
        content: response,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: unknown) {
      const errorMessage: ChatMessage = {
        role: "model",
        content:
          "Maaf, terjadi kesalahan saat memproses pertanyaan Anda. Silakan coba lagi atau hubungi kami melalui WhatsApp.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const showTemplates = messages.length === 1;

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-4 bottom-4 z-[999]"
        style={{ pointerEvents: "auto" }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-[#355872] hover:bg-[#2A4659] rounded-full shadow-xl transition-all w-14 h-14 flex items-center justify-center text-white"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 bottom-24 z-[1000] w-auto sm:w-[420px] max-w-[calc(100vw-2rem)] sm:right-4 sm:inset-x-auto max-h-[68vh] sm:max-h-[72vh] flex flex-col"
            style={{ pointerEvents: "auto" }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden h-full flex flex-col bg-white">
              {/* Header */}
              <CardHeader className="bg-[#355872] text-white py-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white text-[#355872] flex items-center justify-center font-semibold text-xs">
                      MC
                    </div>
                    <div>
                      <CardTitle className="text-white text-sm">
                        Muria Assistant
                      </CardTitle>
                      <p className="text-xs text-white/80 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-300 rounded-full inline-block"></span>
                        Online • Siap membantu
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 p-4 overflow-y-auto bg-[#f7f9fb] space-y-3 flex flex-col">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#355872] text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-sm"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Template Questions */}
                {showTemplates && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-2"
                  >
                    <p className="text-xs text-gray-500 px-2">
                      Pilih pertanyaan cepat:
                    </p>
                    {TEMPLATE_QUESTIONS.map((template, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        whileHover={{ x: 4 }}
                        onClick={() => handleSendMessage(template.text)}
                        disabled={isLoading}
                        className="w-full text-left px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 transition-all flex items-center gap-3 disabled:opacity-50"
                      >
                        <template.icon className="w-4 h-4 text-[#355872]" />
                        <span className="font-medium">{template.text}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl rounded-bl-sm flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input Area */}
              <div className="border-t border-gray-200 bg-white p-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tulis pesan ke assistant..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#355872] focus:ring-2 focus:ring-[#355872]/20 disabled:bg-gray-100 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isLoading}
                    className="bg-[#355872] hover:bg-[#2A4659] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg p-2.5 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-white border-t border-gray-200 text-center">
                <p className="text-xs text-gray-600">
                  Muria Assistant • Layanan pelanggan
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
