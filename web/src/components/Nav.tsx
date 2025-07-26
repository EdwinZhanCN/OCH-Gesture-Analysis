import Link from 'next/link';

export default function Nav() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="sticky top-0 bg-white border-b shadow-sm z-10">
      <div className="container mx-auto flex gap-6 px-4 py-3">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
