export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dustin DeLisle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
