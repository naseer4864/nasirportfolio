import React from 'react';
import { Zoom } from 'react-reveal';


class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Zoom left>
        <div className="reviews">
          <div className="review-1">
            <p>
              We wanted to take a moment to thank you for the outstanding job
              you did on the project for our company. Your expertise and
              professionalism were truly appreciated, and we couldn't be happier
              with the results.
            </p>
            <h3>Jim one Global motors</h3>
          </div>
          <div className="review-2">
            <p>
              Your dedication to the project was evident, and we were impressed
              by your attention to detail and your commitment to delivering the
              project on time and within budget. You went above and beyond to
              ensure that every aspect of the software was tested thoroughly and
              that it was working seamlessly before delivering it to us
            </p>
            <h3>AS salam store</h3>
          </div>
          <div className="review-3">
            <p>
              Your communication skills were exceptional throughout the project,
              and your ability to explain complex technical concepts in simple
              terms was greatly appreciated. You kept us informed every step of
              the way, and you were always available to answer any questions we
              had.
            </p>
            <h3>Micro Finance Bank</h3>
          </div>
          <div className="review-4">
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
        </Zoom>
      </div>
    );
  }
}

export default FadeExample;