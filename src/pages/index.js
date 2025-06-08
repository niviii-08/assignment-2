import Link from 'next/link';

export default function Home() {
  return (
    <div >
      <div className="container mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">🚦 Welcome to TrafficPulse</h1>
        <p className="text-gray-700 mb-8">AI-powered traffic optimization for smarter cities.</p>

        <div className="space-x-4">
          <Link href="/contact">
            <a className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Contact</a>
          </Link>
          <Link href="/about">
            <a className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
}