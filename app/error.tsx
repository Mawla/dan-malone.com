"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-slate-900">
          Something went wrong
        </h2>
        <p className="text-slate-600">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full bg-slate-900 text-white font-medium hover:scale-105 transition-transform duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
