import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    number: '01',
    name: 'Social App',
    type: 'FULL-STACK · LIVE PROJECT',
    description:
      'A full-stack social app with JWT-secured accounts, post CRUD, likes, comments, and Cloudinary image uploads.',
    tags: ['JWT authentication', 'CRUD', 'Cloudinary'],
    theme: 'northstar',
    preview: 'https://social-app-frontend-seven-tau.vercel.app/',
    href: 'https://social-app-frontend-seven-tau.vercel.app/',
  },
  {
    number: '02',
    name: 'Pakistan Railways',
    type: 'FRONTEND UI · LIVE PROJECT',
    description:
      'A frontend-only railway portal with express-train cards, passenger sign-in, and registration screens.',
    tags: ['UI design', 'Responsive web', 'Frontend'],
    theme: 'goodfolk',
    preview: 'https://pak-railways-ui.vercel.app/index.html',
    href: 'https://pak-railways-ui.vercel.app/index.html',
  },
  {
    number: '03',
    name: 'Chai & Co. Cafe',
    type: 'FRONTEND UI · LIVE PROJECT',
    description:
      'A frontend-only cafe website with warm branding, responsive navigation, and a gallery page with visual placeholders.',
    tags: ['HTML & CSS', 'Responsive web', 'UI design'],
    theme: 'fieldnotes',
    preview: 'https://chai-and-co-cafe-website.vercel.app/',
    href: 'https://chai-and-co-cafe-website.vercel.app/',
  },
]

function ProjectsSection() {
  return (
    <section className="work-section section-wrap section-pad" id="work">
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow"><span className="asterisk">✳</span> A FEW THINGS I&apos;VE MADE</p>
          <h2>Selected <em>work.</em></h2>
        </div>
        <p className="section-aside">
          Thoughtful ideas, shaped into useful<br className="desktop-break" /> digital experiences.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-reveal"
            data-reveal={index % 2 === 0 ? 'left' : 'right'}
            key={project.number}
            style={{ '--reveal-delay': `${index * 110}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
