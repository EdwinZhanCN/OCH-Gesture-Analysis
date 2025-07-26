export const metadata = { title: 'About' };

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">About</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Bio</h2>
        <p>A short profile description goes here.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Expertise</h2>
        <p>Summarize areas of expertise.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Add email or social media links so visitors can reach out.</p>
      </section>
    </div>
  );
}
