import React from 'react';

const Milestone = (props) => {
  const dummyData = [
    {
      date: 'January 2023',
      title: 'Project Kickoff',
      description: 'Initial project kickoff meeting with all stakeholders.',
      accomplished: true,
    },
    {
      date: 'March 2023',
      title: 'First Prototype',
      description: 'Completion of the first prototype.',
      accomplished: true,
    },
    {
      date: 'June 2023',
      title: 'Beta Release',
      description: 'Release of the beta version for user testing.',
      accomplished: false,
    },
    {
      date: 'September 2023',
      title: 'Final Release',
      description: 'Official release of the final product.',
      accomplished: false,
    },
    {
      date: 'December 2023',
      title: 'Post-Launch Review',
      description: 'Review of the project and planning for future updates.',
      accomplished: false,
    },
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
              <div className="timeline-number">{index + 1}</div>
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