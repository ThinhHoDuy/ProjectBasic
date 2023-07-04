import { useState,useRef,useEffect } from 'react'


function About() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const ref = useRef()
  useEffect(() => {
    ref.current.focus()
  },[])

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
        ref={ref}
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
