"use client";
import { useState } from "react";
import Link from "next/link";
const ResetPasswordPage = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    console.log("Resetting password...");
  };
  return (
    <div className="min-h-screen bg-background-dark font-display text-text-light">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-card-bg p-8 shadow-lg shadow-black/20">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-text-light">
              Set a New Password
            </h1>
            <p className="mt-2 text-base font-normal text-text-muted">
              Your new password must be different from previous passwords.
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium leading-normal text-text-light">
                New Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg border border-border-light bg-section-bg focus-within:border-text-blue focus-within:ring-2 focus-within:ring-text-blue/30 transition-all">
                <span className="material-symbols-outlined flex items-center justify-center pl-4 text-text-muted">
                  lock
                </span>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent p-3 text-text-light placeholder:text-text-muted focus:outline-none focus:ring-0"
                  placeholder="Enter your new password"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  className="flex items-center justify-center pr-4 text-text-muted hover:text-text-light transition-colors"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showNewPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {newPassword && newPassword.length < 8 && (
                <p className="mt-1 text-xs text-amber-400">
                  Password must be at least 8 characters
                </p>
              )}
            </label>
            <label className="flex flex-col">
              <p className="pb-2 text-sm font-medium leading-normal text-text-light">
                Confirm New Password
              </p>
              <div className="flex w-full flex-1 items-stretch rounded-lg border border-border-light bg-section-bg focus-within:border-text-blue focus-within:ring-2 focus-within:ring-text-blue/30 transition-all">
                <span className="material-symbols-outlined flex items-center justify-center pl-4 text-text-muted">
                  lock
                </span>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent p-3 text-text-light placeholder:text-text-muted focus:outline-none focus:ring-0"
                  placeholder="Confirm your new password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  aria-label="Toggle password visibility"
                  className="flex items-center justify-center pr-4 text-text-muted hover:text-text-light transition-colors"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showConfirmPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {confirmPassword && newPassword !== confirmPassword && (
                <p className="mt-1 text-xs text-red-400">
                  Passwords do not match
                </p>
              )}
            </label>
            <div className="mt-2">
              <button
                type="submit"
                className="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-blue text-base font-bold leading-normal tracking-wide text-text-light transition-colors hover:bg-text-blue/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  !newPassword ||
                  !confirmPassword ||
                  newPassword !== confirmPassword
                }
              >
                <span className="truncate">Reset Password</span>
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-sm font-normal leading-normal text-text-muted underline transition-colors hover:text-text-light"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordPage;
