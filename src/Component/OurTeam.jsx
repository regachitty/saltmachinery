import React from "react";
import "../assets/css/outTeam.css";
// import member from "../assets/images/teamMemberPhoto.svg";
import twittericongray from "../assets/images/twittericongray.svg";
import browserIcongray from "../assets/images/browserIcongray.svg";
import linkedinIcongray from "../assets/images/likedinIcongray.svg";

const OurTeam = () => {
  const teamdetail = [
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
    {
      // image: member,
      title: "Olivia Rhye",
      subTitle: "Founder & CEO",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and  Clearbit. ",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row mt-5 px-2">
          {teamdetail.map((teamMemberDetail, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="team card">
                {/* <img
                  src={teamMemberDetail.image}
                  alt="teamMemberImage"
                  className="image-fluid"
                /> */}
                <div className="card-body mt-3">
                  <h6 className="ourteam-title card-title">
                    {teamMemberDetail.title}
                  </h6>
                  <p className="ourteam-info card-info">
                    {teamMemberDetail.subTitle}
                  </p>
                  <p className="ourteam-description card-description">
                    {teamMemberDetail.description}
                  </p>
                  <div className="social-icons mt-3 mb-4">
                    <a href="#" className="me-3">
                      <img src={twittericongray} alt="Twitter Icon" />
                    </a>
                    <a href="#" className="me-3">
                      <img src={linkedinIcongray} alt="LinkedIn Icon" />
                    </a>
                    <a href="#">
                      <img src={browserIcongray} alt="Browser Icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
