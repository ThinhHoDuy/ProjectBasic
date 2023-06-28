import { useState } from 'react'


function About() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      return newJobs
    })
    setJob('')
  }
 
  return (
    <div className="List" style={{ padding: 30 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default About;
