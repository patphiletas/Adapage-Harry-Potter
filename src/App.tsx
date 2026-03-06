import "./App.css";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Chronologie from "./pages/Chronologie";
import Records from "./pages/Records";
import FormulesMagiques from "./pages/FormulesMagiques";

function App() {
  return (
    <>
      <header>
        <Link to="/"
        className="bg-red-900 flex items-center justify-center py-3 px-4 hover:bg-red-800 transition-colors">

          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-64 md:w-72 items-center transition-transform duration-200 hover:scale-105"
          />
          </Link>

        <div className="bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-center gap-2 md:gap-3 px-4 py-3">
          <Link
            to="/chronologie"
            className="px-3 py-1.5 rounded-md border border-yellow-500/60 bg-yellow-300/80 hover:bg-yellow-300 text-sm font-medium transition-colors"
          >
            Chronologie
          </Link>

          <Link
            to="/records"
            className="px-3 py-1.5 rounded-md border border-yellow-500/60 bg-yellow-300/80 hover:bg-yellow-300 text-sm font-medium transition-colors"
          >
            Records
          </Link>

          <Link
            to="/formulesMagiques"
            className="px-3 py-1.5 rounded-md border border-yellow-500/60 bg-yellow-300/80 hover:bg-yellow-300 text-sm font-medium transition-colors"
          >
            Formules Magiques
          </Link>
        </div>  
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chronologie" element={<Chronologie />} />
          <Route path="/records" element={<Records />} />
          <Route path="/formulesMagiques" element={<FormulesMagiques />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
