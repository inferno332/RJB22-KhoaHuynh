import React, {useState} from 'react'

export default function TodoList() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
      const storageJobs = JSON.parse(localStorage.getItem("jobs"));
      return storageJobs ?? [];
    });
    console.log(job);
    console.log(jobs);
    const handleSubmit = () => {
      setJobs((prev) => {
        const newJobs = [...prev, job];
  
        // Save to local Storage
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem("jobs", jsonJobs);
        return newJobs;
      });
      // Clear input
      setJob("");
    };
    return (
      <div style={{ padding: 30 }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>
  
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    );
}
