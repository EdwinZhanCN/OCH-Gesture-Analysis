export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Brief Introduction</h2>
        <p>This template showcases gesture research using a clean Next.js design.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p>Provide an overview of goals and motivations for the project.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Core Research Highlights</h2>
        <ul className="list-disc pl-5">
          <li>State-of-the-art gesture detection.</li>
          <li>High precision models.</li>
          <li>Real-time demos.</li>
        </ul>
      </section>
    </div>
  );
}
