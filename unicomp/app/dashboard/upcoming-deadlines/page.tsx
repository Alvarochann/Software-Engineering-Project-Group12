import Image from "next/image";
import Header from "@/components/global_components/header";
import Footer from "@/components/global_components/footer";
import Link from "next/link";
import Main from "@/app/dashboard/upcoming-deadlines/main";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Dashboard;
