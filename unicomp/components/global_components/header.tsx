import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#8cabd9] py-6 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/file.svg" width={32} height={32} alt="UniComp Logo" />
            <span className="font-bold text-[#000000]">UniComp</span>
          </div>
        </Link>

        <div className="flex gap-12 text-[#0E5499] text-sm">
          <Link href="/" className="hover:underline">
            Competition
          </Link>
          <Link href="/calender" className="hover:underline">
            Calender
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>

        <div className="flex gap-6">
          <Link href="/notification">
            <Image src="/file.svg" width={32} height={32} alt="Notification" className="cursor-pointer" />
          </Link>
          <Link href="/profile">
            <Image src="/file.svg" width={32} height={32} alt="Profile" className="cursor-pointer rounded-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
