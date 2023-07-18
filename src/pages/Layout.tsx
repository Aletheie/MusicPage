import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <section className="grid grid-cols-12 w-full h-screen bg-[#ededed]">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default HomePage;
