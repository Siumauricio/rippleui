import { ReactElement } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import Meta from "../components/mdx/layout/Meta";
import { Community } from "../components/styles/Community";
import { Comparison } from "../components/styles/Comparison";
import { DarkMode } from "../components/styles/DarkMode";
import { Footer } from "../components/styles/Footer";
import { GetStarted } from "../components/styles/GetStarted";
import { Hero } from "../components/styles/Hero";
import { Navbar } from "../components/styles/Navbar";
import { Reusable } from "../components/styles/Reusable";
import { Statistics } from "../components/styles/Statistics";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 ">
      <Hero />
      <Reusable />
      <Statistics />
      <GetStarted />
      <Comparison />
      <DarkMode />
      <Community />
      <Footer />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <Meta
        meta={{
          title: " ",
          description:
            "Cleanest, modern and beatifull Tailwind CSS components, Ripple UI is a collection of components that can be easily integrated into your project to provide a consistent, responsive design and improve the user experience of your application.",
        }}
      />
      <Navbar />
      {page}
    </MainLayout>
  );
};
