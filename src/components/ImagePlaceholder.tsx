export default function ImagePlaceholder({ label = "Screenshot" }: { label?: string }) {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center gap-2 h-52 sm:h-64">
      <svg
        className="w-8 h-8 text-indigo-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-sm text-indigo-400 font-medium">{label}</p>
    </div>
  );
}
