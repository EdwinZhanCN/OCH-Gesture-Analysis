export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold mb-2">OCH Gesture Research</h1>
        <p className="text-lg">
          A human-computer interaction research through gestures
        </p>
      </section>
      <div className="prose dark:prose-invert space-y-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Brief Introduction</h2>
          <p>
            This template showcases gesture research using a clean Next.js
            design.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Objective</h2>
          <p>Provide an overview of goals and motivations for the project.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Core Research Highlights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>State-of-the-art gesture detection.</li>
            <li>High precision models.</li>
            <li>Real-time demos.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
