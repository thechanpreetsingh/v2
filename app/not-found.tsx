import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-9xl font-bold text-green">404</h1>
      <h2 className="mb-8 text-4xl font-bold text-lightest-slate">Page Not Found</h2>
      <p className="mb-8 text-lg text-slate">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn text-green border-green hover:bg-green/10"
      >
        Go Home
      </Link>
    </div>
  );
}
