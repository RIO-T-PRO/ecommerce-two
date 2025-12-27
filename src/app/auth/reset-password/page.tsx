"use client";
import { useState } from "react";
import Link from "next/link";
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
      <div className="min-h-screen bg-background-dark font-display text-text-light">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
          <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl border border-border-light bg-card-bg p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text-blue/20 text-text-blue">
              <span className="material-symbols-outlined text-3xl">
                check_circle
              </span>
            </div>
            <div className="flex w-full flex-col gap-2 text-center">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-text-light">
                Check Your Email
              </h1>
              <p className="text-base font-normal text-text-muted">
                We&apos;ve sent a password reset link to{" "}
                <strong>{email}</strong>
              </p>
            </div>
            <div className="w-full text-center">
              <p className="text-sm text-text-muted mb-4">
                Didn&apos;t receive the email? Check your spam folder or
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-text-blue hover:underline"
              >
                Try another email address
              </button>
            </div>
            <Link
              href="/auth/login"
              className="text-sm font-normal leading-normal text-text-muted underline transition-colors hover:text-text-light"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background-dark font-display text-text-light">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-xl border border-border-light bg-card-bg p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text-blue/20 text-text-blue">
            <span className="material-symbols-outlined text-3xl">key</span>
          </div>
          <div className="flex w-full flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-light">
              Forgot Your Password?
            </h1>
            <p className="text-base font-normal text-text-muted">
              No problem. Enter the email address associated with your account
              and we&apos;ll send you a link to reset your password.
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <label className="flex w-full flex-col">
              <p className="pb-2 text-sm font-medium leading-normal text-text-light">
                Email Address
              </p>
              <input
                className="h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-section-bg p-3 text-base font-normal leading-normal text-text-light placeholder:text-text-muted focus:border-text-blue focus:outline-0 focus:ring-2 focus:ring-text-blue/50"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <div className="mt-6 w-full">
              <button
                type="submit"
                className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-blue px-5 text-base font-bold leading-normal tracking-[0.015em] text-text-light transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!email}
              >
                <span className="truncate">Send Reset Link</span>
              </button>
            </div>
          </form>
          <Link
            href="/auth/login"
            className="text-sm font-normal leading-normal text-text-muted underline transition-colors hover:text-text-light"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
