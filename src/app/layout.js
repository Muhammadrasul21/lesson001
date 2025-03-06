import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 left-0 z-10 bg-[#000000d9] text-white p-4 flex justify-center gap-4 text-xl font-semibold space-x-4">
          <Link href="/products" className="hover:text-cyan-400 transition duration-300 ease-in-out">Products</Link>
          <Link href="/users" className="hover:text-cyan-400 transition duration-300 ease-in-out">Users</Link>
          <Link href="/recipes" className="hover:text-cyan-400 transition duration-300 ease-in-out">Recipes</Link>
        </nav>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
