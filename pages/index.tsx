import type { NextPage } from "next";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (resource: any) => fetch(resource, {mode: "no-cors"}).then(res => res.text());
const Home: NextPage = () => {
  const {data} = useSWR("https://github-readme-stats.vercel.app/api?username=deluxe0x10&count_private=true&hide=stars,prs,issues,contribs&show_icons=true", fetcher);
  console.log(data);
  return <>{data && <div dangerouslySetInnerHTML={{__html: data}} /> }</>;
};

export default Home;
