export const metadata = { title: "Resources" };

export default function Resources() {
  return (
    <div className="prose dark:prose-invert max-w-none space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Resources</h1>
      <section className="space-y-2 sm:space-y-3">
        <p className="text-sm sm:text-base leading-relaxed">
          Provide dataset links, GitHub repositories and tools used such as
          YOLO, Roboflow and MediaPipe.
        </p>
      </section>
    </div>
  );
}
