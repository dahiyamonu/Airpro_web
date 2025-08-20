// app/login/page.tsx

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", form);
    // Add API login logic here
    alert(`Logged in as ${form.email}`);
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="row w-100">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <Card className="shadow-lg border-0 rounded-4">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl font-semibold">
                Login
              </CardTitle>
            </CardHeader>

            <CardContent className="p-4">
              <form onSubmit={handleSubmit} className="row g-3">
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
                <div className="col-12">
                  <Label htmlFor="password" className="form-label fw-semibold">
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

                {/* Submit */}
                <div className="col-12">
                  <Button
                    type="submit"
                    className="w-100 btn btn-primary py-2 rounded-pill"
                  >
                    Login
                  </Button>
                </div>

                {/* Forgot & Register links */}
                <div className="col-12 text-center mt-2">
                  <p className="text-sm text-muted mb-1">
                    <a href="/forgot-password" className="text-decoration-none">
                      Forgot Password?
                    </a>
                  </p>
                  <p className="text-sm text-muted">
                    Don't have an account?{" "}
                    <a href="/register" className="text-decoration-none fw-semibold">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
