import type { NextPage } from "next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Home: NextPage = () => {
  return (
    <div className="bg-slate-700 p-3 rounded-lg">
      <Bar
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 1,
            },
          },
          scales: {
            x: {
              min: 0.5,
              ticks: {
                color: "white",
                callback: (value, index, values) => {
                  if (value === 1) return `${value} year`;
                  return `${value} years`;
                },
              },
            },
            y: {
              ticks: {
                color: "white",
              },
            },
          },
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "List of skills",
              color: "white",
            },
          },
        }}
        data={{
          labels: [
            "C/C++",
            "PHP",
            "Node.JS",
            "React.JS",
            "Next.JS",
            "Docker",
            "Rust",
            "C#/.NET",
            "Windows Internals",
          ],
          datasets: [
            {
              label: "year(s)",
              data: [5, 6.5, 4, 3, 2, 2, 1, 5, 3],
              backgroundColor: [
                "green",
                "white",
                "cyan",
                "palegreen",
                "lightcoral",
                "skyblue",
                "red",
                "mediumspringgreen",
                "yellow",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Home;
