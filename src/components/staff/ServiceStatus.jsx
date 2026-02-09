//Component to update and display current service status progress

import { useState } from "react";
import "../../styles/ServiceStatus.css";


export default function ServiceStatus() {
  const steps = ["queued", "assigned", "medication", "completed"];

  const [services, setServices] = useState([
    { id: 1, status: "queued", name: "Medicine Delivery", patient: "Ravi" },
    { id: 2, status: "assigned", name: "Injection", patient: "Sita" },
    { id: 3, status: "medication", name: "Lab Test", patient: "Anil" },
  ]);

  const moveNext = (id) => {
    setServices((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const nextIndex = steps.indexOf(s.status) + 1;
        return { ...s, status: steps[nextIndex] || "completed" };
      })
    );
  };

  return (
    <div className="service-container">
      <h2>Service Status</h2>

      {services.map((service) => {
        const currentIndex = steps.indexOf(service.status);

        return (
          <div key={service.id} className="service-card">

            {/* DETAILS */}
            <div className="service-info">
              <p><b>Service ID:</b> {service.id}</p>
              <p><b>Service Name:</b> {service.name}</p>
              <p><b>Patient Name:</b> {service.patient}</p>
              <p><b>Current Status:</b> {service.status}</p>
            </div>

            {/* STEPPER */}
            <div className="stepper">
              {steps.map((step, index) => (
                <div key={index} className="step">
                  <div className={`circle ${index <= currentIndex ? "active" : ""}`}>
                    {index + 1}
                  </div>
                  <div className="label">{step}</div>

                  {index < steps.length - 1 && (
                    <div className={`line ${index < currentIndex ? "active" : ""}`} />
                  )}
                </div>
              ))}
            </div>

            {service.status !== "completed" && (
              <button className="done-btn" onClick={() => moveNext(service.id)}>
                Mark as Done
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}


