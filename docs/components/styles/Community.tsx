import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export const Community = () => {
  return (
    <div className="flex flex-col gap-10   px-4 pb-16 pt-10 md:gap-20 xl:px-0">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Community Support
      </h2>
      <div className="mx-auto grid w-full max-w-7xl  grid-cols-1 justify-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="card ">
          <div className="flex gap-2">
            <div className="w-fit pt-0.5">
              <DiscordIcon className="fill-blue-600" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Discord</span>
              <p className="text-content2">
                For ask to the comunity and solve all your questions
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex gap-2">
            <div className="w-fit pt-0.5">
              <GithubIcon className="fill-whiteInverted" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Github</span>
              <p className="text-content2">
                For report bugs and suggest new features
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex gap-2">
            <div className="w-fit pt-0.5">
              <TwitterIcon className="fill-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold">Twitter</span>
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

// M5B 2H1
