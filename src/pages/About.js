import React from "react";
import * as styles from "./About.module.scss";
import logo from "../img/freejointmotion_logo.svg";
import luisPhoto from "../img/luis commisso.jpeg";
import nestorPhoto from "../img/nestor lentini.jpg";
import dinoPhoto from "../img/dino palazzi.jpeg";

const featuredTeam = [
  {
    id: "luis-commisso",
    name: "Luis Commisso",
    title: "Movement Scientist",
    role: "Founder & Inventor",
    location: "Fort Lauderdale, Florida",
    image: luisPhoto,
    linkedin: "https://www.linkedin.com/in/luis-commisso-364248a/",
    bio: [
      "With a background in bio-engineering and movement science, Luis is dedicated to bringing to market his novel, USA-patented biotechnology focused on ankle functional improvement at the highest levels of athletic performance, as well as the education and re-education of ankle movement.",
      "This technology was developed to address what he calls \"the forgotten joint\"—a long-standing gap in ankle joint conditioning. The system measures ankle motion in four dimensions in real time, and supports treatment of acquired central and peripheral neurological dysfunctions, injury and re-injury prevention, and rehabilitation.",
      "He is also dedicated to developing specialized equipment for educating young athletes, applying biomechanical methodology through the technical education of specific movement gestures.",
    ],
  },
  {
    id: "nestor-lentini",
    name: "Nestor Lentini",
    title: "Traumatólogo y Deportólogo",
    role: "Medical Specialist",
    image: nestorPhoto,
    instagram: "https://www.instagram.com/nestorlentini/",
    bio: [
      "Médico especialista en traumatología y deportología, con práctica clínica en Buenos Aires y Pilar.",
    ],
  },
  {
    id: "dino-palazzi",
    name: "Dino Adriano Palazzi",
    title: "Biomechanics & Innovation",
    role: "Senior Engineer, Biomechanics & Innovation Unit",
    image: dinoPhoto,
    linkedin: "https://www.linkedin.com/in/dino-adriano-palazzi-543b18282/",
    bio: [
      "Senior engineer supporting the development and validation of Free Joint Motion's multi-axis biomechanical systems, instrumentation, and innovation pipeline.",
    ],
  },
];

const teamMembers = [
  { name: "Federico Commisso", role: "Chief Technology Officer" },
  { name: "Jose Manuel Valladares", role: "Customer Outreach & Marketing" },
];

const MemberProfile = ({ member }) => (
  <article
    className={styles.memberFeatured}
    aria-labelledby={`team-${member.id}`}
  >
    <img
      className={styles.memberPhoto}
      src={member.image}
      alt=""
      width={280}
      height={280}
    />
    <div className={styles.memberDetails}>
      <h4 id={`team-${member.id}`} className={styles.memberName}>
        {member.name}
      </h4>
      {member.title && <p className={styles.memberTitle}>{member.title}</p>}
      <p className={styles.memberRole}>
        {member.role}
        {member.location ? ` · ${member.location}` : ""}
      </p>
      {member.bio?.map((paragraph, index) => (
        <p key={index} className={styles.memberBio}>
          {paragraph}
        </p>
      ))}
      {(member.linkedin || member.instagram) && (
        <div className={styles.memberLinks}>
          {member.linkedin && (
            <a
              className={styles.memberLink}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          {member.instagram && (
            <a
              className={styles.memberLink}
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);

const About = () => {
  return (
    <section className={styles.about}>
      <header className={styles.hero}>
        <div className={styles.heroBrand}>
          <img
            className={styles.logo}
            src={logo}
            alt="Free Joint Motion"
            width={200}
            height={242}
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Free Joint Motion LLC</p>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.lead}>
            An international company based in Weston, Florida, dedicated to innovation in
            biomechanical medical devices. Led by Professor Luis Commisso, our team focuses on
            solutions for sports medicine, injury prevention, and rehabilitation.
          </p>
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.mission} aria-labelledby="about-mission">
          <h3 id="about-mission" className={styles.sectionTitle}>
            Our Mission
          </h3>
          <p className={styles.missionText}>
            Our goal is to improve musculoskeletal health through cutting-edge technological
            solutions, collaborating with global institutions to validate our innovations.
          </p>
        </section>

        <section className={styles.teamSection} aria-labelledby="about-team">
          <div className={styles.teamHeader}>
            <h3 id="about-team" className={styles.sectionTitle}>
              Leadership & Team
            </h3>
            <p className={styles.teamIntro}>
              Multidisciplinary expertise across biomechanics, medicine, engineering, and
              product development.
            </p>
          </div>

          <div className={styles.teamFeaturedList}>
            {featuredTeam.map((member) => (
              <MemberProfile key={member.id} member={member} />
            ))}
          </div>

          <ul className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <li key={member.name}>
                <article className={styles.memberCard}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberRole}>{member.role}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
