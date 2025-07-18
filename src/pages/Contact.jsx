import React, { useRef } from "react";
import FlowingMenu from "../components/FlowingMenu/FlowingMenu.jsx";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import PixelTransition from "../Animations/PixelTransition/PixelTransition.jsx";
import { Player } from "@lottiefiles/react-lottie-player"; // npm i @lottiefiles/react-lottie-player

const demoItems = [
  { link: "#", text: "LET'S", image: "https://picsum.photos/600/400?random=1" },
  { link: "#", text: "CONNECT", image: "https://picsum.photos/600/400?random=2" },
  { link: "#", text: "BUILD", image: "https://picsum.photos/600/400?random=3" },
  { link: "#", text: "TALK", image: "https://picsum.photos/600/400?random=4" },
];

const Contact = () => {
  const formRef = useRef();

  return (
    <section className="w-full text-white bg-black pt-12">
      <div className="my-24" style={{ height: "300px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>

      <section className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center">
          Connect With Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:gap-10 items-start justify-center">
          {/* Left: Animated Connector */}
          <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "320px", width: "320px" }}
            />
          </div>

          {/* Right: Contact Form */}
          <div
            ref={formRef}
            className="w-full lg:w-1/2 bg-[#111827] p-8 rounded-2xl shadow-lg border border-white/10"
          >
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                🔥 Send Message
              </button>
            </form>

            <div className="mt-8 flex justify-center gap-8 text-2xl text-white/80">
              <a href="https://github.com/kanikaa-3018" target="_blank" rel="noreferrer">
                <FiGithub className="hover:text-cyan-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/kanika-singhal-93388428b" target="_blank" rel="noreferrer">
                <FiLinkedin className="hover:text-blue-400 transition" />
              </a>
              <a href="https://twitter.com/KanikaSing57460" target="_blank" rel="noreferrer">
                <FiTwitter className="hover:text-sky-400 transition" />
              </a>
              <a href="mailto:kanikasinghal0308@gmail.com">
                <FiMail className="hover:text-green-400 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
