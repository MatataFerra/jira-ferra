import type { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import { CardList } from "../components/ui";
import { MainLayout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <CardList status="pending" />
      <CardList status="in-progress" />
      <CardList status="finished" />
      <ToastContainer autoClose={3000} limit={3} />
    </MainLayout>
  );
};

export default Home;
