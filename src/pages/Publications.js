import React from "react";
import * as styles from "./Publications.module.scss";
import fatigueAccidentVideo from "url:../videos/fatigue-foot-related-accident-football-match_web_720p.mp4";
import rehabilitationBiasVideo from "url:../videos/ignoring the basis of human Neurophysiological responses_web_720p.mp4";

const observations = [
  {
    id: "fatigue-foot-failure",
    category: "Biomechanics · Field Observation",
    title: "Fatigue-Related Foot Mechanism Failure During Competitive Locomotion",
    summary:
      "Non-contact lower-limb failure under cumulative neuromuscular fatigue, illustrating how degraded joint coordination can precede overt muscular collapse.",
    body: [
      "During sustained high-intensity locomotion, peripheral fatigue progressively compromises the timing and stability of foot–ground interaction. When neuromuscular control degrades faster than conscious compensation can correct, the foot–ankle complex may adopt maladaptive loading strategies.",
      "The sequence documented here shows a non-contact failure: no external perturbation is required for injury risk to emerge. From a biomechanical standpoint, this pattern is consistent with fatigue-driven loss of anticipatory postural adjustments and reduced capacity to regulate impact forces through the kinetic chain.",
      "Such observations support the need for assessment protocols that treat fatigue not merely as performance decline, but as a measurable shift in neurophysiological control of movement.",
    ],
    video: fatigueAccidentVideo,
  },
  {
    id: "rehabilitation-external-bias",
    category: "Clinical Practice · Field Observation",
    title: "External Negative Bias in Rehabilitation Without Neurophysiological Grounding",
    summary:
      "A rehabilitation interaction in which externally imposed negative cues appear disconnected from the patient’s intrinsic neuromuscular state.",
    body: [
      "Please observe this professional in rehabilitation, ignoring the basis of human neurophysiological responses, while providing wrongfully external negative biases to a patient.",
      "Therapeutic motor learning depends on feedback that is interpretable within the patient’s current physiological state. When corrective cues are imposed externally—without reference to intrinsic proprioceptive signals, fatigue, or compensatory strategies—the motor system may encode avoidance patterns rather than stable, autonomous control.",
      "From a human-factors and rehabilitation-science perspective, externally cued negative bias can reinforce maladaptive coordination if it is not calibrated to what the neuromuscular system can reliably process at that moment. Effective intervention should align cueing with measurable neurophysiological readiness, not with assumptions about compliance or effort alone.",
    ],
    video: rehabilitationBiasVideo,
  },
];

const Publications = () => {
  return (
    <section className={styles.publications}>
      <div className={styles.hero}>
        <h2 className={styles.title}>Real-World Movement and Rehabilitation Insights</h2>
   
        <p className={styles.intro}>
          Documented field observations from biomechanics and rehabilitation practice—
          short-form analyses of movement failure, clinical cueing, and the neurophysiological
          basis of motor control under real-world conditions.
        </p>
      </div>

      <div className={styles.list}>
        {observations.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className={`${styles.observation} ${index % 2 === 1 ? styles.observationAlt : ""}`}
          >
            <div className={styles.observationInner}>
              <div className={styles.media}>
                <video
                  className={styles.video}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={item.title}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className={styles.content}>
                <p className={styles.category}>{item.category}</p>
                <h3 className={styles.observationTitle}>{item.title}</h3>
                <p className={styles.summary}>{item.summary}</p>
                {item.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.body}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
