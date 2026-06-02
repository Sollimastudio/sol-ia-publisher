export default function PublisherPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F0E8] px-6 py-10">
      <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#C9A84C]/30 bg-[#13070A] p-8 shadow-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#C9A84C]">
          Sol.IA Publisher
        </p>

        <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Transforme seu manuscrito em um produto editorial premium.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#F5F0E8]/70">
          Esta é a área de trabalho do Publisher. Aqui vamos conectar upload,
          limpeza editorial, diagnóstico, estruturação, HTML, DOCX, PDF e pacote final.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#C9A84C]/20 bg-black/40 p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Entrada do material</h2>
            <p className="mt-3 text-sm text-[#F5F0E8]/65">
              Upload de manuscrito, resumo ou conteúdo bruto.
            </p>
          </div>

          <div className="rounded-2xl border border-[#C9A84C]/20 bg-black/40 p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Cofre editorial</h2>
            <p className="mt-3 text-sm text-[#F5F0E8]/65">
              Memória, diagnóstico, artefato, HTML, DOCX e PDF.
            </p>
          </div>
        </div>

        <button className="mt-10 rounded-full bg-[#C9A84C] px-6 py-3 font-bold text-black">
          Publisher carregado
        </button>
      </section>
    </main>
  );
}
