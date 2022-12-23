import "./App.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col h-screen bg-slate-900 text-slate-50">
        <Navbar />
        <section className="flex-1 lg:w-3/4 mx-auto m-8">
          <RoutesApp />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
