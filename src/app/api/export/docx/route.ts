import { NextResponse } from "next/server";
import { Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";

function safeFileName(value: string) {
  return (value || "sol-ia-publisher")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "sol-ia-publisher";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = body.projectName || "Produto Editorial";
    const audience = body.audience || "Público não definido";
    const goal = body.goal || "Objetivo não definido";
    const visualStyle = body.visualStyle || "Tema não definido";
    const text = body.text || "";

    const paragraphs = String(text)
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => new Paragraph({ text: paragraph }));

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({ text: title, heading: HeadingLevel.TITLE }),
            new Paragraph({
              children: [new TextRun({ text: `Público: ${audience}`, italics: true })]
            }),
            new Paragraph({
              children: [new TextRun({ text: `Objetivo: ${goal}`, italics: true })]
            }),
            new Paragraph({
              children: [new TextRun({ text: `Estilo: ${visualStyle}`, italics: true })]
            }),
            new Paragraph({ text: " " }),
            new Paragraph({ text: "Manuscrito", heading: HeadingLevel.HEADING_1 }),
            ...paragraphs
          ]
        }
      ]
    });

    const buffer = await Packer.toBuffer(doc);

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename=${safeFileName(title)}-editavel.docx`
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Falha ao gerar DOCX.",
        detail: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
