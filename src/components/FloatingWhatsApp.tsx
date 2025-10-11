import { MessageSquare } from 'lucide-react'

type Props = { whatsappHref: string }

export default function FloatingWhatsApp({ whatsappHref }: Props) {
  return (
    <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 bg-green-500 p-3 rounded-full shadow-lg text-white z-50">
      <MessageSquare />
    </a>
  )
}
