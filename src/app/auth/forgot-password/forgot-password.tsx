"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Key } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending reset link to:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-dark">
        <div className="flex items-center justify-center p-4">
          <main className="w-full max-w-sm">
            <div className="border border-border-light rounded-xl bg-card-bg p-6 shadow-2xl shadow-black/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text-blue/20 mx-auto mb-4">
                <CheckCircle2 className="h-5 w-5 text-text-blue" />
              </div>
              <div className="text-center mb-4">
                <h1 className="text-text-light text-2xl font-bold mb-1">
                  Check Your Email
                </h1>
                <p className="text-sm text-text-muted">
                  We&apos;ve sent a password reset link to{" "}
                  <strong>{email}</strong>
                </p>
              </div>
              <div className="text-center mb-4">
                <p className="text-xs text-text-muted mb-2">
                  Didn&apos;t receive the email? Check your spam folder or
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-text-blue hover:underline"
                >
                  Try another email address
                </button>
              </div>
              <Link
                href="/login"
                className="text-xs text-text-muted underline hover:text-text-light block text-center"
              >
                Back to Sign In
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark">
      <div className="flex items-center justify-center p-4">
        <main className="w-full max-w-sm">
          <div className="border border-border-light rounded-xl bg-card-bg p-6 shadow-2xl shadow-black/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text-blue/20 mx-auto mb-4">
              <Key className="h-5 w-5 text-text-blue" />
            </div>
            <div className="text-center mb-4">
              <h1 className="text-text-light text-2xl font-bold mb-1">
                Forgot Your Password?
              </h1>
              <p className="text-sm text-text-muted">
                No problem. Enter the email address associated with your account
                and we&apos;ll send you a link to reset your password.
              </p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Email Address
                </p>
                <input
                  className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted px-3 text-sm"
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-lg h-10 mt-2 bg-text-blue text-text-light text-sm font-bold hover:bg-text-blue/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-border-light"
                disabled={!email}
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link
                href="/auth/login"
                className="text-xs text-text-muted underline hover:text-text-light"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
