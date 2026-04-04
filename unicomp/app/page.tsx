import Image from "next/image";
import Header from "@/components/global_components/header";
import Footer from "@/components/global_components/footer";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center text-6xl font-bold text-[#0E5499] py-4 max-w-xxl">Campus Competition Hub</div>
        <div className="text-center text-xl text-[#000000] max-w-md">Discover, participate, and excel in campus-wide competitions. Your journey to excellence starts here.</div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
