const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'HTML & CSS',
  'Responsive design',
  'Git & GitHub',
  'Figma',
  'Accessibility',
  'Problem solving',
]

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap about-layout">
        <div className="about-heading" data-reveal="left">
          <p className="eyebrow"><span className="asterisk">✳</span> MORE THAN JUST THE CODE</p>
          <h2>Curiosity is<br />part of the<br /><em>process.</em></h2>
          <span className="about-spark" aria-hidden="true">✳</span>
        </div>
        <div className="about-copy" data-reveal="right">
          <p className="about-lead">
            Good digital work starts with understanding the people it&apos;s for.
          </p>
          <p>
            I enjoy taking a fuzzy challenge, asking better questions, and
            making the answer feel simple. I bring design and development
            together to create websites that are easy to use, work on every
            screen, and feel considered down to the last detail.
          </p>
          <p>
            I&apos;m always learning, happy to collaborate, and excited to
            contribute to a team that cares about doing good work together.
          </p>
          <div className="skills-block">
            <p className="eyebrow">MY TOOLKIT</p>
            <div className="skill-list">
              {skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
