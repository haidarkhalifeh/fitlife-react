import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Nutrition() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");

  const [bmi, setBmi] = useState(null);
  const [calories, setCalories] = useState(null);

  const calculateBMI = () => {
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);

    setBmi(result);

    localStorage.setItem("bmi", result);
  };

  const calculateCalories = () => {
    let result;

    if (gender === "male") {
      result = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      result = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setCalories(Math.round(result));
  };

  return (
    <>
      <Navbar />

      <section className="section">
        <h2 className="section-title">
          Nutrition Tools
        </h2>

        <div className="cards-grid">

          <div className="card">
            <div className="card-content">
              <h3>BMI Calculator</h3>

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) =>
                  setWeight(e.target.value)
                }
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) =>
                  setHeight(e.target.value)
                }
              />

              <button
                className="primary-btn"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>

              {bmi && (
                <h3 style={{ marginTop: "15px" }}>
                  BMI: {bmi}
                </h3>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Daily Calories</h3>

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                  setAge(e.target.value)
                }
              />

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
              >
                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>
              </select>

              <button
                className="primary-btn"
                onClick={calculateCalories}
              >
                Calculate Calories
              </button>

              {calories && (
                <h3 style={{ marginTop: "15px" }}>
                  {calories} kcal/day
                </h3>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Nutrition;