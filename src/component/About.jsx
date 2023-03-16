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

const square = {
  hidden: {
    opacity: 1,
    transition: { duration: 1 },
  },
  visible: { opacity: 0 },
};
const About = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.22 });

  const { reF, inViews } = useInView({ threshold: 0.50 });

  useEffect(() => {
    if (inViews) {
      animation.start("visible");
    }
    if (!inViews) {
      animation.start("hidden");
    }
  }, [inViews, animation]);
  
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
          <motion.div className="stacks"
          ref={reF}
          initial="hidden"
          animate={animation}
          variants={square}>
            <div className="html">
              <img src="https://i.ibb.co/Rp9SQ5Z/html.png" alt="" />
              <h5>HTML</h5>
            </div>
            <div className="css">
              <img src="https://i.ibb.co/THshmCm/css.png" alt="" />
              <h5>CSS</h5>
            </div>
            <div className="javas">
              <img src="https://i.ibb.co/L9b0Zs8/js.png" alt="" />
              <h5>JAVASCRIPT</h5>
            </div>
            <div className="react">
              <img src="https://i.ibb.co/WxDmCLS/react.png" alt="" />
              <h5>REACT JS</h5>
            </div>
            <div className="github">
              <img src="https://i.ibb.co/mFJSQCM/github.png" alt="" />
              <h5>GITHUB</h5>
            </div>
            <div className="tail">
              <img src="https://i.ibb.co/vH9v8NK/tailwind.png" alt="" />
              <h5>TAILWIND</h5>
            </div>
            <div className="node">
              <img src="https://i.ibb.co/VJ1YqwY/nodes.png" alt="" />
              <h5>NODE JS</h5>
            </div>
            <div className="expre">
              <img src="https://i.ibb.co/311SSDx/express.png" alt="" />
              <h5>EXPRESS JS</h5>
            </div>
            <div className="mongo">
              <img src="https://i.ibb.co/Cb8M1HJ/mongo.png" alt="" />
              <h5>MONGO DB</h5>
            </div>
            <div className="fire">
              <img src="https://i.ibb.co/J26MSV8/62ca2ce965c5299edbd41661-Firebase-removebg-preview.png" alt="" />
              <h5>FIREBASE</h5>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
