import React from 'react'
import Developer from './Developer'
import backend from './backend.json'
import frontend from './frontend.json'
import Skill from './Skill'
import "./skill.css"
import SectionHeader from '../../section-header/SectionHeader'


const Skills = () => {
  return (
    <div className="skills" id="skills">
        <SectionHeader title="Skills" isButtonVisible={false} />
      <div className="row backend">
      <Developer dev="BACKEND" />
        {backend.map((skill,index)=><div className="col-md-3 col-sm-3 col-xs-12 item" key={index}>
            <Skill name={skill.tool} />
          </div>)}

          </div>
      <div className="row frontend">
        <Developer dev="FRONTEND" />
        {frontend.map((skill, index) => (
          <div className="col-md-3 col-sm-3 col-xs-12 item" key={index}>
            <Skill name={skill.tool} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;