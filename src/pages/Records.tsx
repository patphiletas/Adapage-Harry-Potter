import { useState } from "react";
import Card from "../components/Card";
import { records } from "../data/Records";
import type { RecordItem } from "../type/interfaces";

function RecordsPage() {
  const [activeItem, setActiveItem] = useState<RecordItem | null>(null);

  return (
    <section className="bg-red-900 py-12 px-6 rounded-3xl max-w-7xl mx-auto">
      <h1 className="text-white text-3xl font-bold text-center mb-8">
        Records de Harry Potter
      </h1>

      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {records.map((item: RecordItem) => (
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl max-w-2xl w-full mx-4 p-6">
            {/* Fermer */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-red-800 font-semibold hover:underline"
            >
              Fermer
            </button>

            <h2 className="text-2xl font-black mb-1">{activeItem.titre}</h2>

            <p className="text-gray-500 mb-4">{activeItem.date}</p>

            <img
              src={activeItem.photo}
              alt={activeItem.titre}
              className="w-full rounded-lg mb-4"
            />

            <p className="leading-relaxed text-gray-800">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default RecordsPage;
