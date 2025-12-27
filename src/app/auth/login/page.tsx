"use client";
import { useState } from "react";
import Link from "next/link";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="min-h-screen bg-background-dark font-display">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="absolute top-0 left-0 w-full px-4 py-5 sm:px-10 md:px-20 lg:px-40">
          <header className="flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-4 text-white">
              <div className="size-6 text-text-blue">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Aura
              </h2>
            </div>
          </header>
        </div>
        <main className="w-full max-w-md">
          <div className="flex flex-col rounded-xl bg-card-bg p-8 shadow-2xl shadow-black/20">
            <h1 className="text-text-light tracking-tight text-3xl font-bold leading-tight text-center pb-2 pt-2">
              Welcome Back
            </h1>
            <p className="text-center text-sm font-normal text-text-muted pb-8">
              Log in to continue to your account.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Email or Username
                </p>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted px-4 text-base font-normal leading-normal"
                  placeholder="Enter your email or username"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <div className="flex flex-col">
                <div className="flex items-center justify-between pb-2">
                  <p className="text-text-light text-base font-medium leading-normal">
                    Password
                  </p>
                  <Link
                    href="/auth/forgot-password"
                    className="text-text-blue text-sm font-medium leading-normal underline hover:no-underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative w-full">
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted pl-4 pr-12 text-base font-normal leading-normal"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-muted hover:text-text-light"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 mt-4 bg-text-blue text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-text-blue/90 transition-colors duration-200"
              >
                <span className="truncate">Log In</span>
              </button>
            </form>
            <div className="pt-8 text-center">
              <p className="text-text-muted text-sm font-normal">
                Don&apos;t have an account?
                <Link
                  href="/auth/sign-up"
                  className="font-medium text-text-blue hover:underline ml-1"
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
