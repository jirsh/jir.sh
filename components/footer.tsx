import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-w-full bg-slate-700 h-12 p-3 flex items-center shadow-2xl mt-auto rounded-t-lg">
      <div className="text-sm md:text-lg">
        Made with ❤️ using{" "}
        <Link href="https://nextjs.org/">
          <a>Next.JS</a>
        </Link>
        ,{" "}
        <Link href="https://reactjs.org/">
          <a>React</a>
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com/">
          <a>Tailwind</a>
        </Link>{" "}
        and{" "}
        <Link href="https://pages.cloudflare.com/">
          <a>Cloudflare Pages</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
