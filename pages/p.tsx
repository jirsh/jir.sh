import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

const Projects: NextPage = () => {
  const { data, error } = useSWR(`https://api.github.com/users/jirsh/repos`);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data &&
        !error &&
        data.map((item: any) => (
          <Link key={item.node_id} href={item.html_url}>
            <a className="card" target="_blank">
              <div className="text-lg">{item.name}</div>
              <div className="text-sm">{item.description}</div>
              <div className="text-sm">Made using {item.language}</div>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Projects;
