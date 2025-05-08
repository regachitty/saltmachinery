import React, { useState, useRef } from "react";
import video1 from "../videos/pondavideo.mp4";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";
import "../assets/css/videofile.css";

export const VideoFile = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const videoRefs = useRef([]);

  const videos = [video1, video1, video1, video1]; // Multiple instances of the same video file

  const handlePlay = (index) => {
    // Pause the currently playing video
    if (currentVideoIndex !== null && currentVideoIndex !== index) {
      const currentVideo = videoRefs.current[currentVideoIndex];
      if (currentVideo) {
        currentVideo.pause();
      }
    }

    // Set the newly playing video index
    setCurrentVideoIndex(index);
  };

  return (
    <div className="gallery-video-file p-5">
      {videos.map((video, index) => (
        <div className="video" key={index}>
          <div className="video-container-file">
            <Video
              ref={(el) => (videoRefs.current[index] = el)} // Store each video in the refs array
              style={{ width: "100%" }}
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              onPlay={() => handlePlay(index)} // Ensure only one video plays at a time
            >
              <source src={video} type="video/mp4" />
            </Video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFile;
