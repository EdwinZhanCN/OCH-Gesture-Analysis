export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <section className="text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
          Gesture Research Lab
        </h1>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
          Exploring human-computer interaction through gestures
        </p>
      </section>
      <div className="prose dark:prose-invert max-w-none space-y-6 sm:space-y-8">
        <section className="space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold">
            Brief Introduction
          </h2>
          <p className="text-sm sm:text-base">
            This template showcases gesture research using a clean Next.js
            design.
          </p>
        </section>
        <section className="space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold">Objective</h2>
          <p className="text-sm sm:text-base">
            Provide an overview of goals and motivations for the project.
          </p>
        </section>
        <section className="space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold">
            Core Research Highlights
          </h2>
          <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
            <li>State-of-the-art gesture detection.</li>
            <li>High precision models.</li>
            <li>Real-time demos.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
