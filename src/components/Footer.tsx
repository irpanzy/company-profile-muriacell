export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <div className="text-sm text-gray-700 font-medium">
          © {year} Muria Cellular Technology
        </div>
      </div>
    </footer>
  );
}
