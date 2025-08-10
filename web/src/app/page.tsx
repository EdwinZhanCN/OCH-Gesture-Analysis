export const metadata = { title: "Research" };

export default function Research() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Task-Centric Gesture Analysis
      </h1>

      {/* Meta */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Authors
        </h2>
        <p className="text-sm sm:text-base">Zihao Zhan</p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Institute
        </h2>
        <p className="text-sm sm:text-base">OCH Gesture Analysis</p>
      </section>

      {/* Summary */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Summary
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          We study robustness in gesture-based HCI from a{" "}
          <strong>task–environment</strong> perspective. Using two geometrically
          contrasted gestures (OpenPalm, CloseFist), we train on Normal Light
          (NL) and evaluate on three test splits: NL, Interference (IN) and
          Low-Light (LL). We benchmark four single-stage detector–pose models
          (YOLOv11 n/s pose; Roboflow 3.0 nano/small) with IoU-based{" "}
          <strong>box mAP@50</strong>
          and OKS-based <strong>pose mAP@50</strong>, and report{" "}
          <em>retained performance</em> relative to NL.
        </p>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>
            <strong>Detection</strong> remains near-ceiling across NL/IN/LL.
          </li>
          <li>
            <strong>Pose</strong> is strong in NL/IN but{" "}
            <strong>collapses in LL</strong> due to information loss/low SNR.
          </li>
          <li>
            Surface interference behaves like <em>additive texture</em> (minimal
            impact), while LL erases fine, visible cues required by keypoints.
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Resources
        </h2>
        <ul className="list-disc pl-5 text-sm sm:text-base">
          <li>
            <a
              href="/Zihao_Zhan_Final_Paper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Paper (PDF)
            </a>{" "}
            <span className="opacity-70"></span>
          </li>
          <li>
            <a
              href="https://github.com/EdwinZhanCN/OCH-Gesture-Analysis"
              target="_blank"
              rel="noreferrer"
            >
              Code & dataset versions (GitHub)
            </a>
          </li>
        </ul>
      </section>

      {/* Figures */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          Figures
        </h2>
        <figure className="not-prose">
          <img
            src="/detection_drop.png"
            alt="Detection mAP@50 grouped bars across NL/IN/LL for four models"
            className="rounded-xl shadow"
          />
          <figcaption className="text-sm mt-2">
            Detection mAP@50 (IoU) by split and model.
          </figcaption>
        </figure>
        <figure className="not-prose mt-4">
          <img
            src="/pose_map.png"
            alt="Pose mAP@50 grouped bars across NL/IN/LL for four models"
            className="rounded-xl shadow"
          />
          <figcaption className="text-sm mt-2">
            Pose mAP@50 (OKS@0.5) by split and model.
          </figcaption>
        </figure>
        <figure className="not-prose mt-4">
          <img
            src="/detection_map.png"
            alt="Detection NL to LL slopegraph per model"
            className="rounded-xl shadow"
          />
          <figcaption className="text-sm mt-2">
            Detection NL→LL drop per model.
          </figcaption>
        </figure>
        <figure className="not-prose mt-4">
          <img
            src="/pose_drop.png"
            alt="Pose NL to LL slopegraph per model"
            className="rounded-xl shadow"
          />
          <figcaption className="text-sm mt-2">
            Pose NL→LL drop per model.
          </figcaption>
        </figure>
      </section>

      {/* References (lightweight) */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
          References
        </h2>
        <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
          <li>
            <a
              href="https://docs.ultralytics.com/models/yolo11"
              target="_blank"
              rel="noreferrer"
            >
              Ultralytics YOLO11 documentation
            </a>
          </li>
          <li>
            <a
              href="https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker"
              target="_blank"
              rel="noreferrer"
            >
              MediaPipe Hands (Google AI Edge)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hendrycks/robustness"
              target="_blank"
              rel="noreferrer"
            >
              ImageNet-C / corruption robustness
            </a>
          </li>
        </ol>
      </section>
    </article>
  );
}
