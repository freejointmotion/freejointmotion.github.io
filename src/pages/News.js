import React from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import * as styles from "./News.module.scss";

const newsItems = [
  {
    date: "2025",
    category: "Research",
    title: "Field observations published",
    summary:
      "New documented analyses on fatigue-related movement failure and rehabilitation cueing are available in our research observations section.",
    link: "/publications",
    linkLabel: "Read observations",
  },
  {
    date: "2025",
    category: "Company",
    title: "Free Joint Motion LLC",
    summary:
      "Continuing development of biomechanical medical devices and consulting services from Weston, Florida, with international institutional collaboration.",
    link: "/about",
    linkLabel: "About us",
  },
  {
    date: "Ongoing",
    category: "Collaboration",
    title: "Partnerships welcome",
    summary:
      "We work with clinics, sports organizations, and research partners on assessment, device validation, and evidence-based rehabilitation approaches.",
    link: "/contact",
    linkLabel: "Contact us",
  },
];

const News = () => {
  return (
    <PageShell
      title="News"
      intro="Updates on research, collaborations, and company developments."
    >
      <ul className={styles.list}>
        {newsItems.map((item) => (
          <li key={item.title}>
            <article className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.category}>{item.category}</span>
                <time className={styles.date} dateTime={item.date}>
                  {item.date}
                </time>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.summary}>{item.summary}</p>
              {item.link && (
                <Link className={styles.link} to={item.link}>
                  {item.linkLabel}
                </Link>
              )}
            </article>
          </li>
        ))}
      </ul>
    </PageShell>
  );
};

export default News;
