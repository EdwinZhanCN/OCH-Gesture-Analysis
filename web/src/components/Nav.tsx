import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="sticky top-0 border-b shadow-sm z-10 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/EdwinZhanCN/OCH-Gesture-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-700 dark:text-gray-200"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.086-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.306.761-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.47-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.649.242 2.872.118 3.176.77.84 1.232 1.911 1.232 3.221 0 4.609-2.805 5.624-5.475 5.921.43.371.815 1.102.815 2.222v3.293c0 .321.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
