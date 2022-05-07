import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import useSWR from "swr";

type GitHubRepo = {
  node_id: string;
  html_url: string;
  name: string;
  description: string;
  language: string;
};

const LoadingProject: FC = () => (
  <div className="card flex flex-col space-y-2">
    <div className="animate-pulse h-8 w-4/5 bg-slate-800 rounded-xl" />
    <div className="animate-pulse h-4 w-3/5 bg-slate-800 rounded-xl" />
    <div className="animate-pulse h-4 w-3/5 bg-slate-800 rounded-xl" />
  </div>
);

const Projects: NextPage = () => {
  const { data, error } = useSWR<GitHubRepo[]>(
    `https://api.github.com/users/jirsh/repos`
  );
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Head>
          <title>jir.sh | projects</title>
        </Head>
        {(data &&
          !error &&
          data.map((item) => (
            <Link key={item.node_id} href={item.html_url}>
              <a className="card" target="_blank">
                <div className="text-lg">{item.name}</div>
                <div className="text-sm">{item.description}</div>
                <div className="text-sm">Made using {item.language}</div>
              </a>
            </Link>
          ))) || <LoadingProject />}
      </div>
      <Link href="/">
        <a className="mt-3">Click here to go back!</a>
      </Link>
    </>
  );
};

export default Projects;
