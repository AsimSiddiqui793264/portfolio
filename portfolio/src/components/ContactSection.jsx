import Arrow from './Arrow.jsx'

const contactEmail = 'asimsiddiqui@gmail.com'
const whatsappNumber = '03145594446'

function ContactSection() {
  function sendEmail(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner" data-reveal>
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="eyebrow"><span className="asterisk">✳</span> HAVE A GOOD ONE IN MIND?</p>
            <h2>Let&apos;s make<br /><em>something matter.</em></h2>
            <p className="contact-copy">
              Have a project or opportunity in mind? Send me a message and
              I&apos;ll get back to you.
            </p>
            <div className="contact-methods">
              <a className="contact-method" href={`mailto:${contactEmail}`}>
                <span>Email</span>
                <strong>{contactEmail}</strong>
              </a>
              <a
                className="contact-method"
                href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : '#contact-form'}
                target={whatsappNumber ? '_blank' : undefined}
                rel={whatsappNumber ? 'noreferrer' : undefined}
              >
                <span>WhatsApp</span>
                <strong>{whatsappNumber || 'Add your number in ContactSection.jsx'}</strong>
              </a>
            </div>
          </div>
          <form className="contact-form" id="contact-form" onSubmit={sendEmail}>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="contact-message">How can I help?</label>
            <textarea id="contact-message" name="message" rows="5" required />

            <button className="button button-contact" type="submit">
              Open email draft <Arrow diagonal />
            </button>
            <p className="contact-form-note">
              Your email app will open with your message filled in. Review it and press Send there.
            </p>
          </form>
        </div>
        <div className="contact-bottom">
          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
