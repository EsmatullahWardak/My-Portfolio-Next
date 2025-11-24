"use client";
export default function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">About Me</span>
          <h2>About Me</h2>
          <p>
            Hi, I’m Esmatullah Elham, a Software Engineer and Frontend Developer
            specializing in JavaScript, React.js, Next.js, and NestJS. I’m
            passionate about building fast, modern, and user-focused web
            applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <img
                      src="/assets/img/my-photo/esmat-profile.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className='status-indicator'></div>
                  </div>
                  <h3>Esmat Elham</h3>
                  <span className='role'>Frontend Developer</span>
                  <div className='rating'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-half'></i>
                    <span>4.8</span>
                  </div>
                </div>

                <div className='profile-stats'>
                  <div className='stat-item'>
                    <h4>10</h4>
                    <p>Projects</p>
                  </div>
                  <div className='stat-item'>
                    <h4>2</h4>
                    <p>Years</p>
                  </div>
                  <div className='stat-item'>
                    <h4>5</h4>
                    <p>Awards</p>
                  </div>
                </div>

                <div className='profile-actions'>
                  <a href='#' className='btn-primary'>
                    <i className='bi bi-download'></i> Download CV
                  </a>
                  <a href='#' className='btn-secondary'>
                    <i className='bi bi-envelope'></i> Contact
                  </a>
                </div>

                <div className='social-connect'>
                  <a href='https://www.linkedin.com/in/esmat-elham-95969725b'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                  <a href='https://github.com/EsmatullahWardak'>
                    <i className='bi bi-github'></i>
                  </a>

                  <a href='https://www.facebook.com/share/1Rie1j7aWb/'>
                    <i className='bi bi-facebook'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-8' data-aos='fade-left' data-aos-delay='200'>
              <div className='content-wrapper'>
                <div className='bio-section'>
                  <div className='section-tag'>About Me</div>
                  <h2>Transforming Ideas into Digital Reality</h2>
                  <p>
                    As a passionate Software Engineer, I turn concepts into
                    functional, scalable digital experiences. I believe great
                    products come from combining clean code, thoughtful design,
                    and a deep understanding of user needs. My goal is to create
                    solutions that not only work flawlessly but also deliver
                    meaningful impact..
                  </p>
                  <p>
                    With a strong focus on JavaScript, React.js, Next.js, and
                    NestJS, I build modern, high-performance applications that
                    help bring ideas to life. I enjoy solving complex problems,
                    crafting intuitive interfaces, and continuously striving to
                    deliver high-quality results..
                  </p>
                </div>

                <div className='details-grid'>
                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='250'
                  >
                    <i className='bi bi-briefcase'></i>
                    <div className='detail-content'>
                      <span>Experience</span>
                      <strong>2+ Years</strong>
                    </div>
                  </div>

                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='300'
                  >
                    <i className='bi bi-mortarboard'></i>
                    <div className='detail-content'>
                      <span>Degree</span>
                      <strong>Software Engineering</strong>
                    </div>
                  </div>

                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='350'
                  >
                    <i className='bi bi-geo-alt'></i>
                    <div className='detail-content'>
                      <span>Based In</span>
                      <strong>Kabul, Afghanistan</strong>
                    </div>
                  </div>

                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='100'
                  >
                    <i className='bi bi-envelope'></i>
                    <div className='detail-content'>
                      <span>Email</span>
                      <strong>esmatullah.wardak2020@gmail.com</strong>
                    </div>
                  </div>

                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='150'
                  >
                    <i className='bi bi-phone'></i>
                    <div className='detail-content'>
                      <span>Phone</span>
                      <strong>+93786368320</strong>
                    </div>
                  </div>

                  <div
                    className='detail-item'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    <i className='bi bi-calendar-check'></i>
                    <div className='detail-content'>
                      <span>Availability</span>
                      <strong>Open to Work</strong>
                    </div>
                  </div>
                </div>

                <div
                  className='skills-showcase'
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <div className='section-tag'>Core Skills</div>
                  <h3>Technical Proficiency</h3>

                  <div className='skills-list skills-animation'>
                    <div className='skill-item'>
                      <div className='skill-info'>
                        <span className='skill-name'>
                          JavaScript, React.js &amp; Next.js
                        </span>
                        <span className='skill-percent'>95%</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          aria-valuenow='95'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>

                    <div className='skill-item'>
                      <div className='skill-info'>
                        <span className='skill-name'>Nest.js</span>
                        <span className='skill-percent'>90%</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          aria-valuenow='90'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>

                    <div className='skill-item'>
                      <div className='skill-info'>
                        <span className='skill-name'>
                          MongoDB &amp; PostgreSQL
                        </span>
                        <span className='skill-percent'>85%</span>
                      </div>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          aria-valuenow='85'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
