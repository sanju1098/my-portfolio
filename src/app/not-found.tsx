export default function NotFound() {
  return (
    <div className="min-h-[76vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-lg p-2 hover:border-2 rounded-md hover:border-primary hover:bg-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
}
