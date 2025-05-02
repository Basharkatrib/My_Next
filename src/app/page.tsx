import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Special from "@/Components/Special/Special";


export default function Home() {
  

  return (
    <div className="flex flex-col">
      <Navbar />
      <Banner />
      {/* <Special /> */}
      <Footer />
    </div>
  );
}
