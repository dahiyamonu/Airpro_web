"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

// this is zod validation of form.
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
    <>
      {/* <PersonStandingIcon size={50} /> */}
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="text-center" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center font-bold">LOGIN</CardTitle>
          <CardDescription className="text-center font-semibold">Login to your Airpro account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(submitForm)}>
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <FormControl>
                    <Input placeholder="ali@transpify.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the email address you signed up to SupportMe with.
                  </FormDescription>
                  <FormMessage />
                  {/* if we got any form validation error,this field will be responsible for displaying the error. */}
                </FormItem>
                )}
              />
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                  {/* if we got any form validation error,this field will be responsible for displaying the error. */}
                </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Don't have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Signup</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
