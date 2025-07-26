export const metadata = { title: "Publications" };

export default function Publications() {
  return (
    <div className="prose dark:prose-invert max-w-none space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Publications
      </h1>
      <section className="space-y-2 sm:space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          List your papers and cite relevant works. Provide links to PDFs or
          external sources such as arXiv and GitHub.
        </p>
      </section>
    </div>
  );
}
