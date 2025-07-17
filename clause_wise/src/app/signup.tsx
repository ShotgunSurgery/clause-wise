"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#18181b] flex items-center justify-center">
      <Card className="w-full max-w-md border border-violet-700/60 shadow-lg rounded-2xl" style={{ boxShadow: "0 0 24px 0 rgba(128,0,255,0.08)" }}>
        <CardContent className="py-12 px-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
          <p className="text-gray-400 text-center mb-8">Sign up to get started</p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="bg-[#18181b] border border-[#23232a] text-white"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-[#18181b] border border-[#23232a] text-white"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </div>
            <Button type="submit" className="mt-4 w-full bg-white text-black font-semibold rounded-lg py-2 text-lg shadow hover:bg-gray-200">
              Sign up
            </Button>
          </form>
          <div className="mt-4 text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-white underline hover:text-violet-400">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}