import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-12 p-3 flex items-center mt-auto">
      <div className="text-sm md:text-lg">
        Made with ❤️ using{" "}
        <Link href="https://nextjs.org/">
          <a target="_blank">Next.JS</a>
        </Link>
        ,{" "}
        <Link href="https://reactjs.org/">
          <a target="_blank">React</a>
        </Link>
        ,{" "}
        <Link href="https://tailwindcss.com/">
          <a target="_blank">Tailwind</a>
        </Link>{" "}
        and{" "}
        <Link href="https://pages.cloudflare.com/">
          <a target="_blank">Cloudflare Pages</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
