import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
export default function LandingPage() {

  return (
    <>
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="text-center" />
      {/* <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Airpro
      </h1> */}
      <br />
      <p> Partner Portal Journey </p>
      <p>
        AirPro Technology Ltd. was established in 2006 by a group of highly
        motivated individuals having a rich experience in providing high class
        networking solutions. AirPro has its in-house R&D unit which specializes
        in design, development and customization of wired and wireless
        solutions, esp. for large scale Telecom industries. AirPro has built its
        credibility over the last 8 years with its best-in-class quality
        products which have high performance and are extremely user-friendly.
      </p>
      <br />
      <br />
      <div className="flex gap-3 items-center">
        <Button asChild>
          <Link href="/login">Sign in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
