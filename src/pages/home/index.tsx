export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center  ">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Borges Tech
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus Links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a
            href="https://music.youtube.com/watch?v=TsOtMihNrCI&list=OLAK5uy_lEQUj31p6LNMYEMsBr6v2Y3uCS8HJT9Og"
            target="_blank"
          >
            <p className="text-base md:text-lg">Canal no Youtube</p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4"></footer>
      </main>
    </div>
  );
}
