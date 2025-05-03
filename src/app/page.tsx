import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Special from "@/Components/Special/Special";

import localFont from 'next/font/local';

const getfont = localFont({
    src: './fonts/PlaywriteRO-ExtraLight.ttf'
});


export default function Home() {
  

  return (
    <div className={`flex flex-col ${getfont.className}`}>
      <Navbar />
      <Banner />
      <Special />
      <Footer />
    </div>
  );
}
