import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"




const About = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  },[]);

  return (
    <div className="about-container">
      <div className="about-header" data-aos="zoom-out">
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
      </div>
      <div className="about-banner">
        <div className="about-content">
          <div className="sta-box" data-aos="flip-up">
          <h1>STACKS</h1>
          <p className="tech">These are the Technologies I have worked with</p>
          </div>
          <div className="stacks">
            <div className="html" data-aos="zoom-in">
              <img src="https://i.ibb.co/Rp9SQ5Z/html.png" alt="" />
              <h5>HTML</h5>
            </div>
            <div className="css" data-aos="zoom-out">
              <img src="https://i.ibb.co/THshmCm/css.png" alt="" />
              <h5>CSS</h5>
            </div>
            <div className="javas" data-aos="zoom-in">
              <img src="https://i.ibb.co/L9b0Zs8/js.png" alt="" />
              <h5>JAVASCRIPT</h5>
            </div>
            <div className="react" data-aos="zoom-out">
              <img src="https://i.ibb.co/WxDmCLS/react.png" alt="" />
              <h5>REACT JS</h5>
            </div>
            <div className="github" data-aos="zoom-in">
              <img src="https://i.ibb.co/mFJSQCM/github.png" alt="" />
              <h5>GITHUB</h5>
            </div>
            <div className="tail" data-aos="zoom-out">
              <img src="https://i.ibb.co/vH9v8NK/tailwind.png" alt="" />
              <h5>TAILWIND</h5>
            </div>
            <div className="node" data-aos="zoom-in">
              <img src="https://i.ibb.co/VJ1YqwY/nodes.png" alt="" />
              <h5>NODE JS</h5>
            </div>
            <div className="expre" data-aos="zoom-out">
              <img src="https://i.ibb.co/311SSDx/express.png" alt="" />
              <h5>EXPRESS JS</h5>
            </div>
            <div className="mongo" data-aos="zoom-in">
              <img src="https://i.ibb.co/Cb8M1HJ/mongo.png" alt="" />
              <h5>MONGO DB</h5>
            </div>
            <div className="fire" data-aos="zoom-out">
              <img src="https://i.ibb.co/J26MSV8/62ca2ce965c5299edbd41661-Firebase-removebg-preview.png" alt="" />
              <h5>FIREBASE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
