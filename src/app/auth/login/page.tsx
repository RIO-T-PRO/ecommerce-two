"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-background-dark">
      <div className="flex items-center justify-center p-4">
        <main className="w-full max-w-sm">
          <div className="border border-border-light rounded-xl bg-card-bg p-6 shadow-2xl shadow-black/20">
            <h1 className="text-text-light text-2xl font-bold text-center pb-1">
              Welcome Back
            </h1>
            <p className="text-center text-sm text-text-muted pb-4">
              Log in to continue to your account.
            </p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Email or Username
                </p>
                <input
                  className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted px-3 text-sm"
                  placeholder="Enter your email or username"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="flex flex-col">
                <div className="flex items-center justify-between pb-1">
                  <p className="text-text-light text-sm font-medium">
                    Password
                  </p>
                  <Link
                    href="/auth/forgot-password"
                    className="text-text-blue text-xs font-medium underline hover:no-underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted pl-3 pr-10 text-sm"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted hover:text-text-light"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </label>

              <button
                type="submit"
                className="w-full rounded-lg h-10 mt-2 bg-text-blue text-text-light text-sm font-bold hover:bg-text-blue/90 transition-colors duration-200 border border-border-light"
                disabled={!email || !password}
              >
                Log In
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-text-muted text-xs">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/sign-up"
                  className="font-medium text-text-blue hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
