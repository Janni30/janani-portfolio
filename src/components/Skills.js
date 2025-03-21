import React from "react";
import data from "../data/data.json";

function Skills() {
  const { skills } = data.data;
  const iconpath = "/images/icons/";

  return (
    <section className="px-2" id="skills">
      <div className="container skill-div">
        <div className="title">
          <p>Skills</p>
        </div>
        <div className="skill-content">
          <div className="experience-details-container">
            <div className="about-containers skill-grid">
              {skills.map((item, index) => (
                <div className="details-container" key={index}>
                  <h2 className="experience-sub-title">{item.title}</h2>
                  <div className="article-container">
                    {item.skillname.map((skillnames, idx) => (
                      <button
                        type="button"
                        className="btn btn-lg skill-btn"
                        disabled
                        key={idx}
                      >
                        <img
                          src={iconpath + skillnames.image + ".png"}
                          className="skill-icon mx-2"
                          alt="Skill icon"
                        />
                        {skillnames.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
