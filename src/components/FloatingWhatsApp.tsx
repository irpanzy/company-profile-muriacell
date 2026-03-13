import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = { whatsappHref: string };

export default function FloatingWhatsApp({ whatsappHref }: Props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-4 z-50"
    >
      <Button
        asChild
        size="icon-lg"
        className="bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-all"
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat via WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </Button>
    </motion.div>
  );
}
