// app/products/page.tsx
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        <li><Link href="/products/datasheet" className="hover:underline">Datasheet</Link></li>
        <li><Link href="/products/emailer" className="hover:underline">E-mailer</Link></li>
        <li><Link href="/products/brochure" className="hover:underline">E-Brochure</Link></li>
      </ul>
    </div>
  );
}
