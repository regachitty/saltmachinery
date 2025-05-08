// import React, { useState } from "react";
// import "../assets/css/frequentlyAsked.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const FrequentlyAsked = () => {
//   // const [isOpen, setIsOpen] = useState(Array(6).fill(false));
//   const [isOpen, setIsOpen] = useState([
//     true,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const toggleContent = (index) => {
//     setIsOpen((prev) => {
//       const newState = [...prev];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

//   const faqs = [
//     {
//       question: "Is there a free trial available?",
//       answer:
//         "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
//     },
//     {
//       question: "Can I change my plan later?",
//       answer:
//         "Absolutely! You can upgrade or downgrade your plan at any time through your account settings.",
//     },
//     {
//       question: "What is your cancellation policy?",
//       answer:
//         "You can cancel your subscription at any time. Once canceled, you will still have access to your plan until the end of your billing cycle.",
//     },
//     {
//       question: "Can other info be added to an invoice?",
//       answer:
//         "Yes, you can customize your invoice to include additional information as needed. Contact our support team for assistance.",
//     },
//     {
//       question: "How does billing work?",
//       answer:
//         "Billing is processed on a monthly or annual basis, depending on your chosen plan. You can view and manage your billing details in your account settings.",
//     },
//     {
//       question: "How do I change my account email?",
//       answer:
//         "To change your account email, go to your account settings, enter the new email address, and confirm the change. A verification email will be sent to the new address.",
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="text-center">
//         <h2 className="fre-ask-text-style">Frequently Asked Questions</h2>
//         <p className="fre-ask-sub-text mb-4">
//           Everything you need to know about the product and billing.
//         </p>
//       </div>
//       {faqs.map((faq, index) => (
//         <React.Fragment key={index}>
//           <div className="row mt-3 justify-content-center">
//             <div
//               className="col-lg-8 col-md-10 col-12 d-flex  justify-content-between align-items-center text-center p-3 rounded question-container"
//               onClick={() => toggleContent(index)}
//             >
//               <h6 className="mb-0 question-text-style albert-sans">
//                 {faqs.question}
//               </h6>
//               <i
//                 className={`bi ${
//                   isOpen[index] ? "bi-dash-circle" : "bi-plus-circle"
//                 }`}
//                 style={{
//                   color: "#7F56D9",
//                   cursor: "pointer",
//                   fontSize: "1.5rem",
//                 }}
//               ></i>
//             </div>
//           </div>
//           {isOpen[index] && (
//             <div className="row justify-content-center">
//               <div className="col-lg-8 col-md-10 col-12">
//                 <p className="mt-3  text-lg-start answer-text-style px-lg-0 px-2 albert-sans-400  fw-bold">
//                   {faqs.answer}
//                 </p>
//               </div>
//             </div>
//           )}
//           {index !== faqs.length - 1 && <hr className="faq-hr my-3" />}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };
// export default FrequentlyAsked;
import React, { useState } from "react";
import "../assets/css/frequentlyAsked.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FrequentlyAsked = ({ faqs }) => {
  // const [isOpen, setIsOpen] = useState(Array(faqs.length).fill(false));
  const [isOpen, setIsOpen] = useState(
    faqs.map((_, index) => index === 0) // First index is true, others are false
  );
  const toggleContent = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="fre-ask-text-style">Frequently Asked Questions</h2>
        <p className="fre-ask-sub-text mb-4">
          Everything you need to know about the product and billing.
        </p>
      </div>
      {faqs.map((faq, index) => (
        <React.Fragment key={index}>
          <div className="row mt-3 justify-content-center">
            <div
              className="col-lg-8 col-md-10 col-12 d-flex justify-content-between align-items-center text-center p-3 rounded question-container"
              onClick={() => toggleContent(index)}
            >
              <h6 className="mb-0 question-text-style albert-sans">
                {faq.question}
              </h6>
              <i
                className={`bi ${
                  isOpen[index] ? "bi-dash-circle" : "bi-plus-circle"
                }`}
                style={{
                  color: "#7F56D9",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                }}
              ></i>
            </div>
          </div>
          {isOpen[index] && (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <p className="mt-3 text-lg-start answer-text-style px-lg-0 px-2 albert-sans-400 fw-bold">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
          {index !== faqs.length - 1 && <hr className="faq-hr my-3" />}
        </React.Fragment>
      ))}
    </div>
  );
};
export default FrequentlyAsked;
