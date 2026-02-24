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
        className="bg-red-900 flex items-center justify-center p-4 hover:bg-red-800">

          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-80 items-center hover:scale-115"
          />
          </Link>

        <div className="bg-gray-200 flex items-center justify-center p-4">
          <Link
            to="/chronologie"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-5"
          >
            Chronologie
          </Link>

          <Link
            to="/records"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-5"
          >
            Records
          </Link>

          <Link
            to="/formulesMagiques"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-5"
          >
            Formules Magiques
          </Link>
        </div>  
      </header>

      <main className="max-w-8xl mx-auto px-6">
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
