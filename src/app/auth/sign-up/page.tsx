"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

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
    <div className="min-h-screen bg-background-dark">
      <div className="flex items-center justify-center">
        <main className="w-full max-w-sm">
          <div className="border border-border-light rounded-xl bg-card-bg p-6 shadow-2xl shadow-black/20">
            <h1 className="text-text-light text-2xl font-bold text-center pb-1">
              Create Account
            </h1>
            <p className="text-center text-sm text-text-muted pb-4">
              Sign up to get started with Aura
            </p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Full Name
                </p>
                <input
                  className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted px-3 text-sm"
                  placeholder="Enter your full name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Email Address
                </p>
                <input
                  className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted px-3 text-sm"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Password
                </p>
                <div className="relative w-full">
                  <input
                    className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted pl-3 pr-10 text-sm"
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
                {formData.password && formData.password.length < 8 && (
                  <p className="mt-1 text-xs text-amber-400">
                    Password must be at least 8 characters
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <p className="text-text-light text-sm font-medium pb-1">
                  Confirm Password
                </p>
                <div className="relative w-full">
                  <input
                    className="w-full rounded-lg text-text-light outline-none border border-border-light bg-section-bg h-10 placeholder:text-text-muted pl-3 pr-10 text-sm"
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted hover:text-text-light"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="mt-1 text-xs text-red-400">
                      Passwords do not match
                    </p>
                  )}
              </label>
              <label className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-3 w-3 rounded border border-border-light bg-section-bg text-text-blue focus:ring-1 focus:ring-text-blue/50"
                />
                <span className="text-xs text-text-muted">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-text-blue hover:underline"
                  >
                    Terms
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
                className="w-full rounded-lg h-10 mt-3 bg-text-blue text-text-light text-sm font-bold hover:bg-text-blue/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-border-light"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.password ||
                  !formData.confirmPassword ||
                  formData.password !== formData.confirmPassword ||
                  !formData.agreeToTerms
                }
              >
                Create Account
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-text-muted text-xs">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-text-blue hover:underline"
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
