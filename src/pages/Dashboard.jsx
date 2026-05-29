import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Dashboard() {
  const [bmi] = useState(
    () => localStorage.getItem("bmi") || "Not Calculated"
  );

  return (
    <>
      <Navbar />

      <section className="section">
        <h2 className="section-title">
          Fitness Dashboard
        </h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h2>{bmi}</h2>
            <p>Your Latest BMI</p>
          </div>

          <div className="dashboard-card">
            <h2>2200</h2>
            <p>Daily Calorie Goal</p>
          </div>

          <div className="dashboard-card">
            <h2>12</h2>
            <p>Workouts Completed</p>
          </div>

          <div className="dashboard-card">
            <h2>3L</h2>
            <p>Water Intake Goal</p>
          </div>

        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <div className="card">
            <div className="card-content">
              <h3>Weekly Progress</h3>

              <p>
                ✔ Strength Workouts:
                4  Completed 
              </p>

              <p>
                ✔ Cardio Sessions:
                3 Completed
              </p>

              <p>
                ✔ Calories Tracked:
                7 Days
              </p>

              <p>
                ✔ Goal Completion:
                85%
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;