export const metadata = { title: 'Research' };

export default function Research() {
  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-3xl font-bold">Gesture Analysis Research</h1>

      <section>
        <h2>Authors</h2>
        <p>Jane Doe, John Smith</p>
      </section>

      <section>
        <h2>Institute</h2>
        <p>Gesture Research Lab, Example University</p>
      </section>

      <section>
        <h2>Body</h2>
        <p>
          A short description of the approach used for gesture analysis followed
          by a summary of the main findings. Include charts or visuals
          demonstrating the results and embed demo videos showcasing the system
          in action.
        </p>
      </section>

      <section>
        <h2>References</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Reference to related work.</li>
          <li>Additional citation.</li>
        </ol>
      </section>
    </article>
  );
}
