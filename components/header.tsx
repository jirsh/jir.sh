import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useState } from "react";

const NavLink: FC<{ href: string; children: ReactNode }> = ({
  children,
  href,
}) => {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <Link href={href}>
      <a className="relative flex h-full items-center group">
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
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      <header className="bg-slate-700 h-16 px-3 flex items-center shadow-2xl rounded-b-lg">
        <Link href="/">
          <a className="text-xl h-full flex items-center">jir/sh</a>
        </Link>
        <div className="ml-auto" />
        <nav className="space-x-3 hidden md:flex h-full">
          <NavLink href="/p">Projects</NavLink>
          <NavLink href="mailto:c@jir.sh">Contact</NavLink>
        </nav>
        <div className="block md:hidden">
          <button
            className="text-gray-500 w-10 h-10 relative focus:outline-none"
            onClick={() => setOpened(!opened)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  opened ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  opened ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  opened ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>
      <nav
        className={`absolute z-[100] top-16 flex h-16 mt-3 container mx-auto md:hidden transition-transform ${
          opened ? "scale-100" : "scale-0"
        }`}
      >
        <div className="rounded-lg p-3 bg-slate-700 shadow-2xl outline outline-1 mx-3 outline-red-300 w-full space-x-3 flex h-full">
          <NavLink href="/p">Projects</NavLink>
          <NavLink href="mailto:c@jir.sh">Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
