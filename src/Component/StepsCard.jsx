import React from "react";
import "../assets/css/stepscard.css";
import homeIcon from "../assets/images/homeicon.svg";
import treeIcon from "../assets/images/treeIcon.svg";
import shieldIcon from "../assets/images/shiledicon.svg";
import settingIcon from "../assets/images/settingsicon.svg";

const stepsData = [
    {
        id: 1,
        icon: homeIcon,
        title: "Step 1",
        description: "Tempus rutrum leo elementum gravida massa consequat mauris condimentum. Pharetra phasellus purus."
    },
    {
        id: 2,
        icon: treeIcon,
        title: "Step 2",
        description: "Tempus rutrum leo elementum gravida massa consequat mauris condimentum. Pharetra phasellus purus."
    },
    {
        id: 3,
        icon: shieldIcon,
        title: "Step 3",
        description: "Tempus rutrum leo elementum gravida massa consequat mauris condimentum. Pharetra phasellus purus."
    },
    {
        id: 4,
        icon: settingIcon,
        title: "Step 4",
        description: "Tempus rutrum leo elementum gravida massa consequat mauris condimentum. Pharetra phasellus purus."
    }
];

const StepsCard = () => {
    return (
        <div className="container d-none d-md-block  "> {/* Hides on mobile */}
            <div className="row pb-lg-5 pb-5 pt-lg-5 pt-5">
                {stepsData.map((step) => (
                    <div key={step.id} className="col-lg-3 col-md-6 col-12">
                        <div className="steps-card-title">
                            <img src={step.icon} alt={`Icon for ${step.title}`} />
                        </div>
                        <div className="steps-card-body">
                            <h4 className="py-lg-3 py-3">{step.title}</h4>
                        </div>
                        <div className="steps-card-end">
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsCard;
