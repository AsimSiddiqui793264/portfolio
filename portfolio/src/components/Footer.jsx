import mypic from '../assets/mypic.jpeg'

function Footer() {
  return (
    <footer className="site-footer section-wrap" data-reveal>
      <a className="brand footer-brand" href="#home" aria-label="Asim Siddiqui, back to home">
        <span className="brand-mark">
          <img src={mypic} alt="" />
        </span>
        <span>Asim Siddiqui</span>
      </a>
      <p>© 2026 ASIM SIDDIQUI. ALL RIGHTS RESERVED.</p>
      <a className="back-top" href="#home">BACK TO TOP ↑</a>
    </footer>
  )
}

export default Footer
