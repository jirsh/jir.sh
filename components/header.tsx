import Link from "next/link";

const Header = () => {
  return (
    <header className="min-w-full bg-slate-700 h-16 p-3 flex items-center shadow-2xl rounded-b-lg">
      <Link href="/">
        <a>
          <div className="text-xl">jir/sh</div>
        </a>
      </Link>
      <div className="ml-auto" />
      <Link href="/p">
        <a>
          <div className="hidden md:block">Projects</div>
        </a>
      </Link>
    </header>
  );
};

export default Header;
