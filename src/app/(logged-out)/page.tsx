import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white-50 text-center">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Partner Portal Journey
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
        AirPro Technology Ltd. was established in 2006 by a group of highly
        motivated individuals having a rich experience in providing high class
        networking solutions. AirPro has its in-house R&D unit which specializes
        in design, development and customization of wired and wireless
        solutions, especially for large scale Telecom industries. AirPro has
        built its credibility over the last 8 years with its best-in-class
        quality products which have high performance and are extremely
        user-friendly.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Button asChild className="w-full sm:w-auto">
          <Link href="/login">Sign in</Link>
        </Button>
        <span className="hidden sm:block">or</span>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </div>
  );
}
