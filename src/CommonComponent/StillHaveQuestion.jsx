import React from "react";
import "../assets/css/StillHaveQuestion.css";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../assets/images/profilePhoto1.jpg";
import AvatarProfile from "./AvatarProfile";
const StillHaveQuestion = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactUs"); // Change this path based on your route
  };
  return (
    <>
      <div className="bg-color-question container mt-5">
        <div className="row ">
          <div className="col-lg-12 text-center p-5">
            <AvatarProfile />
            {/*<img src={profilePhoto} alt="Profile 1" className="profile-img img-fluid"  /> */}
            <p className="still-stext-style">Still have questions?</p>
            <p className="friendly-team-style">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button
              type="button"
              className="custome-btn-question"
              onClick={handleClick}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StillHaveQuestion;
