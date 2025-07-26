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
    <nav className="flex gap-4 p-4 border-b mb-8">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="text-blue-700 hover:underline">
          {label}
        </Link>
      ))}
    </nav>
  );
}
