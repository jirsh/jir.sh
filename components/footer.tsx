import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
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
      <div className="ml-0 md:ml-auto">
        <Link href="https://github.com/jirsh">
          <a className="flex items-center space-x-1" target="_blank">
            <FaGithub />
            <div>GitHub</div>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
