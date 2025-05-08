'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          MachCoders
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Accueil
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            À propos
          </Link>
          <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Projets
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Contact
          </Link>
          <Link href="/auth/sign-in" className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded text-gray-600 dark:text-gray-300 hover:text-primary">
            Connexion
          </Link>
          <Link href="/auth/sign-up" className="text-gray-600 dark:text-gray-300 hover:text-primary">
            Inscription
          </Link>
        </div>
      </div>
    </nav>
  );
}