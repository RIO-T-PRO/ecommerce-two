"use client";
import { useState } from "react";
import Link from "next/link";
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("You must agree to the Terms of Service and Privacy Policy");
      return;
    }
    console.log("Signing up...", formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
              Create Account
            </h1>
            <p className="text-center text-sm font-normal text-text-muted pb-8">
              Sign up to get started with Aura
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Full Name
                </p>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted px-4 text-base font-normal leading-normal"
                  placeholder="Enter your full name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Email Address
                </p>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted px-4 text-base font-normal leading-normal"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="relative w-full">
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted pl-4 pr-12 text-base font-normal leading-normal"
                    placeholder="Create a password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
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
                {formData.password && formData.password.length < 8 && (
                  <p className="mt-1 text-xs text-amber-400">
                    Password must be at least 8 characters
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <div className="relative w-full">
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-text-blue/50 border-none bg-section-bg h-12 placeholder:text-text-muted pl-4 pr-12 text-base font-normal leading-normal"
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-muted hover:text-text-light"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400">
                      Passwords do not match
                    </p>
                  )}
              </label>
              <label className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-border-light bg-section-bg text-text-blue focus:ring-2 focus:ring-text-blue/50"
                />
                <span className="text-sm text-text-muted">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-text-blue hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-text-blue hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 mt-4 bg-text-blue text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-text-blue/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.password ||
                  !formData.confirmPassword ||
                  formData.password !== formData.confirmPassword ||
                  !formData.agreeToTerms
                }
              >
                <span className="truncate">Create Account</span>
              </button>
            </form>
            <div className="pt-8 text-center">
              <p className="text-text-muted text-sm font-normal">
                Already have an account?
                <Link
                  href="/auth/login"
                  className="font-medium text-text-blue hover:underline ml-1"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default SignupPage;
