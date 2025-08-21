"use client";
import Image from "next/image"; 
import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon, CalendarIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calender";
import { PasswordInput } from "@/components/ui/password-input";

// ✅ Zod validation schema
const signupSchema = z
  .object({
    name: z.string().min(2).max(100),
    email: z.string().email("Invalid email"),
    accountType: z.enum(["personal", "company"]).refine((val) => !!val, {
      message: "Account type is required",
    }),
    companyName: z.string().optional(),
    numberOfEmployees: z
      .string()
      .regex(/^\d*$/, "Must be a number")
      .optional(),
    dob: z.date().refine((val) => !!val, {
      message: "Date of birth is required",
    }),
    number: z.string().min(10).max(12),
    password: z.string().min(6, "Password must be at least 6 characters"),
    passwordConfirm: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept terms",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
export default function SignupPage() {
  const [accountType, setAccountType] = useState<"personal" | "company">(
    "personal"
  );
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      accountType: "personal",
      companyName: "",
      numberOfEmployees: "",
      dob: undefined,
      number: "",
      password: "",
      passwordConfirm: "",
      acceptTerms: false,
    },
  });
  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log("Form Data:", data);
    alert("✅ Signup successful!");
  };
  return (
    <div className="flex flex-col items-center gap-6">
      {/* <PersonStandingIcon size={50} /> */}
      <Image src="/logo.png" alt="Logo" width={100} height={100} className="text-center" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center font-bold">Sign up</CardTitle>
          <CardDescription className="text-center">Create a new Airpro account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              
              {/* Name*/}
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* EMAIL */}
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ali@transpify.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* ACCOUNT TYPE */}
              <FormField control={form.control} name="accountType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Account type</FormLabel>
                  <Select onValueChange={(val) => { field.onChange(val); setAccountType(val as "personal" | "company");}} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* COMPANY FIELDS */}
              {accountType === "company" && (
                <>
                  <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="numberOfEmployees" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employees</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} placeholder="Employees" {...field} value={field.value ?? ""}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                </>
              )}

              {/* DOB */}
              <FormField control={form.control} name="dob" render={({ field }) => (
                <FormItem className="flex flex-col pt-2">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className="normal-case flex justify-between pr-1">
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                          <CalendarIcon />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-auto p-0">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} fixedWeeks weekStartsOn={1} fromYear={1900} toDate={new Date()} captionLayout="dropdown" />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
                )}
              />
              
              {/* PHONE NUMBER */}
              <FormField control={form.control} name="number" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="123-456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* PASSWORD */}
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="*********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* CONFIRM PASSWORD */}
              <FormField control={form.control} name="passwordConfirm" render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="*********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />

              {/* TERMS */}
              <FormField control={form.control} name="acceptTerms" render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
                    </FormControl>
                    <FormLabel>I accept the terms and conditions</FormLabel>
                  </div>
                  <FormDescription>
                    By signing up you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">terms and conditions</Link>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
                )}
              />

              <Button type="submit">Sign up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Already have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
