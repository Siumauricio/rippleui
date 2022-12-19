import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";

export const Community = () => {
  return (
    <div className="flex flex-col gap-10   py-16 px-4 md:gap-20 xl:px-0">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Community Support
      </h2>
      <div className="mx-auto grid w-full max-w-7xl  grid-cols-1 justify-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="card border border-border bg-transparent backdrop-blur-md">
          <div className="flex gap-4">
            <div className="w-fit">
              <DiscordIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">Discord</span>
              <p className="text-content2">
                For ask to the comunity and solve all your questions
              </p>
            </div>
          </div>
        </div>
        <div className="card border border-border bg-transparent backdrop-blur-md">
          <div className="flex gap-4">
            <div className="w-fit">
              <GithubIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">Github</span>
              <p className="text-content2">
                For report bugs and suggest new features
              </p>
            </div>
          </div>
        </div>
        <div className="card border border-border bg-transparent backdrop-blur-md">
          <div className="flex gap-4">
            <div className="w-fit">
              <DiscordIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">Twitter</span>
              <p className="text-content2">
                Follow us on Twitter to get the latest news and updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
