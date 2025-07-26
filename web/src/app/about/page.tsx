export const metadata = { title: "About" };

export default function About() {
  return (
    <div className="prose dark:prose-invert max-w-none space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About</h1>
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Bio</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          A short profile description goes here.
        </p>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Expertise</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Summarize areas of expertise.
        </p>
      </section>
      <section className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Contact</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Add email or social media links so visitors can reach out.
        </p>
      </section>
    </div>
  );
}
