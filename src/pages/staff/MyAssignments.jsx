// Detailed view of all staff assignments


import "../../styles/MyAssessment.css";

export default function MyAssessment() {
  // Sample data (for UI testing)
  const assessments = [
    {
      id: 1,
      patient: "Ravi",
      service: "Medicine Delivery",
      status: "pending",
      date: "10 Feb 2026"
    },
    {
      id: 2,
      patient: "Sita",
      service: "Injection",
      status: "assigned",
      date: "11 Feb 2026"
    },
    {
      id: 3,
      patient: "Anil",
      service: "Lab Test",
      status: "completed",
      date: "12 Feb 2026"
    }
  ];

  return (
    <div className="assessment-container">
      <h2>My Assessments</h2>

      {assessments.map((item) => (
        <div key={item.id} className="assessment-card">
          <div className="assessment-row">
            <span className="label">Patient</span>
            <span>{item.patient}</span>
          </div>

          <div className="assessment-row">
            <span className="label">Service</span>
            <span>{item.service}</span>
          </div>

          <div className="assessment-row">
            <span className="label">Date</span>
            <span>{item.date}</span>
          </div>

          <div className="assessment-row">
            <span className="label">Status</span>
            <span className={`status ${item.status}`}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

