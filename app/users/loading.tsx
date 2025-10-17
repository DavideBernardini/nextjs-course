export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-gray-700 animate-fadeIn">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 mb-4"></div>
      <p className="text-lg font-medium">Loading user data...</p>
    </div>
  );
}
