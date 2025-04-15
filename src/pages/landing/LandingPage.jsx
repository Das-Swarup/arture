import React from "react";
import Container from "../../components/container";
import logo from "../../assets/images/global/png/arture-web-logo.png";

const LandingPage = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center mt-[20px] flex-wrap gap-4">
          <p className="text-left text-[42px] sm:text-[60px] md:text-[100px] leading-tight md:leading-[80px]">
            Arture Creations
          </p>
          <div className="w-[60px] h-[60px]">
            <img src={logo} alt="Arture Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-[40px] md:mt-[200px] text-left">
          <div className="bg-black text-white px-0 md:px-4 py-2 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Project Description */}
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                  Project Description:
                </h3>
                <p className="text-sm leading-relaxed">
                  Arture Creations, was founded to offer a place for independent artists and creative personnel to express their creations and collaborate with agencies world-wide while working as an independent body to offer a variety of assistance with your project needs, ranging from creative direction, graphic design, VFX, concept/digital art, illustration, animation, through directorial services. The concept is still under development and here we will showcase a key selection of our projects spanning across the creative needs and industries.
                </p>
              </div>

              {/* Scope of Work */}
              <div className="md:ml-[100px]">
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                  Scope of work:
                </h3>
                <ul className="text-sm space-y-2 leading-relaxed">
                  <li>Creative Direction</li>
                  <li>Art Direction</li>
                  <li>Graphic Design</li>
                  <li>VFX - CGI</li>
                  <li>Photography</li>
                  <li>Cinematography</li>
                  <li>Animation</li>
                  <li>Director</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                  Contact:
                </h3>
                <p className="text-sm leading-relaxed">
                  If you have a scheduling inquiry for our creative services or
                  wish to chat about an upcoming project need, please contact us at
                  <a
                    href="mailto:arturecreations@gmail.com"
                    className="text-yellow-300 underline"
                  >
                    &nbsp;arturecreations@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-[100px] flex flex-col md:flex-row items-start md:items-center justify-between text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                <p>Arture Creations:</p>
                <p>@ 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
