function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden group">
      {/* IMAGE MOBILE */}
      <img
        src="/src/assets/images/presentation.jpeg"
        alt="Harry Potter mobile"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          md:hidden
        "
      />

      {/*IMAGE DESKTOP
         Image centrée + largeur volontairement réduite
      */}
      <img
        src="/src/assets/images/Harry_Potter_04.jpg"
        alt="Harry Potter desktop"
        className="
          absolute inset-0
          hidden md:block
          object-cover

          
          max-w-300
          mx-auto
          left-1/2 -translate-x-1/2

          
          scale-110
          group-hover:scale-125
          transition-transform duration-3000 ease-out
        "
      />

      {/* CONTENEUR TEXTE */}
      <div className="relative z-10 flex h-full items-end p-6 md:p-16">
        {/* WRAPPER CENTRAL */}

        <div className="w-full md:max-w-4xl mx-auto">
          {/* BLOC TEXTE */}
          <div
            className="
              max-w-2xl
              text-white

              md:translate-y-6
              md:opacity-0
              md:group-hover:translate-y-0
              md:group-hover:opacity-100

              transition-all duration-1200 ease-out
            "
          >
            <p
              className="
                text-lg md:text-xl
                leading-[1.85]
                font-HarryP

                /* Lettrine */
                first-letter:text-7xl
                md:first-letter:text-8xl
                lg:first-letter:text-9xl

                first-letter:font-bold
                first-letter:float-left
                first-letter:mr-4
                first-letter:-mt-1
                first-letter:text-yellow-500
              "
            >
              Sorcier britannique, survivant de la malédiction de Voldemort,
              élève de Gryffondor devenu le symbole de la résistance contre les
              forces du mal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
