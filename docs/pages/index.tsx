import { ReactElement } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/styles/Navbar";

export default function Home() {
  return <>Init PAGE</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <Navbar />
      {page}
    </MainLayout>
  );
};
