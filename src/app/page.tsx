import Banner from "@/Components/Banner/Banner";
import Customers from "@/Components/Customers/Customers";
import Expect from "@/Components/Expect/Expect";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Special from "@/Components/Special/Special";

import localFont from 'next/font/local';

const getfont = localFont({
    src: './fonts/DavidLibre-Regular.ttf'
});


export default function Home() {
  

  return (
    <div className={`flex flex-col ${getfont.className}`}>
      <Navbar />
      <Banner />
      <Special />
      <Expect />
      <Customers />
      <Footer />
    </div>
  );
}
