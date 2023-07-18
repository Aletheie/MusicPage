import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section className="grid grid-cols-12 w-full h-screen bg-[#ededed]">
      <Navbar />
      <MainContent />
    </section>
  );
}

export default App;
