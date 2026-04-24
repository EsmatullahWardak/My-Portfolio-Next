import Header from "@/components/Header";
import MainContent from "@/components/Main";
import About from "@/components/About";
import Footer from "@/components/Footer";

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
      <section id='services' className='services section'>
        <div className='container section-title' data-aos='fade-up'>
          <span className='subtitle'>Services</span>
          <h2>Services</h2>
          <p>
            I provide modern web development solutions focused on building fast,
            responsive, and scalable applications. Specializing in frontend
            development with React.js and Next.js, I create intuitive user
            interfaces that deliver seamless user experiences. On the backend, I
            use NestJS to build robust, maintainable APIs and services. Whether
            you need a complete web app, UI enhancements, or backend
            integrations, I deliver clean, efficient, and well-tested code
            tailored to your project’s needs.
          </p>
        </div>

        <div className='container' data-aos='fade-up' data-aos-delay='100'>
          <div className='row gy-4'>
            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='100'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-palette'></i>
                </div>
                <h4>Brand Identity</h4>
                <p>
                  Crafting unique and memorable brand identities that
                  effectively communicate your vision. I focus on creating
                  cohesive visuals, consistent messaging, and design elements
                  that strengthen brand recognition and engagement..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div className='service-item featured'>
                <div className='featured-tag'>Featured</div>
                <div className='icon-wrapper'>
                  <i className='bi bi-layout-text-window-reverse'></i>
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  Designing intuitive and engaging user interfaces that provide
                  seamless experiences. I focus on wireframing, prototyping, and
                  refining digital products to ensure usability, accessibility,
                  and visual consistency across platforms..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-code-slash'></i>
                </div>
                <h4>Development</h4>
                <p>
                  Creating robust and scalable web applications using
                  JavaScript, React.js, Next.js, and NestJS. I focus on writing
                  clean, maintainable code and delivering solutions that combine
                  performance, usability, and modern design principles..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-phone'></i>
                </div>
                <h4>Mobile Apps</h4>
                <p>
                  Designing and developing mobile applications that are
                  user-friendly, responsive, and performance-optimized. I focus
                  on creating intuitive interfaces and seamless functionality to
                  deliver an engaging mobile experience..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='100'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-megaphone'></i>
                </div>
                <h4>Digital Marketing</h4>
                <p>
                  Creating effective digital marketing strategies that boost
                  online presence and engagement. I focus on optimizing content,
                  leveraging social platforms, and analyzing performance to
                  deliver measurable results..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='200'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-search'></i>
                </div>
                <h4>SEO Services</h4>
                <p>
                  Optimizing websites to improve search engine rankings and
                  increase organic traffic. I focus on keyword research, on-page
                  optimization, and performance analysis to help businesses
                  reach their target audience effectively..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='300'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-graph-up-arrow'></i>
                </div>
                <h4>Analytics</h4>
                <p>
                  Analyzing data to drive informed business decisions and
                  optimize digital performance. I focus on tracking metrics,
                  interpreting trends, and providing actionable insights to
                  improve user engagement and overall strategy..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6'
              data-aos='zoom-in'
              data-aos-delay='400'
            >
              <div className='service-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-shield-check'></i>
                </div>
                <h4>Security</h4>
                <p>
                  Implementing robust security measures to protect web and
                  mobile applications. I focus on safeguarding data, managing
                  access controls, and ensuring safe and reliable digital
                  environments for users and businesses..
                </p>
                <a href='service-details.html' className='read-more'>
                  <span>Explore</span>
                  <i className='bi bi-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-12' data-aos='fade-up' data-aos-delay='200'>
              <div className='cta-box'>
                <div className='row align-items-center'>
                  <div className='col-lg-8'>
                    <h3>Transform Your Vision Into Reality</h3>
                    <p>
                      Partner with us to bring your ideas to life with
                      innovative solutions tailored to your needs
                    </p>
                  </div>
                  <div className='col-lg-4 text-lg-end text-center'>
                    <a href='service-details.html' className='cta-btn'>
                      Start Your Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='portfolio' className='portfolio section'>
        <div className='container section-title' data-aos='fade-up'>
          <span className='subtitle'>Portfolio</span>
          <h2>Portfolio</h2>
          <p>
            Showcasing a collection of my web and software development projects,
            highlighting expertise in JavaScript, React.js, Next.js, and NestJS.
            Each project demonstrates clean code, responsive design, and
            practical solutions tailored to real-world challenges.
          </p>
        </div>

        <div className='container' data-aos='fade-up' data-aos-delay='100'>
          <div
            className='isotope-layout'
            data-default-filter='*'
            data-layout='masonry'
            data-sort='original-order'
          >
            <ul
              className='portfolio-filters isotope-filters'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <li data-filter='*' className='filter-active'>
                All Work
              </li>
              <li data-filter='.filter-creative'>Creative</li>
              <li data-filter='.filter-digital'>Digital</li>
              <li data-filter='.filter-strategy'>Strategy</li>
              <li data-filter='.filter-development'>Development</li>
            </ul>

            <div
              className='row gy-4 isotope-container'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-creative'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-1.webp'
                      alt='Creative Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>
                          Creative Design
                        </span>
                        <h4>Visual Identity System</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-1.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>Branding</span>
                      <span className='tag'>Identity</span>
                    </div>
                    <div className='project-year'>2024</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-digital'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-2.webp'
                      alt='Digital Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>
                          Digital Experience
                        </span>
                        <h4>Interactive Web Platform</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-2.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>Web Design</span>
                      <span className='tag'>Development</span>
                    </div>
                    <div className='project-year'>2024</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-3.webp'
                      alt='Strategy Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>Brand Strategy</span>
                        <h4>Market Positioning</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-3.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>Strategy</span>
                      <span className='tag'>Consulting</span>
                    </div>
                    <div className='project-year'>2023</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-development'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-4.webp'
                      alt='Development Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>Full Stack</span>
                        <h4>Custom Application</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-4.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>React</span>
                      <span className='tag'>Node.js</span>
                    </div>
                    <div className='project-year'>2024</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-creative'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-5.webp'
                      alt='Creative Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>Art Direction</span>
                        <h4>Campaign Design</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-5.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>Creative</span>
                      <span className='tag'>Campaign</span>
                    </div>
                    <div className='project-year'>2024</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item isotope-item filter-digital'>
                <div className='portfolio-card'>
                  <div className='portfolio-image-container'>
                    <img
                      src='assets/img/portfolio/portfolio-6.webp'
                      alt='Digital Project'
                      className='img-fluid'
                      loading='lazy'
                    />
                    <div className='portfolio-overlay'>
                      <div className='portfolio-info'>
                        <span className='project-category'>
                          Digital Product
                        </span>
                        <h4>Mobile Experience</h4>
                      </div>
                      <div className='portfolio-actions'>
                        <a
                          href='assets/img/portfolio/portfolio-6.webp'
                          className='glightbox portfolio-link'
                        >
                          <i className='bi bi-plus-lg'></i>
                        </a>
                        <a href='#' className='portfolio-details'>
                          <i className='bi bi-arrow-right'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='portfolio-meta'>
                    <div className='project-tags'>
                      <span className='tag'>Mobile</span>
                      <span className='tag'>UI/UX</span>
                    </div>
                    <div className='project-year'>2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='portfolio-bottom'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='row align-items-center'>
              <div className='col-lg-8'>
                <h3>Like what you see?</h3>
                <p>
                  Enjoy exploring my work? I build responsive web applications
                  and engaging digital experiences. Let’s connect to
                  collaborate, discuss projects, or bring your ideas to life..
                </p>
              </div>
              <div className='col-lg-4 text-lg-end'>
                <a href='#contact' className='btn btn-accent'>
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='contact section'>
        <div className='container section-title' data-aos='fade-up'>
          <span className='subtitle'>Contact</span>
          <h2>Contact</h2>
          <p>
            Feel free to reach out to discuss projects, collaborations, or any
            opportunities. I am available via email, social media, or through
            the contact form, and I aim to respond promptly to all inquiries.
          </p>
        </div>

        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div className='info-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-geo-alt'></i>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Qala-e-Fatullah, 5th Street</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-telephone'></i>
                </div>
                <div>
                  <h3>Call Me</h3>
                  <p>+93786368320</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='icon-wrapper'>
                  <i className='bi bi-envelope'></i>
                </div>
                <div>
                  <h3>Email Me</h3>
                  <p>esmatullah.wardak2020@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <form
                action='forms/contact.php'
                method='post'
                className='php-email-form'
              >
                <div className='row gy-4'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Your Name'
                      required
                    />
                  </div>

                  <div className='col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Your Email'
                      required
                    />
                  </div>

                  <div className='col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                      required
                    />
                  </div>

                  <div className='col-md-12'>
                    <textarea
                      className='form-control'
                      name='message'
                      rows={6}
                      placeholder='Message'
                      required
                    />
                  </div>

                  <div className='col-md-12 text-center'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>
                      Your message has been sent. Thank you!
                    </div>

                    <button type='submit'>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
