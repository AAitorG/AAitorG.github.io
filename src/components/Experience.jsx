import { experience } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const [ref, visible] = useReveal()
  return (
    <section className="section" id="experience" ref={ref}>
      <h2 className={`section-title ${visible ? 'in' : ''}`}>
        <span className="title-index">02.</span> {experience.heading}
      </h2>
      <div className={`section-body ${visible ? 'in' : ''}`}>
        <div className="jobs">
          {experience.jobs.map((job) => (
            <div className="job" key={job.title + job.range}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-range">{job.range}</p>
              <ul className="job-points">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}