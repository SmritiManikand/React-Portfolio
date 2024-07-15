import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import ProjectCard from '../components/ProjectCard';
import SkillList from '../components/SkillList';

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <h1>I'm Smriti M</h1>
        <Link to="/contact"><button>Contact Me</button></Link>
      </section>
      <section className="about">
        <AboutUs />
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <ProjectCard />
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <SkillList />
      </section>
      <Footer />
    </>
  );
}

export default Home;
