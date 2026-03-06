import { useState } from "react";
import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

function ChronologiePage() {

  const [activeItem, setActiveItem] = useState<ChronologieItem | null>(null);

  return (
    // SECTION PAGE — centrée
    <section className="relative py-8 md:py-12 max-w-[940px] mx-auto px-4">
      
      {/* TITRE */}
      <h1 className="text-red-900 text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 tracking-wide">
        Quelques dates importantes
      </h1>

      {/* CONTENEUR TIMELINE
          (référence pour l’axe) */}
      <div className="relative">

        {/* AXE CENTRAL */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1.5 bg-yellow-400/90 z-0" />

        {/*  LISTE DES CARTES */}
        <div className="flex flex-col space-y-8 md:space-y-12">

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
                      ? "md:-translate-x-20"
                      : "md:translate-x-20"}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative bg-white rounded-lg border border-slate-200 max-w-3xl w-full p-5 md:p-6 shadow-lg">

            {/* Bouton fermer */}
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

export default ChronologiePage;
