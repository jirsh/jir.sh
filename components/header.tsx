import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

const NavLink: FC<{ href: string; children: ReactNode }> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link href={href}>
      <a className="relative hidden md:flex h-full items-center group">
        {(active && (
          <span className="absolute bottom-0 left-0 bg-gray-500 w-full h-0.5" />
        )) || (
          <span className="absolute bottom-0 left-0 bg-gray-500 w-0 h-0.5 group-hover:w-full transition-all ease-out duration-100" />
        )}
        {children}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="bg-slate-700 h-16 px-3 flex items-center shadow-2xl rounded-b-lg">
      <Link href="/">
        <a className="text-xl h-full flex items-center">jir/sh</a>
      </Link>
      <div className="ml-auto" />
      <div className="space-x-3 hidden md:flex h-full">
        <NavLink href="/p">Projects</NavLink>
        <NavLink href="mailto:c@jir.sh">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
