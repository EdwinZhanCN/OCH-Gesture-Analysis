"use client";

interface BibtexButtonProps {
  bibtex: string;
}

export default function BibtexButton({ bibtex }: BibtexButtonProps) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      alert("BibTeX copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button
      className="inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
      onClick={copy}
      title="Copy BibTeX"
    >
      BibTeX
    </button>
  );
}
