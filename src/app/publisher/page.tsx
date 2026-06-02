"use client";

import { useRef, useState } from "react";

export default function PublisherPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("Aguardando manuscrito.");
  const [diagnostic, setDiagnostic] = useState("");

  function handleOpenUpload() {
    fileInputRef.current?.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setStatus("Arquivo carregado. Pronto para diagnóstico editorial.");
    setDiagnostic("");
  }

  function handleDiagnostic() {
    if (!fileName) {
      setStatus("Primeiro envie um manuscrito. Sem arquivo, a IA fica igual tia no grupo da família: opinando sem contexto.");
      return;
    }

    setStatus("Diagnóstico gerado.");
    setDiagnostic(
      `Diagnóstico inicial de "${fileName}":\n\n• Material recebido com sucesso.\n• Próximo passo: limpeza editorial.\n• Depois: estruturação em capítulos/blocos.\n• Depois: geração de versão premium em HTML, DOCX e PDF.\n\nNeste MVP, o diagnóstico ainda é simulado. A próxima etapa é conectar leitura real do arquivo e IA.`
    );
  }

  function handleExport() {
    if (!diagnostic) {
      setStatus("Gere o diagnóstico antes de exportar. Uma coisa de cada vez, senão vira obra pública.");
      return;
    }

    const blob = new Blob(
      [
        "SOL.IA PUBLISHER - DIAGNÓSTICO EDITORIAL\n\n",
        diagnostic,
      ],
      { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diagnostico-editorial-sol-ia.txt";
    a.click();
    URL.revokeObjectURL(url);

    setStatus("Arquivo TXT exportado com sucesso.");
  }

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
          Área de trabalho inicial do Publisher: upload, diagnóstico editorial,
          estruturação e exportação.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.md,.doc,.docx,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#C9A84C]/20 bg-black/40 p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Entrada do material</h2>
            <p className="mt-3 text-sm text-[#F5F0E8]/65">
              Envie um manuscrito, resumo ou conteúdo bruto.
            </p>

            <button
              onClick={handleOpenUpload}
              className="mt-6 rounded-full bg-[#C9A84C] px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              Enviar manuscrito
            </button>

            {fileName && (
              <p className="mt-4 text-sm text-[#F5F0E8]/70">
                Arquivo: <strong>{fileName}</strong>
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-[#C9A84C]/20 bg-black/40 p-6">
            <h2 className="text-xl font-bold text-[#C9A84C]">Cofre editorial</h2>
            <p className="mt-3 text-sm text-[#F5F0E8]/65">
              Diagnóstico, artefato, HTML, DOCX e PDF.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleDiagnostic}
                className="rounded-full border border-[#C9A84C] px-5 py-3 font-bold text-[#C9A84C] transition hover:bg-[#C9A84C] hover:text-black"
              >
                Gerar diagnóstico
              </button>

              <button
                onClick={handleExport}
                className="rounded-full bg-[#F5F0E8] px-5 py-3 font-bold text-black transition hover:scale-105"
              >
                Exportar TXT
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#C9A84C]/20 bg-black/50 p-6">
          <h3 className="font-bold text-[#C9A84C]">Status</h3>
          <p className="mt-2 whitespace-pre-line text-sm text-[#F5F0E8]/75">
            {status}
          </p>

          {diagnostic && (
            <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-black p-5 text-sm leading-7 text-[#F5F0E8]/80">
              {diagnostic}
            </pre>
          )}
        </div>
      </section>
    </main>
  );
}
