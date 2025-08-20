// app/register/page.tsx
// app/register/page.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState<"register" | "otp" | "done">("register");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState("");

  // Form field updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register → move to OTP step
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration data:", form);

    // Simulate OTP sent
    alert(`OTP sent to ${form.email}`);
    setStep("otp");
  };

  // OTP verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP Verified! Registration successful 🎉");
      setStep("done");
    } else {
      alert("Invalid OTP, try again!");
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-5 mx-auto">
          <Card className="shadow-lg border-0 rounded-4">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl font-semibold">
                {step === "register"
                  ? "Create Account"
                  : step === "otp"
                  ? "Verify OTP"
                  : "Success"}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-4">
              {step === "register" && (
                <form onSubmit={handleRegister} className="row g-3">
                  {/* Full Name */}
                  <div className="col-12">
                    <Label htmlFor="name" className="form-label fw-semibold">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <Label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="col-12 col-md-6">
                    <Label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="********"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="col-12 col-md-6">
                    <Label
                      htmlFor="confirmPassword"
                      className="form-label fw-semibold"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="********"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12">
                    <Button
                      type="submit"
                      className="w-100 btn btn-primary py-2 rounded-pill"
                    >
                      Register
                    </Button>
                  </div>
                </form>
              )}

              {step === "otp" && (
                <form onSubmit={handleVerifyOtp} className="row g-3">
                  <div className="col-12">
                    <Label htmlFor="otp" className="form-label fw-semibold">
                      Enter OTP (demo: 123456)
                    </Label>
                    <Input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="form-control text-center"
                      maxLength={6}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <Button
                      type="submit"
                      className="w-100 btn btn-success py-2 rounded-pill"
                    >
                      Verify OTP
                    </Button>
                  </div>
                </form>
              )}

              {step === "done" && (
                <div className="text-center">
                  <h4 className="text-success fw-bold">🎉 Registration Complete!</h4>
                  <p className="text-muted">You can now log in to your account.</p>
                  <a href="/login" className="btn btn-primary rounded-pill px-4">
                    Go to Login
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
