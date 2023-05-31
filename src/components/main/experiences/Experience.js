import React from "react";
const Experience = ({
  company,
  title,
  date,
  location,
  website,
  first,
  second,
  third,
  fourth,
  fifth,
}) => {
  return (
    <div class="top-item resume-item">
      <h2>
        <i>{company}</i>
      </h2>
      <h4>{title}</h4>
      <span>
        {date} | {location}|{website}
      </span>
      <p>
        <ul>
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{fourth}</li>
          <li>{fifth}</li>
        </ul>
      </p>
    </div>
  );
};

export default Experience;
