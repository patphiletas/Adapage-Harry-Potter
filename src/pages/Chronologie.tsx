import { useState } from "react";
import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

function ChronologiePage() {

  const [activeItem, setActiveItem] = useState<ChronologieItem | null>(null);

  return (
    // SECTION PAGE — centrée
    <section className="relative py-10 md:py-20 max-w-940px mx-auto px-4">
      
      {/* TITRE */}
      <h1 className="text-red-900 text-4xl font-black text-center mb-12">
        Quelques dates importantes
      </h1>

      {/* CONTENEUR TIMELINE
          (référence pour l’axe) */}
      <div className="relative">

        {/* AXE CENTRAL */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-3 bg-yellow-400 z-0" />

        {/*  LISTE DES CARTES */}
        <div className="flex flex-col space-y-12 md:space-y-20">

          {chronologie.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
            
              // LIGNE DE TIMELINE
          
            <div key={item.id} className="relative flex justify-center w-full">

                {/* 
                    CARTE
                    - centré par défaut (mobile)
                    - décalé seulement en md+
                */}
                <div
                  className={`
                    relative
                    w-full max-w-md
                    ${isLeft
                      ? "md:-translate-x-24"
                      : "md:translate-x-24"}
                  `}
                >
                  {/* 
                      CARTE
                      (largeur stable)
                   */}
                  <div className="w-full">
                    <Card
                      title={item.titre}
                      subtitle={item.date}
                      description={item.description}
                      image={item.photo}
                      onReadMore={() => setActiveItem(item)}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL — LIRE PLUS */}
      {activeItem && (
        <div className="fixed inset-5 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl max-w-3xl w-full mx-4 p-6 md:p-8">

            {/* Bouton fermer */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-red-800 font-semibold hover:underline"
            >
              Fermer
            </button>

            <h2 className="text-2xl font-black mb-1">
              {activeItem.titre}
            </h2>

            <p className="text-gray-500 mb-4">
              {activeItem.date}
            </p>

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

export default ChronologiePage;
