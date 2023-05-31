import React from 'react'
import SectionHeader from '../section-header/SectionHeader';
import educations from './educations.json'
import Education from './Education';
import "./educations.css"

const Educations = () => {
    return (
      <section id="education" class="resume">
        <SectionHeader title="Education" isButtonVisible={false} />
        <div class="row">
          {educations.map((edu, i) => (
            <div class="col-md-12 col-sm-12 col-xs-12" key={i}>
              <Education {...edu} />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educations;