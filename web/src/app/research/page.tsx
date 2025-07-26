export const metadata = { title: 'Research' };

export default function Research() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Research</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Methodology Overview</h2>
        <p>A short description of the approach used for gesture analysis.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Results Summary</h2>
        <p>Include charts or visuals demonstrating the findings.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Demo</h2>
        <p>Embed demo videos or GIFs showcasing the system in action.</p>
      </section>
    </div>
  );
}
