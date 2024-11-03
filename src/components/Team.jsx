import React from "react";

export const Team = (props) => {
  const teamStyle = {
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid layout
  };

  const itemStyle = {
    padding: "5px",
    boxSizing: "border-box",
  };

  const imgContainerStyle = {
    width: "100%",
    height: "250px",        // Adjust height to ensure more of the image is visible
    overflow: "hidden",      // Hide overflow to prevent showing half an image
    position: "relative",    // Position relative for absolute children
  };

  const imgStyle = {
    width: "100%",            // Make the image take the full width of the container
    height: "100%",           // Make the image take the full height of the container
    objectFit: "contain",     // Ensure the entire image is contained within the box
    position: "absolute",      // Position absolutely to center
    top: "50%",               // Move image down by 50%
    left: "50%",              // Move image to the right by 50%
    transform: "translate(-50%, -50%)", // Center the image
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h2>Meet Our Team</h2>
          </div>
        </div>
        <div style={teamStyle}> {/* Use inline style for the team grid */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} style={itemStyle}>
                  <div className="thumbnail hover-bg">
                    <div style={imgContainerStyle}> {/* Add container for proper sizing */}
                      <img src={d.img} alt={d.name} className="team-img" style={imgStyle} />
                    </div>
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