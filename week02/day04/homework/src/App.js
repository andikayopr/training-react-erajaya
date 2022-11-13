import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import NextMeetup from "./components/NextMeetup";
import AboutMeetup from "./components/AboutMeetup";
import PastMeetup from "./components/PastMeetup";
import Members from "./components/Members";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <div className="container">
        <Headline />
        <NextMeetup />
        <AboutMeetup />
        <Members />
        <PastMeetup />
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
