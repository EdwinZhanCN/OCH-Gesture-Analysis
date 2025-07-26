export const metadata = { title: 'Research' };

export default function Research() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Research</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Methodology Overview</h2>
        <p>A short description of the approach used for gesture analysis.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Results Summary</h2>
        <p>Include charts or visuals demonstrating the findings.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Demo</h2>
        <p>Embed demo videos or GIFs showcasing the system in action.</p>
      </section>
    </div>
  );
}
