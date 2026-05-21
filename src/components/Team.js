import React from "react";
import * as styles from "./Team.module.scss";
import luisPhoto from "../img/luis commisso.jpeg";
import nestorPhoto from "../img/nestor lentini.jpg";
import dinoPhoto from "../img/dino palazzi.jpeg";

const members = [
  {
    name: "Luis Commisso",
    role: "Founder & Inventor · Movement Scientist",
    image: luisPhoto,
    linkedin: "https://www.linkedin.com/in/luis-commisso-364248a/",
  },
  {
    name: "Nestor Lentini",
    role: "Traumatólogo y Deportólogo",
    image: nestorPhoto,
    instagram: "https://www.instagram.com/nestorlentini/",
  },
  {
    name: "Dino Adriano Palazzi",
    role: "Senior Engineer, Biomechanics & Innovation Unit",
    image: dinoPhoto,
    linkedin: "https://www.linkedin.com/in/dino-adriano-palazzi-543b18282/",
  },
  { name: "Federico Commisso", role: "Chief Technology Officer" },
  { name: "Jose Manuel Valladares", role: "Customer Outreach & Marketing" },
];

const Team = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.title}>Our Team</h2>
      <ul className={styles.list}>
        {members.map((member) => (
          <li key={member.name} className={styles.member}>
            {member.image && (
              <img
                className={styles.photo}
                src={member.image}
                alt=""
                width={64}
                height={64}
              />
            )}
            <div>
              <strong>{member.name}</strong>
              <span> — {member.role}</span>
              {member.linkedin && (
                <>
                  {" "}
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </>
              )}
              {member.instagram && (
                <>
                  {" "}
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
