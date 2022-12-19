import { ReactElement } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Community } from "../components/styles/Community";
import { Hero } from "../components/styles/Hero";
import { Navbar } from "../components/styles/Navbar";
import { Reusable } from "../components/styles/Reusable";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 pb-28">
      <Hero />
      <Reusable />
      <Community />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <Navbar />
      {page}
    </MainLayout>
  );
};
