"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="material-symbols-outlined text-6xl text-text-blue/50">
            folder_off
          </span>
        </div>
        <h2 className="text-2xl font-bold text-text-light mb-2">
          Content Not Found
        </h2>
        <p className="text-text-muted mb-6">
          The content you&apos;re looking for doesn&apos;t exist in this
          section.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-blue hover:underline"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
