// app/packages/page.tsx
import Link from "next/link";

export default function PackagesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Packages (Offers)</h1>
      <div className="space-y-4">
        <Link href="/packages/silver" className="block bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800">Silver</Link>
        <Link href="/packages/gold" className="block bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800">Gold</Link>
        <Link href="/packages/platinum" className="block bg-neutral-900 p-4 rounded-lg hover:bg-neutral-800">Platinum</Link>
      </div>
    </div>
  );
}
