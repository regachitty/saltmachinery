import React, { useState, useRef } from "react";
import video1 from "../videos/pondavideo.mp4";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";
import "../assets/css/singleVideoFile.css"; // Updated CSS file name

export const SingleVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Default to the first video
  const videoRefs = useRef([]);

  const videos = [video1]; 

  const handlePlay = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="video-gallery ">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <div className="video-container">
            {/* Only show the currently selected video */}
            {currentVideoIndex === index && (
              <Video
                ref={(el) => (videoRefs.current[index] = el)} // Store each video in the refs array
                style={{ width: "100%" }}
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                onPlay={() => handlePlay(index)} // Ensure only one video plays at a time
              >
                <source src={video} type="video/mp4" />
              </Video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
