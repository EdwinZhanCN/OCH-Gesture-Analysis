export const metadata = { title: 'About' };

export default function About() {
  return (
    <div className="prose dark:prose-invert space-y-8">
      <h1 className="text-3xl font-bold">About</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Bio</h2>
        <p>A short profile description goes here.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Expertise</h2>
        <p>Summarize areas of expertise.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Add email or social media links so visitors can reach out.</p>
      </section>
    </div>
  );
}
