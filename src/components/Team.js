import React from "react";
import * as styles from "./Team.module.scss";

const Team = () => {
  const members = [
    { name: "Luis Commisso", role: "Founder / Inventor" },
    { name: "Nestor Lentini", role: "Medical Specialist" },
    { name: "Luis Ayet Blanchard", role: "CEO" },
    { name: "Federico Commisso", role: "Software Developer" },
    { name: "Jose Manuel Valladares", role: "Customer Outreach" },
  ];

  return (
    <section className={styles.team}>
      <h2 className={styles.title}>Our Team</h2>
      <ul className={styles.list}>
        {members.map((member, index) => (
          <li key={index} className={styles.member}>
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;