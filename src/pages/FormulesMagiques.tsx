import { useState } from "react";
import Card from "../components/Card";
import { formulesMagiques } from "../data/formules";
import type { FormuleMagiqueItem } from "../type/interfaces";

function FormulesMagiquesPage() {
  const [activeItem, setActiveItem] = useState<FormuleMagiqueItem | null>(null);

  return (
    <section className="bg-gradient-to-br from-red-900 to-red-800 py-8 md:py-10 px-4 md:px-6 rounded-xl max-w-6xl mx-auto shadow-sm">
      
      {/* TITRE */}
      <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-7 tracking-wide">
        Formules magiques emblématiques de Harry Potter
      </h1>

      {/* GRID */}
      <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2">
        {formulesMagiques.map((item: FormuleMagiqueItem) => (
          <Card
            key={item.id}
            title={item.titre}
            subtitle={item.date}
            description={item.description}
            image={item.photo}
            onReadMore={() => setActiveItem(item)}
          />
        ))}
      </div>

      {/*MODAL LIRE PLUS*/}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative bg-white rounded-lg border border-slate-200 max-w-2xl w-full p-5 md:p-6 shadow-lg">

            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3.5 right-4 text-red-800 text-sm font-medium hover:underline"
            >
              Fermer
            </button>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
              {activeItem.titre}
            </h2>

            <p className="text-sm text-slate-500 mb-3.5">
              {activeItem.date}
            </p>

            <img
              src={activeItem.photo}
              alt={activeItem.titre}
              className="w-full rounded-md mb-3.5"
            />

            <p className="text-sm leading-relaxed text-slate-800">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default FormulesMagiquesPage;
