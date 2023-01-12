import React from "react";

function UsageVideo() {
  return (
    <div className="videoGuideSection">
      <div className="sectionHeading">Video Guide</div>
      <iframe
        title="video Guide"
        src="https://www.youtube.com/embed/uXWycyeTeCs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
      ></iframe>
    </div>
  );
}

export default UsageVideo;
