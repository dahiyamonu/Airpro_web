"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

// ✅ Zod validation
const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = (data: z.infer<typeof formSchema>) => {
    console.log("Login successful", data);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white-50">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="mb-4"
      />

      {/* Card */}
      <Card className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center font-bold text-xl md:text-2xl">
            LOGIN
          </CardTitle>
          <CardDescription className="text-center font-semibold">
            Login to your Airpro account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(submitForm)}
            >
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email/Username</FormLabel>
                    <FormControl>
                      <Input placeholder="ali@transpify.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the email address you signed up with.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full md:w-auto">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
          <small>Don&apos;t have an account?</small>
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
            <Link href="/sign-up">Signup</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
