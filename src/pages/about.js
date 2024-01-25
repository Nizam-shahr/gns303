import { Wrapper } from "@/styles/About.styled";
import React from "react";

const about = () => {
  return (
    <Wrapper>
      <header>
        <h1>Welcome to GNS 303 Skills Acquisition Website</h1>
        <span>
          A premier platform dedicated to empowering individuals with the
          knowledge, tools, and resources essential for personal and
          professional growth.
        </span>
      </header>

      <div className="our-mission">
        <h2>Our Mission</h2>
        <span>
          At GNS 303 Skills Acquisition Website, our mission is to democratize
          access to high-quality skill acquisition opportunities. We believe
          that everyone, irrespective of their background or current skill set,
          should have the chance to unlock their full potential.
        </span>
      </div>

      <div className="choose">
        <h2>Why Choose Us?</h2>
        <div className="cards">
          {data.map(({ content, title }, index) => (
            <div className="card">
              <span></span>
              <div className="text">
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="commitment">
        <h2>Commitment to Excellence</h2>
        <p>
          Quality is at the heart of everything we do. We continuously update
          our curriculum to reflect industry trends, emerging technologies, and
          best practices. Our instructors are vetted professionals with
          real-world expertise, ensuring that you receive practical insights and
          actionable knowledge.
        </p>
      </div>
    </Wrapper>
  );
};

export default about;

const data = [
  {
    title: "Diverse Course Offerings",
    content:
      "From beginner to advanced levels, our platform hosts a diverse range of courses curated by industry experts and thought leaders.",
  },
  {
    title: "Interactive Learning Experience",
    content:
      " We prioritize engaging, interactive learning experiences that foster comprehension, retention, and practical application.",
  },
  {
    title: "Flexible Learning Paths",
    content:
      " Whether you're looking for a short-term workshop or a comprehensive program, we offer flexible learning paths tailored to your needs.",
  },
  {
    title: "Community Engagement",
    content:
      "Our platform encourages collaboration, networking, and community building, allowing learners to connect, share insights, and grow together.",
  },
];
