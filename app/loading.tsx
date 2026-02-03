"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Halftone Overlay */}
      <div className="absolute inset-0 comic-halftone opacity-20 pointer-events-none"></div>

      <div className="relative">
        {/* Spinner Ring */}
        <div className="w-24 h-24 border-8 border-white border-t-primary rounded-full animate-spin"></div>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-none rotate-45"></div>
        </div>
      </div>

      <div className="mt-8 text-center animate-pulse">
        <h2 className="text-4xl font-[Bangers] text-white tracking-widest uppercase mb-2">
          LOADING ISSUE...
        </h2>
        <div className="bg-primary px-4 py-1 inline-block transform -rotate-2 border-2 border-white">
          <span className="text-white font-[Inter] font-bold text-sm tracking-wide">
            MEANWHILE...
          </span>
        </div>
      </div>
    </div>
  );
}
