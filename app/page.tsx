import Header from "@/components/Header";
import MainContent from "@/components/Main";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <About></About>
      
      

      <section id='resume' className='resume section'>
        <div className='container section-title' data-aos='fade-up'>
          <span className='subtitle'>Resume</span>
          <h2>Resume</h2>
          <p>
            A dedicated and detail-oriented Software Engineer with a strong
            focus on modern web development using JavaScript, React.js, Next.js,
            and NestJS. Experienced in building responsive, scalable, and
            user-centric applications that solve real-world problems. Known for
            strong problem-solving skills, clean code practices, and the ability
            to work effectively in collaborative, fast-paced environments.
            Driven by continuous learning and a passion for creating
            high-quality digital solutions.
          </p>
        </div>

        <div className='container' data-aos='fade-up' data-aos-delay='100'>
          <div className='row gy-5'>
            <div className='col-lg-6'>
              <div className='experience-section'>
                <div
                  className='section-header'
                  data-aos='fade-right'
                  data-aos-delay='200'
                >
                  <div className='header-content'>
                    <span className='section-badge'>Experience</span>
                    <h2>Professional Journey</h2>
                    <p>
                      My journey as a Software Engineer began with a passion for
                      building meaningful digital experiences. Over the years,
                      I’ve honed my skills in modern web development,
                      specializing in JavaScript, React.js, Next.js, and NestJS.
                      Through various projects and collaborations, I’ve learned
                      to create applications that balance performance,
                      usability, and clean architecture..
                    </p>
                  </div>
                </div>

                <div className='experience-cards'>
                  <div
                    className='exp-card featured'
                    data-aos='zoom-in'
                    data-aos-delay='300'
                  >
                    <div className='card-header'>
                      <div className='company-logo'>
                        <i className='bi bi-buildings'></i>
                      </div>
                      <div className='period-badge'>Current</div>
                    </div>
                    <div className='card-body'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3>Junior Web Developer</h3>
                        <span className='badge bg-danger'>Present</span>
                      </div>
                      <p className='company-name'>Peace Global Logistics LLC</p>
                      <span className='duration'>
                        01/Jan/2022 - 01-June-2022
                      </span>
                      <p className='description'>
                        Worked on developing and maintaining web pages and
                        internal tools to support logistics operations.
                        Implemented UI components, optimized workflows, and
                        collaborated with cross-functional teams to improve
                        system functionality. Focused on writing clean,
                        efficient code and delivering reliable features that
                        enhanced overall user experience within the company’s
                        digital platforms...
                      </p>
                      <div className='skills-tags'>
                        <span className='skill-tag'>Leadership</span>
                        <span className='skill-tag'>Strategy</span>
                        <span className='skill-tag'>Innovation</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className='exp-card'
                    data-aos='zoom-in'
                    data-aos-delay='350'
                  >
                    <div className='card-header'>
                      <div className='company-logo'>
                        <i className='bi bi-laptop'></i>
                      </div>
                    </div>
                    <div className='card-body'>
                      <h3>Junior Web Developer</h3>
                      <p className='company-name'>Well Graphics</p>
                      <span className='duration'>2023 - 2024</span>
                      <p className='description'>
                        Supported the development of responsive and
                        user-friendly web pages using modern frontend
                        technologies. Assisted in implementing UI components,
                        fixing bugs, and improving overall website performance.
                        Collaborated with designers and senior developers to
                        ensure clean code, smooth functionality, and a seamless
                        user experience...
                      </p>
                    </div>
                  </div>

                  <div
                    className='exp-card'
                    data-aos='zoom-in'
                    data-aos-delay='400'
                  >
                    <div className='card-header'>
                      <div className='company-logo'>
                        <i className='bi bi-palette'></i>
                      </div>
                    </div>
                    <div className='card-body'>
                      <h3>Intern Frontend Web Developer</h3>
                      <p className='company-name'>Ulearna</p>
                      <span className='duration'>
                        01/Jan/2022 - 01-June-2022
                      </span>
                      <p className='description'>
                        During my internship, I contributed to building and
                        improving user-facing features using modern frontend
                        technologies. I assisted in developing responsive
                        interfaces, optimizing UI performance, and ensuring a
                        smooth user experience. I collaborated with the
                        development team to implement designs, fix bugs, and
                        enhance overall functionality while gaining hands-on
                        experience with real-world frontend workflows..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='education-section'>
                <div
                  className='section-header'
                  data-aos='fade-left'
                  data-aos-delay='200'
                >
                  <div className='header-content'>
                    <span className='section-badge'>Education</span>
                    <h2>Academic Background</h2>
                    <p>
                      Studied Faculty of Software Engineering at Rana
                      University. Completed software development classes at
                      Ulearna Technology and Software House to enhance practical
                      skills and industry knowledge..
                    </p>
                  </div>
                </div>

                <div
                  className='education-timeline'
                  data-aos='fade-left'
                  data-aos-delay='300'
                >
                  <div className='timeline-track'>
                    <div className='timeline-item'>
                      <div className='timeline-marker'>
                        <i className='bi bi-mortarboard-fill'></i>
                      </div>
                      <div className='timeline-content'>
                        <div className='education-meta'>
                          <span className='year-range'>2018 - 2022</span>
                          <span className='degree-level'>Bachelor </span>
                        </div>
                        <h4>Master of Design Innovation</h4>
                        <p className='institution'>Rana University</p>
                        <p className='description'>
                          Completed advanced studies in design innovation,
                          focusing on creative problem-solving, user-centered
                          design, and emerging design technologies. Developed
                          skills in translating complex ideas into innovative
                          solutions that blend aesthetics and functionality..
                        </p>
                        <div className='achievement'>
                          <i className='bi bi-award'></i>
                          <span>Summa Cum Laude</span>
                        </div>
                      </div>
                    </div>

                    <div className='timeline-item'>
                      <div className='timeline-marker'>
                        <i className='bi bi-book'></i>
                      </div>
                      <div className='timeline-content'>
                        <div className='education-meta'>
                          <span className='year-range'>2011 - 2015</span>
                          <span className='degree-level'>Bachelor</span>
                        </div>
                        <h4>Bachelor of Fine Arts</h4>
                        <p className='institution'>Creative Arts University</p>
                        <p className='description'>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>

                    <div className='timeline-item'>
                      <div className='timeline-marker'>
                        <i className='bi bi-patch-check-fill'></i>
                      </div>
                      <div className='timeline-content'>
                        <div className='education-meta'>
                          <span className='year-range'>2021 - 2023</span>
                          <span className='degree-level'>Certificates</span>
                        </div>
                        <h4>Professional Certifications</h4>
                        <div className='certifications-list'>
                          <div className='cert-item'>
                            <span className='cert-name'>
                              Advanced UX Research
                            </span>
                            <span className='cert-year'>2023</span>
                          </div>
                          <div className='cert-item'>
                            <span className='cert-name'>Design Leadership</span>
                            <span className='cert-year'>2022</span>
                          </div>
                          <div className='cert-item'>
                            <span className='cert-name'>Digital Strategy</span>
                            <span className='cert-year'>2021</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
