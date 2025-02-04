export default function Loading() {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Loading spinner */}
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin" />
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
