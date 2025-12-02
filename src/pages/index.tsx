import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'; // Import the CSS we just created

// Custom component for the Landing Page content
function HomepageContent() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <div className={styles.homepageContainer}>

      {/* HERO SECTION */}
      <header className={styles.hero}>
          <div className="container">
              <h1 className={styles.heroTitle}>
                  The Future of Intelligence is Embodied
              </h1>
              <h2 className={styles.heroSubtitle}>
                  {siteConfig.title} Textbook
              </h2>
              <p className={styles.heroTagline}>
                  Bridge the gap between the digital brain and the physical body. Learn to design, simulate, and deploy AI systems that function in the real world.
              </p>
              <div className={styles.heroActions}>
                  <Link to="/docs/intro-physical-ai" className="button button--primary button--lg">
                      Start Learning Today
                  </Link>
                  <a href="#features" className="button button--secondary button--lg">
                      Explore Modules
                  </a>
              </div>
          </div>
      </header>

      {/* AI-NATIVE VALUE PROPOSITION */}
      <section className={`${styles.sectionContainer} ${styles.sectionAiNative}`}>
          <div className="container text--center">
              <h2>🚀 The First AI-Native Technical Textbook</h2>
              <p className={styles.sectionDescription}>
                  This isn't just a book; it's a dynamic learning portal. Utilize our integrated **RAG Chatbot** to ask questions about the book's content and get answers tailored to the text you're reading.
              </p>
              <div className="row">
                  <div className="col col--4">
                      <h3 className="mb-2">AI-Driven Learning</h3>
                      <p>Access and learn using AI Agents and conversational interfaces.</p>
                  </div>
                  <div className="col col--4">
                      <h3 className="mb-2">Personalized Content</h3>
                      <p>Customize chapters based on your software and hardware background.</p>
                  </div>
                  <div className="col col--4">
                      <h3 className="mb-2">Full Stack Robotics</h3>
                      <p>From ROS 2 middleware to cutting-edge VLA models and NVIDIA Isaac.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* MODULES OVERVIEW */}
      <section id="features" className={`${styles.sectionContainer} ${styles.sectionModules}`}>
          <div className="container">
              <h2 className="text--center">Mastering Embodied Intelligence</h2>
              <p className="text--center">
                  Four comprehensive modules take you from foundational middleware to autonomous cognitive planning.
              </p>
              <div className="row module-grid">
                  
                  <div className="col col--6 module-card">
                      <h3 className={styles.moduleCard}>1. 🧠 The Robotic Nervous System (ROS 2)</h3>
                      <p>Master the essential middleware for robot control, covering Nodes, Topics, Services, and URDF.</p>
                  </div>
                  
                  <div className="col col--6 module-card">
                      <h3 className={styles.moduleCard}>2. 🖥️ The Digital Twin (Gazebo & Unity)</h3>
                      <p>Learn physics simulation, gravity, and high-fidelity rendering to build safe testing environments.</p>
                  </div>
                  
                  <div className="col col--6 module-card">
                      <h3 className={styles.moduleCard}>3. ⚡ The AI-Robot Brain (NVIDIA Isaac)</h3>
                      <p>Focus on hardware-accelerated VSLAM, synthetic data generation, and Nav2 path planning.</p>
                  </div>
                  
                  <div className="col col--6 module-card">
                      <h3 className={styles.moduleCard}>4. 🗣️ Vision-Language-Action (VLA)</h3>
                      <p>Understand the convergence of LLMs and Robotics, translating natural language into ROS 2 actions.</p>
                  </div>

              </div>
              <div className="text--center mt-5">
                  <Link to="/docs/capstone-project" className="button button--secondary button--outline">
                      View Capstone Project Details 🎓
                  </Link>
              </div>
          </div>
      </section>

      {/* CALL TO ACTION / HARDWARE NOTE */}
      <section className={`${styles.sectionContainer} ${styles.sectionCta}`}>
          <div className="container text--center">
              <p className={styles.ctaTagline}>
                  The future of work will be a partnership between people, intelligent agents, and robots.
              </p>
              <h2 className={styles.ctaTitle}>
                  Ready to become an Embodied AI expert?
              </h2>
              <Link to="/docs/intro-physical-ai" className="button button--primary button--lg">
                  Access the Full Textbook
              </Link>
              <p className="mt-3 text--small">
                  Note: This course is technically demanding and requires access to high-performance workstations and Edge Computing Kits (like NVIDIA Jetson Orin) for deployment.
              </p>
          </div>
      </section>

    </div>
  );
}

// Wrap the content with Docusaurus Layout
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="The definitive textbook on Physical AI, Humanoid Robotics, and Sim-to-Real Transfer.">
      <HomepageContent />
    </Layout>
  );
}