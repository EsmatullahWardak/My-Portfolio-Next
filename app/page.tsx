
export default function Home() {
  return (
   <>
   <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" className="logo d-flex align-items-center me-auto">
        <h1  className="site-name text-center">Esmat Elham</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" href="#about">Get Started</a>

    </div>
  </header>
  <main className="main">
  <section id="hero" className="hero section dark-background">

      <img src="/assets/img/my-photo/esmat-bg-cut.jpg" alt="" data-aos="fade-in"/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Hi, I'm Esmatullah Elham</h2>
            <p>I'm a <span className="typed" data-typed-items="Software Engineer, FullStack Web Developer, Freelancer, Photographer"></span><span className="typed-cursor" aria-hidden="true"></span></p>
            <div className="social-links">
  
          <a href="https://youtube.com/@esmat_elham?si=TsuALnY0wFVMjUSE" target="_blank">
            <i className="bi bi-youtube"></i>
          </a>

          <a href="https://www.facebook.com/share/1Rie1j7aWb/"><i className="bi bi-facebook"></i></a>

  

          <a href="https://www.linkedin.com/in/esmat-elham-95969725b" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/esmat-elham" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </div>

          </div>
        </div>
      </div>

    </section>
    <section id="about" className="about section">

      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">About Me</span>
        <h2>About Me</h2>
        <p>Hi, I’m Esmatullah Elham, a Software Engineer and Frontend Developer specializing in JavaScript, React.js, Next.js, and NestJS. I’m passionate about building fast, modern, and user-focused web applications.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img src="/assets/img/my-photo/esmat-profile.jpg" className="img-fluid" alt=""/>
                  <div className="status-indicator"></div>
                </div>
                <h3>Esmat Elham</h3>
                <span className="role">Frontend Developer</span>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <span>4.8</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <h4>10</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>2</h4>
                  <p>Years</p>
                </div>
                <div className="stat-item">
                  <h4>5</h4>
                  <p>Awards</p>
                </div>
              </div>

              <div className="profile-actions">
                <a href="#" className="btn-primary"><i className="bi bi-download"></i> Download CV</a>
                <a href="#" className="btn-secondary"><i className="bi bi-envelope"></i> Contact</a>
              </div>

              <div className="social-connect">
                <a href="https://www.linkedin.com/in/esmat-elham-95969725b"><i className="bi bi-linkedin"></i></a>
<a href="https://github.com/EsmatullahWardak"><i className="bi bi-github"></i></a>

<a href="https://www.facebook.com/share/1Rie1j7aWb/"><i className="bi bi-facebook"></i></a>

              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="content-wrapper">
              <div className="bio-section">
                <div className="section-tag">About Me</div>
                <h2>Transforming Ideas into Digital Reality</h2>
                <p>As a passionate Software Engineer, I turn concepts into functional, scalable digital experiences. I believe great products come from combining clean code, thoughtful design, and a deep understanding of user needs. My goal is to create solutions that not only work flawlessly but also deliver meaningful impact..</p>
                <p>With a strong focus on JavaScript, React.js, Next.js, and NestJS, I build modern, high-performance applications that help bring ideas to life. I enjoy solving complex problems, crafting intuitive interfaces, and continuously striving to deliver high-quality results..</p>
              </div>

              <div className="details-grid">
                <div className="detail-item" data-aos="fade-up" data-aos-delay="250">
                  <i className="bi bi-briefcase"></i>
                  <div className="detail-content">
                    <span>Experience</span>
                    <strong>2+ Years</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-mortarboard"></i>
                  <div className="detail-content">
                    <span>Degree</span>
                    <strong>Software Engineering</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                  <i className="bi bi-geo-alt"></i>
                  <div className="detail-content">
                    <span>Based In</span>
                    <strong>Kabul, Afghanistan</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-envelope"></i>
                  <div className="detail-content">
                    <span>Email</span>
                    <strong>esmatullah.wardak2020@gmail.com</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                  <i className="bi bi-phone"></i>
                  <div className="detail-content">
                    <span>Phone</span>
                    <strong>+93786368320</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-calendar-check"></i>
                  <div className="detail-content">
                    <span>Availability</span>
                    <strong>Open to Work</strong>
                  </div>
                </div>
              </div>

              <div className="skills-showcase" data-aos="fade-up" data-aos-delay="250">
                <div className="section-tag">Core Skills</div>
                <h3>Technical Proficiency</h3>

                <div className="skills-list skills-animation">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">JavaScript, React.js &amp; Next.js</span>
                      <span className="skill-percent">95%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Nest.js</span>
                      <span className="skill-percent">90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>


                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">MongoDB &amp; PostgreSQL</span>
                      <span className="skill-percent">85%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </section>
    <section id="resume" className="resume section">

      
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Resume</span>
        <h2>Resume</h2>
        <p>A dedicated and detail-oriented Software Engineer with a strong focus on modern web development using JavaScript, React.js, Next.js, and NestJS. Experienced in building responsive, scalable, and user-centric applications that solve real-world problems. Known for strong problem-solving skills, clean code practices, and the ability to work effectively in collaborative, fast-paced environments. Driven by continuous learning and a passion for creating high-quality digital solutions.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="experience-section">
              <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Experience</span>
                  <h2>Professional Journey</h2>
                  <p>My journey as a Software Engineer began with a passion for building meaningful digital experiences. Over the years, I’ve honed my skills in modern web development, specializing in JavaScript, React.js, Next.js, and NestJS. Through various projects and collaborations, I’ve learned to create applications that balance performance, usability, and clean architecture..</p>
                </div>
              </div>

              <div className="experience-cards">
                <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-buildings"></i>
                    </div>
                    <div className="period-badge">Current</div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                    <h3>Junior Web Developer</h3>
                    <span className="badge bg-danger">Present</span>
                    </div>
                    <p className="company-name">Peace Global Logistics LLC</p>
                    <span className="duration">01/Jan/2022 - 01-June-2022</span>
                    <p className="description">Worked on developing and maintaining web pages and internal tools to support logistics operations. Implemented UI components, optimized workflows, and collaborated with cross-functional teams to improve system functionality. Focused on writing clean, efficient code and delivering reliable features that enhanced overall user experience within the company’s digital platforms...</p>
                    <div className="skills-tags">
                      <span className="skill-tag">Leadership</span>
                      <span className="skill-tag">Strategy</span>
                      <span className="skill-tag">Innovation</span>
                    </div> 
                  </div>
                </div>

                <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Junior Web Developer</h3>
                    <p className="company-name">Well Graphics</p>
                    <span className="duration">2023 - 2024</span>
                    <p className="description">Supported the development of responsive and user-friendly web pages using modern frontend technologies. Assisted in implementing UI components, fixing bugs, and improving overall website performance. Collaborated with designers and senior developers to ensure clean code, smooth functionality, and a seamless user experience...</p>
                  </div>
                </div>

                <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-palette"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Intern Frontend Web Developer</h3>
                    <p className="company-name">Ulearna</p>
                    <span className="duration">01/Jan/2022 - 01-June-2022</span>
                    <p className="description">During my internship, I contributed to building and improving user-facing features using modern frontend technologies. I assisted in developing responsive interfaces, optimizing UI performance, and ensuring a smooth user experience. I collaborated with the development team to implement designs, fix bugs, and enhance overall functionality while gaining hands-on experience with real-world frontend workflows..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-section">
              <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Education</span>
                  <h2>Academic Background</h2>
                  <p>Studied Faculty of Software Engineering at Rana University. Completed software development classes at Ulearna Technology and Software House to enhance practical skills and industry knowledge..</p>
                </div>
              </div>

              <div className="education-timeline" data-aos="fade-left" data-aos-delay="300">
                <div className="timeline-track">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2018 - 2022</span>
                        <span className="degree-level">Bachelor </span>
                      </div>
                      <h4>Master of Design Innovation</h4>
                      <p className="institution">Rana University</p>
                      <p className="description">Completed advanced studies in design innovation, focusing on creative problem-solving, user-centered design, and emerging design technologies. Developed skills in translating complex ideas into innovative solutions that blend aesthetics and functionality..</p>
                      <div className="achievement">
                        <i className="bi bi-award"></i>
                        <span>Summa Cum Laude</span>
                      </div> 
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2011 - 2015</span>
                        <span className="degree-level">Bachelor</span>
                      </div>
                      <h4>Bachelor of Fine Arts</h4>
                      <p className="institution">Creative Arts University</p>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                  </div> 

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2021 - 2023</span>
                        <span className="degree-level">Certificates</span>
                      </div>
                      <h4>Professional Certifications</h4>
                      <div className="certifications-list">
                        <div className="cert-item">
                          <span className="cert-name">Advanced UX Research</span>
                          <span className="cert-year">2023</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Design Leadership</span>
                          <span className="cert-year">2022</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Digital Strategy</span>
                          <span className="cert-year">2021</span>
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
    <section id="services" className="services section">

      
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Services</span>
        <h2>Services</h2>
        <p>I provide modern web development solutions focused on building fast, responsive, and scalable applications. Specializing in frontend development with React.js and Next.js, I create intuitive user interfaces that deliver seamless user experiences. On the backend, I use NestJS to build robust, maintainable APIs and services. Whether you need a complete web app, UI enhancements, or backend integrations, I deliver clean, efficient, and well-tested code tailored to your project’s needs.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-palette"></i>
              </div>
              <h4>Brand Identity</h4>
              <p>Crafting unique and memorable brand identities that effectively communicate your vision. I focus on creating cohesive visuals, consistent messaging, and design elements that strengthen brand recognition and engagement..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item featured">
              <div className="featured-tag">Featured</div>
              <div className="icon-wrapper">
                <i className="bi bi-layout-text-window-reverse"></i>
              </div>
              <h4>UI/UX Design</h4>
              <p>Designing intuitive and engaging user interfaces that provide seamless experiences. I focus on wireframing, prototyping, and refining digital products to ensure usability, accessibility, and visual consistency across platforms..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-code-slash"></i>
              </div>
              <h4>Development</h4>
              <p>Creating robust and scalable web applications using JavaScript, React.js, Next.js, and NestJS. I focus on writing clean, maintainable code and delivering solutions that combine performance, usability, and modern design principles..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-phone"></i>
              </div>
              <h4>Mobile Apps</h4>
              <p>Designing and developing mobile applications that are user-friendly, responsive, and performance-optimized. I focus on creating intuitive interfaces and seamless functionality to deliver an engaging mobile experience..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-megaphone"></i>
              </div>
              <h4>Digital Marketing</h4>
              <p>Creating effective digital marketing strategies that boost online presence and engagement. I focus on optimizing content, leveraging social platforms, and analyzing performance to deliver measurable results..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-search"></i>
              </div>
              <h4>SEO Services</h4>
              <p>Optimizing websites to improve search engine rankings and increase organic traffic. I focus on keyword research, on-page optimization, and performance analysis to help businesses reach their target audience effectively..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Analytics</h4>
              <p>Analyzing data to drive informed business decisions and optimize digital performance. I focus on tracking metrics, interpreting trends, and providing actionable insights to improve user engagement and overall strategy..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>Security</h4>
              <p>Implementing robust security measures to protect web and mobile applications. I focus on safeguarding data, managing access controls, and ensuring safe and reliable digital environments for users and businesses..</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Transform Your Vision Into Reality</h3>
                  <p>Partner with us to bring your ideas to life with innovative solutions tailored to your needs</p>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="service-details.html" className="cta-btn">Start Your Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <section id="portfolio" className="portfolio section">

      
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Portfolio</span>
        <h2>Portfolio</h2>
        <p>Showcasing a collection of my web and software development projects, highlighting expertise in JavaScript, React.js, Next.js, and NestJS. Each project demonstrates clean code, responsive design, and practical solutions tailored to real-world challenges.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
            <li data-filter="*" className="filter-active">All Work</li>
            <li data-filter=".filter-creative">Creative</li>
            <li data-filter=".filter-digital">Digital</li>
            <li data-filter=".filter-strategy">Strategy</li>
            <li data-filter=".filter-development">Development</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-1.webp" alt="Creative Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Creative Design</span>
                      <h4>Visual Identity System</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-1.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Branding</span>
                    <span className="tag">Identity</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-2.webp" alt="Digital Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Digital Experience</span>
                      <h4>Interactive Web Platform</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-2.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Web Design</span>
                    <span className="tag">Development</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-3.webp" alt="Strategy Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Brand Strategy</span>
                      <h4>Market Positioning</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-3.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Strategy</span>
                    <span className="tag">Consulting</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-4.webp" alt="Development Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Full Stack</span>
                      <h4>Custom Application</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-4.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-5.webp" alt="Creative Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Art Direction</span>
                      <h4>Campaign Design</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-5.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Creative</span>
                    <span className="tag">Campaign</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src="assets/img/portfolio/portfolio-6.webp" alt="Digital Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Digital Product</span>
                      <h4>Mobile Experience</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-6.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Mobile</span>
                    <span className="tag">UI/UX</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Like what you see?</h3>
              <p>Enjoy exploring my work? I build responsive web applications and engaging digital experiences. Let’s connect to collaborate, discuss projects, or bring your ideas to life..</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-accent">Let's Work Together</a>
            </div>
          </div>
        </div>

      </div>

    </section>
    <section id="contact" className="contact section">

      
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
        <h2>Contact</h2>
        <p>Feel free to reach out to discuss projects, collaborations, or any opportunities. I am available via email, social media, or through the contact form, and I aim to respond promptly to all inquiries.</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>Qala-e-Fatullah, 5th Street</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+93786368320</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>esmatullah.wardak2020@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Message" required/>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
    </main>
    

    <footer id="footer" className="footer">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <span className="site-name text-center">Esmat Elham</span>
          </a>
          <p>Esmat Elham – Crafting modern web applications and intuitive user experiences. Connect to explore my projects, discuss ideas, or collaborate on innovative solutions..</p>
          <div className="social-links d-flex mt-4">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>Qala-e-fatullah, 5th Street</p>
          <p>Kabul</p>
          <p>Afghanistan</p>
          <p className="mt-4"><strong>Phone:</strong> <span>+93786368320</span></p>
          <p><strong>Email:</strong> <span>esmatullah.wardak2020@gmail.com</span></p>
        </div>

      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Craftivo</strong> <span>All Rights Reserved</span></p>
      <div className="credits">

        Designed by <a href="https://www.facebook.com/share/1Rie1j7aWb/">Esmatullah Elham</a>
      </div>
    </div>

  </footer>
    </>
  );
}
