import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const square = {
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0 },
};

const Portfolio = () => {
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

  useEffect(() => {
    Aos.init({duration:1000})
  },[]);

  return (
    <div className="port-container">
      <motion.div className="port-header"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={square}>
        <h1>Portfolio</h1>
        <p>Checkout my recent work</p>
      </motion.div>
      <div className="recent-works-container">
        <div className="recent-1" data-aos="fade-up">
          <img
            src="https://i.ibb.co/PjxnSVy/Screen-Shot-2023-03-13-at-11-05-35-AM.png"
            alt=""
          />
          <a
            href="https://as-salam-bedding.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
        <div className="recent-2" data-aos="fade-down">
          <img
            src="https://i.ibb.co/9w8F2M4/Screen-Shot-2023-03-13-at-11-07-01-AM.png"
            alt=""
          />
          <a
            href="https://weathercheck-eosin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
        <div className="recent-3" data-aos="fade-up">
          <img
            src="https://i.ibb.co/nnQ76T9/Screen-Shot-2023-03-13-at-11-07-37-AM.png"
            alt=""
          />
          <a
            href="https://taskly-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
        <div className="recent-4" data-aos="fade-down">
          <img
            src="https://i.ibb.co/2M4K5RS/Screen-Shot-2023-03-13-at-11-08-18-AM.png"
            alt=""
          />
          <a
            href="http://my-contacts-list.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
        <div className="recent-5" data-aos="fade-up">
          <img
            src="https://i.ibb.co/cc3vdqY/Screen-Shot-2023-03-13-at-11-09-21-AM.png"
            alt=""
          />
          <a
            href="https://naseer4864.github.io/jimonemotors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
        <div className="recent-6" data-aos="fade-down">
          <img
            src="https://i.ibb.co/kDGJJjn/Screen-Shot-2023-03-13-at-11-10-38-AM.png"
            alt=""
          />
          <a
            href="http://codewithnaseer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
