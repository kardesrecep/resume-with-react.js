import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <p>
        Hi, My name is Recep Kardes, I'm a <b>Full Stack Java Developer</b> who
        is committed to selfdevelopment and lifetime learning. I'm always active
        and eager to learn new skills. I believe this way I can consistently
        achieve better results.I'm a multi-tasking person when handling tasks
        and can work well under pressure. I try to utilize a creative approach
        to problem-solving while working in a team or individually, as in my
        past experiences.
        <br />
        Also, communication is the most important key to making progress in the
        software field and I believe that building strong relationships with
        people delivers the best results.
      </p>

      <ul className="info">
        <li>
          <strong>Birthday:</strong> August 15, 1989
        </li>
        <li>
          <strong>Location:</strong> Kocaeli/Gebze, Turkey
        </li>
        <li>
          <strong>Email:</strong> kardesrecep7@gmail.com
        </li>
        <li>
          <strong>Phone:</strong> +90 552 831 61 69
        </li>
      </ul>
    </div>
  );
};

export default Intro;
