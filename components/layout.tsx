import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-800 text-white">
      <div className="min-h-screen mx-auto container flex flex-col">
        <Head>
          <title>jir.sh portfolio</title>
        </Head>
        <Header />
        <main className="pt-3 mx-3">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
