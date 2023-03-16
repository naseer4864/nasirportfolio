import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"



const Home = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[]);
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://www.dropbox.com/s/8beclxl083ulrry/nasCV.pdf?dl=1";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="home-container">
      <div data-aos="zoom-in"
        className="info-container">
        <div className="info">
          <h1>SOFTWARE ENGINEER</h1>
          <h2>Hi, I am Naseer, focusing on creating emotional experiences.</h2>
          <button onClick={handleNavigate}>HIRE ME</button>
        </div>
        <img src="https://i.ibb.co/2sqWndy/mern-removebg-preview.png" alt="" />
      </div>

      <div className="banner-container">
        <div className="banner">
          <h2 data-aos="fade">MISSION STATEMENT</h2>
          <p data-aos="fade-up">
            I am a Full-Stack Engineer based in Nigeria,dedicated to creating
            clean, efficient, and user-friendly applications. With a strong
            focus on collaboration and innovation, I'm constantly seeking new
            ways to improve the development process and deliver exceptional
            results. Outside of work, you can find me exploring new technologies
            and tinkering with electronics.
          </p>
          <button onClick={downloadResume}>DOWNLOAD RESUME</button>
        </div>
      </div>
      <div className="customer">
        <h1 data-aos="fade">Reviews</h1>
        <div className="reviews">
          <div className="review-1" data-aos="fade-down">
            <p>
              We wanted to take a moment to thank you for the outstanding job
              you did on the project for our company. Your expertise and
              professionalism were truly appreciated, and we couldn't be happier
              with the results.
            </p>
            <h3>Jim one Global motors</h3>
          </div>
          <div className="review-2" data-aos="fade-up">
            <p>
              Your dedication to the project was evident, and we were impressed
              by your attention to detail and your commitment to delivering the
              project on time and within budget. You went above and beyond to
              ensure that every aspect of the software was tested thoroughly and
              that it was working seamlessly before delivering it to us
            </p>
            <h3>AS salam store</h3>
          </div>
          <div className="review-3" data-aos="fade-down">
            <p>
              Your communication skills were exceptional throughout the project,
              and your ability to explain complex technical concepts in simple
              terms was greatly appreciated. You kept us informed every step of
              the way, and you were always available to answer any questions we
              had.
            </p>
            <h3>Micro Finance Bank</h3>
          </div>
          <div className="review-4" data-aos="fade-up">
            <p>
              From the very beginning of the project, it was clear that you were
              committed to delivering a high-quality software solution that
              would meet our needs. You took the time to understand our
              requirements, and you worked tirelessly to ensure that every
              detail was addressed.
            </p>
            <h3>SupperJara</h3>
          </div>
        </div>
      </div>
      <div className="mid-container">
        <img data-aos="zoom-in"
          src="https://i.ibb.co/jwcFNbp/pexels-sora-shimazaki-5926393.jpg"
          alt=""
        />
        <div className="min-content" data-aos="zoom-out">
          <p>
            As a software engineer, I specializing in assisting startups and
            small businesses in optimizing their technical infrastructure for
            maximum efficiency and growth. My goal is to help businesses achieve
            their full potential by developing robust software solutions and
            cultivating a culture of innovation and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
