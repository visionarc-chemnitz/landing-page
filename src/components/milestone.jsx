import React from 'react';

const Milestone = (props) => {
  const dummyData = [
    {
      "date": "October 2024",
      "title": "Project Kickoff",
      "description": "Initial project kickoff meeting with all stakeholders."
    },
    {
      "date": "November 2024",
      "title": "First Prototype",
      "description": "Completion of the first prototype."
    }
  ];

  const milestones = props.data && props.data.milestones ? props.data.milestones : dummyData;

  return (
    <section id="milestone">
      <div className="container">
        <div className="section-title">
          <h2>Milestones</h2>
        </div>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${milestone.accomplished ? 'accomplished' : ''}`}>

              <div className="timeline-date">{milestone.date}</div>
              <div className="timeline-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;