import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 border-t mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 text-center"
      >
        <div className="text-xs md:text-sm text-gray-300 font-medium mb-2">
          © {year} Muria Cellular Technology. All rights reserved.
        </div>
        <p className="text-xs text-gray-400">
          Melayani dengan sepenuh hati untuk kepuasan Anda
        </p>
      </motion.div>
    </footer>
  );
}
