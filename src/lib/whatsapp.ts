const DEFAULT_WHATSAPP_MESSAGE =
  "Halo Muria Cellular Technology, saya ingin bertanya tentang produk/layanan yang tersedia.";

export function buildWhatsappHref(
  whatsappNumber: string,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}
