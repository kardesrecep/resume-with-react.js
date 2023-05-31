import React from 'react'
import SectionHeader from '../section-header/SectionHeader'
import experiences from './experience.json'
import Experience from './Experience'
import "./experience.css"

const Experiences = () => {
    return (
      <section id="experience" className="resume">
        <SectionHeader title="Experiences" isButtonVisible={false}/>
  
        <div className="row">
          {experiences.map((exp, i) => (
            <div className="col-md-12 col-sm-12 col-xs-12" key={i}>
              <Experience {...exp}/>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiences;
  