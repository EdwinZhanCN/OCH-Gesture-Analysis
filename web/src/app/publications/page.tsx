import BibtexButton from "./BibtexButton";

export const metadata = { title: "Publications" };

// --- Simple publications data model ---
// Fill in your own entries below. You can add/remove fields as needed.
// Tip: host PDFs in /public (e.g., /papers/your-paper.pdf) or link to arXiv/GitHub.
const publications = [
  {
    id: "gesture-hci-2025",
    title:
      "Task-Centric Robustness in Gesture-Based HCI: Detection vs. Pose under Low-Light and Surface Interference",
    authors: "Zihao Zhan",
    venue: "Course Project Report",
    year: 2025,
    tags: ["HCI", "Robustness", "Detection vs. Pose"],
    links: {
      pdf: "/Zihao_Zhan_Final_Paper.pdf",
      code: "https://github.com/EdwinZhanCN/OCH-Gesture-Analysis",
      dataset:
        "https://app.roboflow.com/edscvworkspace/open-hand-vs-close-hand",
    },
    bibtex: `@misc{zhan2025taskcentric,\n  author = {Zhan, Zihao},\n  title = {Task-Centric Robustness in Gesture-Based HCI: Detection vs. Pose under Low-Light and Surface Interference},\n  year = {2025},\n  howpublished = {Course Project Report},\n  url = {https://github.com/your-repo}\n}`,
    summary:
      "We frame gesture robustness as a task–environment problem and show that detection remains near-ceiling across NL/IN/LL while pose collapses in LL; we report IoU-based box mAP@50 and OKS-based pose mAP@50, plus retained performance relative to NL.",
  },
  // Add more items here as needed
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5">
      {children}
    </span>
  );
}

function LinkPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (!href) return null as any;
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium hover:underline"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Publications() {
  // Group by year (newest first)
  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, p) => {
      acc[p.year] = acc[p.year] || [];
      acc[p.year].push(p);
      return acc;
    },
    {},
  );
  const years = Object.keys(byYear)
    .map((y) => Number(y))
    .sort((a, b) => b - a);

  return (
    <div className="prose dark:prose-invert max-w-none space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold">Publications</h1>

      {years.map((year) => (
        <section key={year} className="space-y-4">
          <h2 className="text-xl font-semibold">{year}</h2>
          <ul className="not-prose divide-y dark:divide-neutral-800">
            {byYear[year].map((p) => (
              <li key={p.id} className="py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1 sm:max-w-3xl">
                    <h3 className="text-base font-semibold leading-snug">
                      {p.links?.pdf ? (
                        <a
                          href={p.links.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p className="text-sm opacity-80">{p.authors}</p>
                    <p className="text-sm opacity-80">{p.venue}</p>
                    {p.summary && (
                      <p className="text-sm opacity-80">{p.summary}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags?.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                    {p.links?.pdf && (
                      <LinkPill href={p.links.pdf}>PDF</LinkPill>
                    )}
                    {p.links?.code && (
                      <LinkPill href={p.links.code}>Code</LinkPill>
                    )}
                    {p.links?.dataset && (
                      <LinkPill href={p.links.dataset}>Dataset</LinkPill>
                    )}
                    {p.bibtex && <BibtexButton bibtex={p.bibtex} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
