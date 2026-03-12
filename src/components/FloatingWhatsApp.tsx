import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { whatsappHref: string };

export default function FloatingWhatsApp({ whatsappHref }: Props) {
  return (
    <Button
      asChild
      size="icon-lg"
      className="fixed right-4 bottom-4 bg-green-600 hover:bg-green-700 rounded-full shadow-lg z-50 hover:scale-110 active:scale-95 transition-all"
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
  );
}
