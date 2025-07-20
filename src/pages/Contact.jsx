import React, { useRef } from "react";
import FlowingMenu from "../components/FlowingMenu/FlowingMenu.jsx";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const demoItems = [
  { link: "#", text: "LET'S", image: "https://picsum.photos/600/400?random=1" },
  {
    link: "#",
    text: "CONNECT",
    image: "https://picsum.photos/600/400?random=2",
  },
  { link: "#", text: "BUILD", image: "https://picsum.photos/600/400?random=3" },
  { link: "#", text: "TALK", image: "https://picsum.photos/600/400?random=4" },
];

const Contact = () => {
  const formRef = useRef();

  return (
    <section className="w-full text-white bg-black pt-12">
      {/* Flowing Menu */}
      <div className="my-24" style={{ height: "300px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>

      <section className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-20 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Connect With Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:gap-10 items-start justify-center relative z-10">
          {/* Animated Lottie */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "320px", width: "320px" }}
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="w-full lg:w-1/2 bg-gradient-to-br from-[#111827] to-[#0f172a] p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white transition"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60 text-white resize-none transition"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>

            {/* Social Icons */}
            <motion.div
              className="mt-8 flex justify-center gap-8 text-2xl text-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                {
                  icon: <FiGithub />,
                  link: "https://github.com/kanikaa-3018",
                  color: "hover:text-cyan-400",
                },
                {
                  icon: <FiLinkedin />,
                  link: "https://www.linkedin.com/in/kanika-singhal-93388428b",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FiTwitter />,
                  link: "https://twitter.com/KanikaSing57460",
                  color: "hover:text-sky-400",
                },
                {
                  icon: <FiMail />,
                  link: "mailto:kanikasinghal0308@gmail.com",
                  color: "hover:text-green-400",
                },
              ].map(({ icon, link, color }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${color} transition`}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Optional: background glow / blob (subtle enhancement) */}
        <div className="absolute -z-10 top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

        {/* <div
          class="visme_d"
          data-title="Animated Online Contact Form"
          data-url="j0n813mg-animated-online-contact-form"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="137218"
        ></div> */}
        
      </section>
    </section>
  );
};

{/* <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}

export default Contact;
