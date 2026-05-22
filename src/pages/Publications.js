import React from "react";
import * as styles from "./Publications.module.scss";
import fatigueAccidentVideo from "url:../videos/fatigue-foot-related-accident-football-match_web_720p.mp4";
import rehabilitationBiasVideo from "url:../videos/ignoring the basis of human Neurophysiological responses_web_720p.mp4";
import formativeZoneCover from "../img/Biomeccanica-della-caviglia-Copertina.jpg";
import tibiaDorsiMachine from "../img/Tibia Dorsi Calf Machine.png";
import tibiaDorsiMachine2 from "../img/Tibia Dorsi Calf Machine 2.png";

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
  {
    id: "foot-biomechanics-x-framework",
    category: "Biomechanics · Conceptual Framework",
    title:
      'The "X" Framework: Constrained Ankle Machines vs. Natural Foot Function and Free Movement',
    summary:
      "A visual contrast—four paired endpoints on an X—juxtaposing rigid, single-plane training devices with authentic foot biomechanics and unconstrained human movement.",
    body: [
      "Look closely: the whole composition reads like the letter X, with images arranged two-by-two at each extremity of its arms. Two arms depict limiting, mechanistic paths; the other two express (1) how the foot actually works as an integrated biomechanical system, and (2) what free, natural movement looks like when the lower limb is not forced into artificial constraints.",
      "On the problematic side, commercial seated tibia dorsi / tibialis-trainer machines—such as the Bells of Steel Tibialis Trainer Machine and similar products—typify a flawed model of ankle–foot training. They lock the foot on a platform, load dorsiflexion and plantarflexion in a single open-chain plane, and treat the foot–ankle complex as a simple hinge. That design cannot reproduce the coupled motion of the talocrural and subtalar joints, the peroneal mortise widening during dorsiflexion, intrinsic foot control of the medial arch, or the windlass mechanism that stiffens the forefoot during push-off.",
      "Such devices disconnect strengthening from gait: they generate force vectors and timing that differ from ground reaction during walking, offer no meaningful pronation–supination or multi-axis resistance, and bypass the neurophysiological sequencing described in gait analysis—from eccentric tibialis anterior activity at initial contact through triceps surae power generation in terminal stance. They are convenient for isolated muscle loading, but poor substitutes for educating the motor system that must control the foot in three dimensions under fatigue and variable surfaces.",
      "The constructive side of the X aligns with evidence-based ankle and foot biomechanics: the foot evolved from a flexible grasping structure into a rigid lever that transmits triceps surae force to the ground; the talocrural and subtalar joints govern most clinically relevant motion; blocking subtalar function shifts stress proximally and distally; and authentic locomotion depends on six gait determinants that keep the center of gravity on a smooth sinusoidal path. Free movement is not a single-plane repetition—it is coordinated, multi-axis, and context-dependent.",
    ],
    heroImage: {
      src: formativeZoneCover,
      alt: "Ankle and foot biomechanics — evolution of the foot through walking (Formative Zone)",
      caption:
        "Reference imagery from Formative Zone on ankle biomechanics, foot evolution, and the six determinants of gait.",
    },
    images: [
      {
        src: tibiaDorsiMachine,
        alt: "Seated tibia dorsi calf machine — single-plane open-chain ankle loading",
        caption:
          "Typical seated dorsiflexion machine: foot fixed, motion reduced to one plane.",
      },
      {
        src: tibiaDorsiMachine2,
        alt: "Tibia dorsi calf machine side view showing constrained foot placement",
        caption:
          "The same class of device—unable to train subtalar coupling or gait-specific force paths.",
      },
    ],
    references: [
      {
        label:
          "Biomeccanica della caviglia: dall’evoluzione del piede al gesto di camminare (Formative Zone)",
        url: "https://www.formativezone.it/biomeccanica-della-caviglia-dallevoluzione-del-piede-al-gesto-di-camminare/",
        note: "Italian-language reference on ankle evolution, foot leverage, and the six determinants of gait.",
      },
      {
        label: "Example of a problematic commercial product (Bells of Steel Tibialis Trainer Machine)",
        url: "https://bellsofsteel.us/products/tibialis-trainer-machine",
        note: "Illustrative only—representative of single-axis dorsiflexion trainers, not an endorsement.",
      },
    ],
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
                {item.video && (
                  <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={item.title}
                  >
                    {item.videoHd && (
                      <source
                        src={item.videoHd}
                        type="video/mp4"
                        media="(min-width: 1024px)"
                      />
                    )}
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {item.heroImage && (
                  <figure className={styles.heroFigure}>
                    <img
                      className={styles.heroImage}
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      loading="lazy"
                    />
                    {item.heroImage.caption && (
                      <figcaption className={styles.caption}>
                        {item.heroImage.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {item.images?.length > 0 && (
                  <div
                    className={`${styles.imageGrid} ${
                      item.heroImage ? styles.imageGridBelow : ""
                    }`}
                  >
                    {item.images.map((image) => (
                      <figure key={image.alt} className={styles.figure}>
                        <img
                          className={styles.image}
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                        />
                        {image.caption && (
                          <figcaption className={styles.caption}>
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
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

                {item.references?.length > 0 && (
                  <div className={styles.references}>
                    <h4 className={styles.referencesTitle}>References</h4>
                    <ul className={styles.referenceList}>
                      {item.references.map((ref) => (
                        <li key={ref.url} className={styles.referenceItem}>
                          <a
                            className={styles.referenceLink}
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {ref.label}
                          </a>
                          {ref.note && (
                            <p className={styles.referenceNote}>{ref.note}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
