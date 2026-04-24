export default function (){
    return (
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
    );
}