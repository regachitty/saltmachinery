import "../assets/css/bannerAbout.css";
import bannerpic from "../assets/images/bannerpic.svg";
import videoMain from "../videos/samplevideopurple.mp4";
import video1 from "../videos/pondavideo.mp4";
import React, { useState, useRef } from "react";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";

const BannerOfAbout = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const videoRefs = useRef([]);

  const videos = [video1]; // Add more videos if needed

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
    <>
      <div className="background-color mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mt-5 mb-5">
              <img src={bannerpic} alt="bannerpic" />
              <h1 className="text-start text-white banner-text-style w-100 text-uppercase">
                I am committed to advancing innovation and excellence in global
                salt production.
              </h1>
              <h5 className="text-white mt-3">Balasubramanian Ramachandran</h5>
              <p className="text-white">CEO</p>
            </div>

            <div className="col-lg-6 col-12 mb-5 mt-5">
              {videos.map((vid, index) => (
                <div className="video" key={index}>
                  <div className="video-container-file">
                    <Video
                      ref={(el) => (videoRefs.current[index] = el)}
                      style={{ width: "100%" }}
                      controls={[
                        "PlayPause",
                        "Seek",
                        "Time",
                        "Volume",
                        "Fullscreen",
                      ]}
                      onPlay={() => handlePlay(index)}
                    >
                      <source src={vid} type="video/mp4" />
                    </Video>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="gallery-video-file p-5">
            {videos.map((vid, index) => (
              <div className="video" key={index}>
                <div className="video-container-file">
                  <Video  
                    ref={(el) => (videoRefs.current[index] = el)}
                    style={{ width: "100%" }}
                    controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                    onPlay={() => handlePlay(index)} 
                  >
                    <source src={vid} type="video/mp4" />
                  </Video>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BannerOfAbout;
