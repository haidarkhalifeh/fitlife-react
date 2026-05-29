import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Workouts() {
  const workouts = [
    {
      name: "Push Ups",
      category: "Strength",
      duration: "15 min",
      calories: "120",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
    },

    {
      name: "Running",
      category: "Cardio",
      duration: "30 min",
      calories: "350",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
    },

    {
      name: "Cycling",
      category: "Cardio",
      duration: "40 min",
      calories: "450",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    },

    {
      name: "Squats",
      category: "Strength",
      duration: "20 min",
      calories: "180",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    },

    {
      name: "Yoga",
      category: "Flexibility",
      duration: "25 min",
      calories: "100",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    },

    {
      name: "Plank",
      category: "Strength",
      duration: "10 min",
      calories: "90",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      workout.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="section">
        <h2 className="section-title">
          Workout Library
        </h2>

        <div className="form-container">

          <input
            type="text"
            placeholder="Search workouts..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>All</option>
            <option>Strength</option>
            <option>Cardio</option>
            <option>Flexibility</option>
          </select>

        </div>

        <div className="cards-grid">
          {filteredWorkouts.map((workout, index) => (
            <div
              className="card"
              key={index}
            >
              <img
                src={workout.image}
                alt={workout.name}
              />

              <div className="card-content">
                <h3>{workout.name}</h3>

                <p>
                  <strong>Category:</strong>{" "}
                  {workout.category}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {workout.duration}
                </p>

                <p>
                  <strong>Calories:</strong>{" "}
                  {workout.calories}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Workouts;