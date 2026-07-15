// Ported from Brittany Chiang's v4 `Jobs` component
// (https://github.com/bchiang7/v4). Tabbed interface with company tabs
// on the left and job details on the right.

import { useState } from 'react'
import { jobs } from '../config'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="jobs" id="experience">
      <h2 className="numbered-heading">{jobs.heading}</h2>
      <div className="inner">
        <div className="tab-list" role="tablist" aria-label="Job tabs">
          {jobs.items.map((job, i) => (
            <button
              key={i}
              className={`tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              role="tab"
              tabIndex={activeTab === i ? '0' : '-1'}
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div className="tab-highlight" style={{ '--active-tab': activeTab }} />
        </div>

        <div className="tab-panels">
          {jobs.items.map((job, i) => (
            <div
              key={i}
              className="tab-panel"
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={activeTab === i ? '0' : '-1'}
              aria-labelledby={`tab-${i}`}
              hidden={activeTab !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  {' @ '}
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="company-link">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <p className="range">{job.range}</p>
              <ul>
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}