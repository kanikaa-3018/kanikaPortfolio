// import React from "react";
// import CardSwap, { Card } from "../components/CardSwap/CardSwap.jsx";
// import { FiAward } from "react-icons/fi";
// import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus.jsx";

// const achievements = [
//   {
//     title: "ATF Scholar – AlgoUniversity",
//     description:
//       "Selected among top tech enthusiasts across India for the(ATF) program focused on advanced software engineering and mentorship.",
//     tag: "Scholarship | April 2024",
//     image:
//       "https://images.unsplash.com/vector-1738163099590-feb564b4f61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
//   },
//   {
//     title: "Co-op SWE Intern – AlgoUniversity",
//     description:
//       "Working on scalable backend services and content platforms, contributing to technical course delivery and performance optimization.",
//     tag: "Internship | June 2024 – Present",
//     image:
//       "https://images.unsplash.com/vector-1738163099616-ea0185dbf3e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
//   },
//   {
//     title: "Winner – Hacknovate 6.0 (AI.agent Track)",
//     description:
//       "Led a team to victory by building an AI-powered productivity bot to streamline workflows using LLMs and automation pipelines.",
//     tag: "Hackathon | March 2024",
//     image:
//       "https://plus.unsplash.com/premium_vector-1689096917660-9041bba693dc?w=600&auto=format&fit=crop&q=60",
//   },
//   {
//     title: "Content Head – GDG IIIT Gwalior",
//     description:
//       "Spearheaded content and outreach strategy for Google Developer Group chapter, growing student tech engagement by 4x.",
//     tag: "Leadership | Aug 2023 – Present",
//     image:
//       "https://plus.unsplash.com/premium_vector-1750591460877-db4c18b9cdd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
//   },
//   {
//     title: "Project Admin – GSSoC '25",
//     description:
//       "Mentoring contributors and managing project scope, reviews, and PRs in one of India's biggest open-source summer programs.",
//     tag: "Open Source | Upcoming 2025",
//     image:
//       "https://images.unsplash.com/vector-1746304171580-8cf25a653cd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <section className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-4 " id="achievements">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-2 items-center">
//         {/* LEFT TEXT SECTION */}
//         <div className="space-y-6 max-w-xl">
//           <TrueFocus
//             sentence="Achievements & Certifications"
//             manualMode={false}
//             blurAmount={5}
//             borderColor="cyan"
//             animationDuration={2}
//             pauseBetweenAnimations={1}
//           />

//           <p className="text-gray-400 leading-relaxed">
//             These aren't just titles—they represent nights of hustle, debugging
//             marathons, and moments of breakthrough. They remind me how far I’ve
//             come—and how much further I want to go.
//           </p>
//           <blockquote className="italic text-sm text-gray-500 border-l-4 pl-4 border-blue-500">
//             “Every achievement unlocks the next challenge.”
//           </blockquote>
//         </div>

//         {/* RIGHT SWAPPING CARD SECTION */}
//         <div className="max-w-xl mx-auto md:mx-0" style={{ height: "600px", position: "relative" }}>
//           <CardSwap
//             cardDistance={60}
//             verticalDistance={80}
//             delay={3000}
//             pauseOnHover={false}
//           >
//             {achievements.map((ach, i) => (
//               <Card key={i}>
//                 <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl h-full flex flex-col justify-between shadow-xl border border-white/20">
//                   <div className="flex items-center gap-3 mb-3">
//                     <FiAward className="text-yellow-400 text-xl" />
//                     <h3 className="text-xl font-bold">{ach.title}</h3>
//                   </div>
//                   {ach.image && (
//                     <img
//                       src={ach.image}
//                       alt={ach.title}
//                       className="w-full h-60 object-contain mb-4 rounded-lg bg-white/5 p-2"
//                     />
//                   )}
//                   <p className="text-gray-300 text-sm mb-3">
//                     {ach.description}
//                   </p>
//                   <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full self-start">
//                     {ach.tag}
//                   </span>
//                 </div>
//               </Card>
//             ))}
//           </CardSwap>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchievementsSection;

import React, { useState } from "react";
import CardSwap, { Card } from "../components/CardSwap/CardSwap.jsx";
import { FiAward } from "react-icons/fi";
import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus.jsx";
import FlipCard from "../components/FlipCard/FlipCard.jsx";

const achievements = [
  {
    title: "ATF Scholar – AlgoUniversity",
    description:
      "Selected among top tech enthusiasts across India for the(ATF) program focused on advanced software engineering and mentorship.",
    tag: "Scholarship | April 2024",
    image:
      "https://images.unsplash.com/vector-1738163099590-feb564b4f61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Co-op SWE Intern – AlgoUniversity",
    description:
      "Working on scalable backend services and content platforms, contributing to technical course delivery and performance optimization.",
    tag: "Internship | June 2024 – Present",
    image:
      "https://images.unsplash.com/vector-1738163099616-ea0185dbf3e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Winner – Hacknovate 6.0 (AI.agent Track)",
    description:
      "Led a team to victory by building an AI-powered productivity bot to streamline workflows using LLMs and automation pipelines.",
    tag: "Hackathon | March 2024",
    image:
      "https://plus.unsplash.com/premium_vector-1689096917660-9041bba693dc?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Content Head – GDG IIIT Gwalior",
    description:
      "Spearheaded content and outreach strategy for Google Developer Group chapter, growing student tech engagement by 4x.",
    tag: "Leadership | Aug 2023 – Present",
    image:
      "https://plus.unsplash.com/premium_vector-1750591460877-db4c18b9cdd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxhYnN0cmFjdHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Project Admin – GSSoC '25",
    description:
      "Mentoring contributors and managing project scope, reviews, and PRs in one of India's biggest open-source summer programs.",
    tag: "Open Source | Upcoming 2025",
    image:
      "https://images.unsplash.com/vector-1746304171580-8cf25a653cd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFic3RyYWN0fGVufDB8MHwwfHx8MA%3D%3D",
  },
];

const AchievementsSection = () => {
  const [flippedStates, setFlippedStates] = useState(
    achievements.map(() => false)
  );

  const handleFlip = (index) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section
      className="w-full min-h-screen bg-black text-white px-6 sm:px-10 py-10"
      id="achievements"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 items-start">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-6 max-w-xl">
          <TrueFocus
            sentence="Achievements & Certifications"
            manualMode={false}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            These aren't just titles—they represent nights of hustle, debugging
            marathons, and moments of breakthrough. They remind me how far I’ve
            come—and how much further I want to go.
          </p>
          <blockquote className="italic text-sm text-gray-500 border-l-4 pl-4 border-blue-500">
            “Every achievement unlocks the next challenge.”
          </blockquote>
        </div>

        {/* DESKTOP: Fancy CardSwap */}
        <div
          className="hidden md:block max-w-xl mx-auto"
          style={{ height: "600px", position: "relative" }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={80}
            delay={3000}
            pauseOnHover={false}
          >
            {achievements.map((ach, i) => (
              <Card key={i}>
                <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl h-full flex flex-col justify-between shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <FiAward className="text-yellow-400 text-xl" />
                    <h3 className="text-xl font-bold">{ach.title}</h3>
                  </div>
                  {ach.image && (
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-60 object-contain mb-4 rounded-lg bg-white/5 p-2"
                    />
                  )}
                  {/* <p className="text-gray-300 text-sm mb-3">
                    {ach.description}
                  </p> */}
                  <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full self-start">
                    {ach.tag}
                  </span>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* MOBILE: 3D Flip Cards */}
        <div className="md:hidden flex flex-col gap-6 mt-8">
          {achievements.map((ach, i) => (
            <FlipCard
              key={i}
              isFlipped={flippedStates[i]}
              onFlip={() => handleFlip(i)}
              front={
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center gap-2 mb-1">
                    <FiAward className="text-yellow-400" />
                    <h3 className="text-base font-semibold">{ach.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Tap to view more</p>
                </div>
              }
              back={
                <div className="flex flex-col justify-between h-full">
                  <p className="text-sm text-gray-200">{ach.description}</p>
                  <div>
                    <span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded mt-2 inline-block">
                      {ach.tag}
                    </span>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      Tap to go back
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
