"use client";
import Link from "next/link";
import { Folder, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-dark">
      <div className="flex items-center justify-center p-4">
        <main className="w-full max-w-sm">
          <div className="border border-border-light rounded-xl bg-card-bg p-6 shadow-2xl shadow-black/20">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text-blue/20 mb-4">
                <Folder className="h-6 w-6 text-text-blue" />
              </div>
              <h2 className="text-text-light text-2xl font-bold mb-2">
                Content Not Found
              </h2>
              <p className="text-sm text-text-muted mb-6">
                The content you&apos;re looking for doesn&apos;t exist in this
                section.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-text-blue hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Go to Homepage
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
