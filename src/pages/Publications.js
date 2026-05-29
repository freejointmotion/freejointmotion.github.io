import React from "react";
import * as styles from "./Publications.module.scss";
import fatigueAccidentVideo from "url:../videos/fatigue-foot-related-accident-football-match_web_720p.mp4";
import medislipperDevice from "../img/medislipper-1000-plus.jpg";
import medislipperFootCradle from "../img/medislipper-foot-cradle.png";
import elginLowerLegExerciser from "../img/elgin-lower-leg-exerciser.jpg";
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
      "Such observations support the need for assessment protocols that treat fatigue not merely as performance decline, but as a measurable shift in neurophysiological control of movement—and for rehabilitation technology that trains coordination under realistic loading, not isolated repetitions disconnected from gait.",
    ],
    video: fatigueAccidentVideo,
  },
  {
    id: "rehab-technology-market-gap",
    category: "Rehabilitation Technology · Critical Review",
    title:
      "Motorized and Lever-Based Ankle Apparatuses: Greater Complexity, Persistent Kinematic Disconnect",
    summary:
      "Commercial devices marketed for active and passive ankle rehabilitation often impose fixed mechanical paths that diverge from the coupled, multi-planar motion of the talocrural and subtalar joints during functional movement.",
    body: [
      "The contemporary ankle-rehabilitation market spans a wide price and sophistication spectrum—from elastic resistance bands and single-plane seated trainers to motorized platforms and weighted lever systems. Devices at the upper end of this spectrum are frequently presented as technologically advanced solutions for proprioceptive recovery and tibio-tarsal range of motion. Yet proximity to clinical settings and digital monitoring does not, by itself, guarantee biomechanical fidelity.",
      "A recurring design limitation across these categories is the substitution of a machine-defined degrees-of-freedom problem for the foot’s intrinsic degrees of freedom. When the foot is rigidly fixated, driven along a crank-defined arc, or loaded through discrete inversion–eversion and dorsiflexion–plantarflexion stations, the motor system learns coordination within the device’s constraints—not within the variable coupling of joints, soft tissue, and ground reaction forces encountered in walking, running, or cutting.",
      "The following apparatuses illustrate this gap. They represent some of the closer approximations to multi-axis intent currently available in commerce; they remain materially disconnected from authentic foot function relative to a user-guided, multi-planar platform.",
    ],
    images: [
      {
        src: medislipperDevice,
        alt: "Medislipper 1000 Plus — motorized ankle rehabilitation apparatus with digital control panel",
        caption:
          "Medislipper 1000 Plus: motorized drive, rigid foot cradle, and calf support—movement constrained to the machine’s mechanical path.",
      },
      {
        src: medislipperFootCradle,
        alt: "Foot secured in Medislipper metal frame with heel cup and forefoot plate",
        caption:
          "Foot fixated on a flat platform within a sliding linkage; natural circumduction and axis migration are not reproduced.",
      },
      {
        src: elginLowerLegExerciser,
        alt: "Fabrication Enterprises Elgin Lower Leg Exerciser with foot platform, weight pegs, and leather straps",
        caption:
          "Elgin® Lower Leg Exerciser: foot strapped to a pivoting platform with weight-loaded arms for discrete inversion, eversion, dorsiflexion, and plantarflexion stations.",
      },
    ],
    subsections: [
      {
        title: "Medislipper 1000 Plus (Medisport)",
        body: [
          "The Medislipper 1000 Plus is marketed for active and passive rehabilitation of ankle injuries and sprains, with force sensors to monitor angular velocity and applied force during exercise. From a rehabilitation-science perspective, instrumentation that quantifies patient output is valuable for tracking progress—but measurability of effort within a device does not establish validity of the movement being trained.",
          "Mechanically, the apparatus couples a motorized housing to a foot carriage via crank-and-rail linkage. The foot rests in a rectangular metal frame with heel cup and forefoot plate; the calf is supported separately on a padded post. Motion is therefore executed as a driven, partially guided trajectory whose instantaneous center of rotation is dictated by the machine’s pivot geometry, not by the shifting axis of rotation that characterizes talocrural and subtalar coupling during weight-bearing locomotion.",
          "Passive cycling through a predetermined arc may restore range in a clinical sense, yet it decouples ankle motion from the neuromuscular sequencing required for proprioceptive re-weighting during gait: eccentric control at initial contact, mid-stance stability, and terminal-stance power generation. Active exercise against the device’s path still encodes a single dominant movement solution; it does not train the foot to negotiate multi-planar perturbations, intrinsic arch control, or the windlass stiffening of the forefoot.",
          "In summary, the Medislipper occupies a more elaborate niche than elastic-band or seated dorsiflexion products, but its fundamental model remains one of external path imposition—a disconnect from the real foot movements that rehabilitation ultimately must restore.",
        ],
        references: [
          {
            label:
              "Medislipper 1000 Plus — active and passive rehabilitation of ankle injuries and sprains",
            url: "https://www.medislipper-medisport.com/en/for-the-active-and-passive-rehabilitation-of-ankle-injuries-and-sprains/",
            note: "Manufacturer description of indications, force sensors, and clinical positioning.",
          },
          {
            label:
              "Early rehabilitation treatment of ankle sprains in athletes (Prof. Cosimo Costantino)",
            url: "https://www.medislipper-medisport.com/en/for-the-active-and-passive-rehabilitation-of-ankle-injuries-and-sprains/",
            note: "Cited on the manufacturer site as supporting evidence for Medislipper effectiveness.",
          },
        ],
      },
      {
        title: "Fabrication Enterprises Elgin® Lower Leg Exerciser",
        body: [
          "The Elgin® Lower Leg Exerciser (Fabrication Enterprises; manual, weight-plate resistance) is positioned for load-resisting inversion, eversion, dorsiflexion, and plantarflexion exercises. Unlike the Medislipper’s continuous motorized path, this class of device segments the ankle into discrete, operator-selected movement stations—an architecture that mirrors traditional strength-training logic applied to a joint complex that does not function as independent planar hinges.",
          "Segmenting inversion, eversion, dorsiflexion, and plantarflexion into separate loading episodes treats the ankle–foot as a set of orthogonal actions. In vivo, these motions are coupled: subtalar pronation accompanies internal rotation of the leg; dorsiflexion at the talocrural joint interacts with peroneal mortise mechanics and arch dynamics. Training each plane in isolation reinforces compartmentalized motor programs that may not integrate under fatigue, uneven surfaces, or sport-specific demands.",
          "The seated, open-chain configuration further removes ground-reaction constraints. Force vectors, timing, and co-contraction patterns differ materially from closed-chain gait, where the foot must stabilize the center of mass while accepting and propelling body weight. A 33-lb floor unit with defined dimensional envelope signals institutional durability, not ecological validity of movement.",
          "Relative to elastic resistance or single-axis tibialis trainers, the Elgin system offers graded resistance and explicit plane selection—yet it still externalizes the problem of which movement to perform and when, rather than permitting the neuromuscular system to explore stabilizing paths across combined axes. It is closer to clinical strength equipment than to functional re-education of the foot as an integrated lever.",
        ],
        references: [
          {
            label:
              "Fabrication Enterprises Elgin® Lower Leg Exerciser Without Weights (M-824404-2612)",
            url: "https://axiommedicals.com/products/fabrication-enterprises-elgin-r-lower-leg-exerciser-without-weights-m-824404-2612-each",
            note: "Product specifications: manual resistance, inversion/eversion/dorsiflexion/plantarflexion stations, ankle/leg target area.",
          },
        ],
      },
    ],
  },
  {
    id: "foot-biomechanics-x-framework",
    category: "Biomechanics · Conceptual Framework",
    title:
      'The "X" Framework: From Single-Plane Trainers to Natural Foot Function and Free Movement',
    summary:
      "A structured contrast—four paired endpoints on an X—juxtaposing limiting commercial devices (including single-plane trainers) with evidence-based ankle–foot biomechanics and unconstrained human movement.",
    body: [
      "The letter X organizes this analysis: two arms represent mechanistic, device-imposed constraints; the other two represent (1) how the foot operates as an integrated biomechanical system, and (2) what unconstrained, context-dependent movement requires when the lower limb is not forced into artificial paths.",
      "At one extreme of the market sit inexpensive elastic-band protocols and rudimentary cueing—useful for compliance but devoid of multi-axis fidelity. At a middle tier sit motorized platforms (e.g., Medislipper) and lever-based stations (e.g., Elgin®), which add sophistication yet still substitute machine geometry for physiological coupling. At the accessible consumer end, seated tibia dorsi / tibialis-trainer machines—such as the Bells of Steel Tibialis Trainer and similar products—compress the problem further: the foot is locked on a platform, dorsiflexion and plantarflexion occur in a single open-chain plane, and the talocrural–subtalar system is modeled as a hinge.",
      "None of these categories reproduce the coupled motion of the talocrural and subtalar joints, peroneal mortise widening during dorsiflexion, intrinsic arch control, or the windlass mechanism that stiffens the forefoot during push-off. They generate force vectors and timing that differ from ground reaction during walking; they offer little meaningful training of pronation–supination integration or multi-axis resistance under variable load.",
      "The constructive arm of the X aligns with evidence-based ankle and foot biomechanics: the foot as a lever transmitting triceps surae force; talocrural and subtalar joints governing clinically relevant motion; proximal and distal stress redistribution when subtalar function is blocked; and locomotion as six gait determinants maintaining a smooth center-of-gravity path. Free movement is coordinated, multi-planar, and context-dependent—not a repetition count on a machine-defined arc.",
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
          "Seated dorsiflexion machine: foot fixed, motion reduced to one plane—representative of the lower-complexity market tier.",
      },
      {
        src: tibiaDorsiMachine2,
        alt: "Tibia dorsi calf machine side view showing constrained foot placement",
        caption:
          "The same device class—unable to train subtalar coupling or gait-specific force paths.",
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
        label:
          "Example of a problematic commercial product (Bells of Steel Tibialis Trainer Machine)",
        url: "https://bellsofsteel.us/products/tibialis-trainer-machine",
        note: "Illustrative only—representative of single-axis dorsiflexion trainers, not an endorsement.",
      },
    ],
  },
];

const Publications = () => {
  const hasMedia = (item) =>
    item.video || item.heroImage || (item.images && item.images.length > 0);

  return (
    <section className={styles.publications}>
      <div className={styles.hero}>
        <h2 className={styles.title}>
          Ankle Rehabilitation Technology: A Critical Review
        </h2>

        <p className={styles.intro}>
          Field observations and structured analysis of contemporary rehabilitation
          apparatuses—from motorized platforms and lever-based exercisers to
          single-plane commercial trainers—evaluated against the biomechanical and
          neurophysiological requirements of authentic foot function.
        </p>
      </div>

      <div className={styles.list}>
        {observations.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className={`${styles.observation} ${index % 2 === 1 ? styles.observationAlt : ""}`}
          >
            <div
              className={`${styles.observationInner} ${
                !hasMedia(item) ? styles.observationContentOnly : ""
              }`}
            >
              {hasMedia(item) && (
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
                      } ${item.images.length === 3 ? styles.imageGridThree : ""}`}
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
              )}

              <div className={styles.content}>
                <p className={styles.category}>{item.category}</p>
                <h3 className={styles.observationTitle}>{item.title}</h3>
                <p className={styles.summary}>{item.summary}</p>
                {item.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.body}>
                    {paragraph}
                  </p>
                ))}

                {item.subsections?.map((sub) => (
                  <div key={sub.title} className={styles.subsection}>
                    <h4 className={styles.subsectionTitle}>{sub.title}</h4>
                    {sub.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className={styles.body}>
                        {paragraph}
                      </p>
                    ))}
                    {sub.references?.length > 0 && (
                      <div className={styles.references}>
                        <h5 className={styles.referencesTitle}>References</h5>
                        <ul className={styles.referenceList}>
                          {sub.references.map((ref) => (
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
