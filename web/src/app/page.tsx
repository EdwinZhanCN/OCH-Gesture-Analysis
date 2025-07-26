export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Brief Introduction</h2>
        <p>
          This template showcases gesture research using a clean Next.js design.
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
  );
}
