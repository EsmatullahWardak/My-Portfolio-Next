"use client"
function MainContent() { 
    return (
    <>
     <main className="main">
     <section id="hero" className="hero section dark-background">

      <img src="/assets/img/my-photo/esmat-bg-cut.jpg" alt="Hero Background" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center items-center justify-center text-center">
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
     </main>
    </>
    )
}
export default MainContent