import React from "react";

export const Team = (props) => {
  const teamStyle = {
    display: "flex",
    flexWrap: "wrap", // Allow wrapping for responsive design
    justifyContent: "center", // Center items in the row
    margin: "0 auto", // Center the flex container
  };

  const itemStyle = {
    flex: "0 0 20%", // Each item takes up 20% of the row
    maxWidth: "20%", // Ensure it doesn't exceed 20%
    padding: "5px", // Add padding around each item for spacing
    boxSizing: "border-box", // Include padding in width/height calculation
  };

  const imgStyle = {
    width: "100%", // Make images responsive
    height: "auto", // Maintain aspect ratio
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row"> {/* Use Bootstrap row for proper layout */}
        <div className="section-title text-center">
          <h2>Meet Our Team</h2>
        </div>
        </div>
        <div style={teamStyle}> {/* Use inline style for the team container */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} style={itemStyle}> {/* Use inline style for each item */}
                  <div className="thumbnail hover-bg">
                    <img src={d.img} alt={d.name} className="team-img" style={imgStyle} />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
