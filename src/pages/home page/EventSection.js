import React, { useState } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function EventSection(props) {
  const [embedId, setEmbedId] = useState(0);

  const youtubeLinks = [
    "kh3aacOWz9U",
    "0EtYzQn-Scw",
    "kK_Wqx3RnHk",
    "TUD1AWZVgQ8",
    "0EtYzQn-Scw",
    "kK_Wqx3RnHk",
    "TUD1AWZVgQ8",
  ];

  const incrementIndex = () => {
    if (embedId !== youtubeLinks.length - 2) {
      setEmbedId(embedId + 1);
    }
    console.log(embedId);
  };

  const decrementIndex = () => {
    if (embedId !== 0) {
      setEmbedId(embedId - 1);
    }
    console.log(embedId);
  };

  return (
    <div
      className={`${props.backgroundColor} homepageSections`}
      style={{ paddingBottom: "40px" }}
    >
      <div className="sectionHeading" style={{ marginBottom: "25px" }}>
        Events
      </div>
      <div className="productSection" style={{ paddingBottom: "10px" }}>
        <div onClick={decrementIndex}>
          <ArrowCircleLeftOutlinedIcon fontSize="large" />
        </div>

        <div className="eventVideo">
          <YoutubeEmbed
            embedId={youtubeLinks[embedId]}
            className="sectionVideo"
          />
        </div>
        <div className="eventVideo hide">
          <YoutubeEmbed
            embedId={youtubeLinks[embedId + 1]}
            className="sectionVideo"
          />
        </div>

        <div onClick={incrementIndex}>
          <ArrowCircleRightOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default EventSection;
