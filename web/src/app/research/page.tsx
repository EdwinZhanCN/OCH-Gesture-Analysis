export const metadata = { title: "Research" };

export default function Research() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Gesture Analysis Research
      </h1>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Authors
        </h2>
        <p className="text-sm sm:text-base">Jane Doe, John Smith</p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Institute
        </h2>
        <p className="text-sm sm:text-base">
          Gesture Research Lab, Example University
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Body</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          A short description of the approach used for gesture analysis followed
          by a summary of the main findings. Include charts or visuals
          demonstrating the results and embed demo videos showcasing the system
          in action.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          References
        </h2>
        <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2">
          <li className="text-sm sm:text-base">Reference to related work.</li>
          <li className="text-sm sm:text-base">Additional citation.</li>
        </ol>
      </section>
    </article>
  );
}
