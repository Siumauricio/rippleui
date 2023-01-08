import React, { useEffect, useState } from "react";
import { items } from "../../utils/items";

export const Statistics = () => {
  const projectName = "rippleui";
  const githubProjectName = "siumauricio/rippleui";
  const [totalDownloads, setTotalDownloads] = useState("");
  const [repoStars, setRepoStars] = useState("");
  const [totalContributors, setTotalContributors] = useState("");

  async function getTotalDownloads() {
    const response = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${projectName}`
    );
    const data = await response.json();
    return data.downloads;
  }

  async function getRepoStars() {
    const response = await fetch(
      `https://api.github.com/repos/${githubProjectName}`
    );
    const data = await response.json();
    return data.stargazers_count;
  }
  async function getTotalContributors() {
    const response = await fetch(
      `https://api.github.com/repos/${githubProjectName}/contributors?per_page=2&anon=true`
    );
    const data = await response.json();
    return data.length;
  }

  useEffect(() => {
    getTotalDownloads().then((data) => {
      let formatter = Intl.NumberFormat("en", { notation: "compact" });
      let numberFormated = formatter.format(data);
      setTotalDownloads(numberFormated);
    });
    getRepoStars().then((data) => {
      let formatter = Intl.NumberFormat("en", { notation: "compact" });
      let numberFormated = formatter.format(data);
      setRepoStars(numberFormated);
    });

    getTotalContributors().then((data) => {
      let formatter = Intl.NumberFormat("en", { notation: "compact" });
      let numberFormated = formatter.format(data);
      setTotalContributors(numberFormated);
    });
  }, []);

  return (
    <section className="py-28 px-4 md:gap-20 xl:px-0">
      <div className="flex flex-col items-center gap-3">
        <span className="text-center text-2xl font-semibold text-primary">
          Community
        </span>

        <div className="w-full max-w-4xl">
          <h2 className="mx-auto w-full max-w-xl text-center text-3xl font-bold md:text-4xl">
            Get and Give Help by Joining our Contributors Community
          </h2>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-row flex-wrap justify-center gap-12 pt-12 sm:justify-between">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-5xl font-semibold text-primary">
            {totalDownloads}
          </h3>
          <div className="text-content3">Installs on NPM</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-5xl font-semibold text-primary">{repoStars}</h3>
          <div className="text-content3">Stars on Github</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-5xl font-semibold text-primary">{5}</h3>
          <div className="text-content3">Total contributors</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-5xl font-semibold text-primary">
            {items[1].links.length}
          </h3>
          <div className="text-content3">Total of components</div>
        </div>
      </div>
    </section>
  );
};
