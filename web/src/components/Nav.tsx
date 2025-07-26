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
      <div className="container mx-auto flex gap-4 px-4 py-3">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
