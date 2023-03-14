import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const content = {
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  hidden: { scale: 0 },
};

const About = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.22 });
  
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView, animation]);

  return (
    <div className="about-container">
      <motion.div className="about-header"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={content}>
        <h1>ABOUT ME</h1>
      <p>
        I am a Full-Stack Software Engineer who believes that every line of code
        has the power to make a difference. With a passion for creating
        innovative solutions to complex problems, I am always pushing the
        boundaries of what's possible. Whether I'm designing a seamless user
        experience or optimizing database performance, I strive for excellence
        in everything I do. When I'm not coding, you can find me exploring the
        great outdoors or experimenting in the kitchen, constantly seeking
        inspiration for my next project.
      </p>
      </motion.div>
      <div className="about-banner">
        <div className="about-content">
          <div className="sta-box">
          <h1>STACKS</h1>
          <p className="tech">These are the Technologies I have worked with</p>
          </div>
          <div className="stacks">
            <div className="html">
              <img src="https://i.ibb.co/Rp9SQ5Z/html.png" alt="" />
              <h2>HTML</h2>
            </div>
            <div className="css">
              <img src="https://i.ibb.co/THshmCm/css.png" alt="" />
              <h2>CSS</h2>
            </div>
            <div className="javas">
              <img src="https://i.ibb.co/L9b0Zs8/js.png" alt="" />
              <h2>JAVASCRIPT</h2>
            </div>
            <div className="react">
              <img src="https://i.ibb.co/WxDmCLS/react.png" alt="" />
              <h2>REACT JS</h2>
            </div>
            <div className="github">
              <img src="https://i.ibb.co/mFJSQCM/github.png" alt="" />
              <h2>GITHUB</h2>
            </div>
            <div className="tail">
              <img src="https://i.ibb.co/vH9v8NK/tailwind.png" alt="" />
              <h2>TAILWIND</h2>
            </div>
            <div className="node">
              <img src="https://i.ibb.co/VJ1YqwY/nodes.png" alt="" />
              <h2>NODE JS</h2>
            </div>
            <div className="expre">
              <img src="https://i.ibb.co/311SSDx/express.png" alt="" />
              <h2>EXPRESS JS</h2>
            </div>
            <div className="mongo">
              <img src="https://i.ibb.co/Cb8M1HJ/mongo.png" alt="" />
              <h2>MONGO DB</h2>
            </div>
            <div className="fire">
              <img src="https://i.ibb.co/J26MSV8/62ca2ce965c5299edbd41661-Firebase-removebg-preview.png" alt="" />
              <h2>FIREBASE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
