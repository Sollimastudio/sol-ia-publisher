export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-10 text-[#F5F0E8]">
      <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.45em] text-[#C9A84C]">
          Sol.IA Publisher
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
          Transforme seu manuscrito em um produto editorial premium.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F5F0E8]/70">
          Uma casa limpa para o Publisher: upload, limpeza editorial,
          estruturação, HTML, DOCX, PDF e futura IA editorial.
        </p>

        <div className="mt-10">
          <a
            href="/publisher"
            className="inline-flex rounded-full bg-[#C9A84C] px-7 py-4 font-bold text-black shadow-xl shadow-black/40"
          >
            Abrir Publisher
          </a>
        </div>
      </section>
    </main>
  );
}
