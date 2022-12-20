import { ReactElement } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import Meta from "../components/mdx/layout/Meta";
import { Community } from "../components/styles/Community";
import { DarkMode } from "../components/styles/DarkMode";
import { Hero } from "../components/styles/Hero";
import { Navbar } from "../components/styles/Navbar";
import { Reusable } from "../components/styles/Reusable";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 pb-28">
      <Hero />
      <Reusable />
      <DarkMode />
      <Community />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <Meta
        meta={{
          title: "Ripple UI | TailwindCSS Components",
          description:
            "Ripple UI is a collection of TailwindCSS components that are reusable and easy to use.",
        }}
      />
      <Navbar />
      {page}
    </MainLayout>
  );
};
