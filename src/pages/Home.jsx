import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Train Smarter. Live Stronger.</h1>

        <p>
          Achieve your fitness goals with personalized workouts,
          nutrition guidance, and progress tracking.
        </p>

        <div className="hero-buttons">
          <Link to="/workouts">
            <button className="primary-btn">
              Explore Workouts
            </button>
          </Link>

          <Link to="/nutrition">
            <button className="secondary-btn">
              Nutrition Plans
            </button>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <h2 className="section-title">
          Our Impact
        </h2>

        <div className="stats">
          <div className="stat-card">
            <h2>15K+</h2>
            <p>Active Members</p>
          </div>

          <div className="stat-card">
            <h2>500+</h2>
            <p>Workout Programs</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="section">
        <h2 className="section-title">
          Featured Programs
        </h2>

        <div className="cards-grid">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Strength"
            />

            <div className="card-content">
              <h3>Strength Training</h3>

              <p>
                Build muscle and increase overall body strength.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Cardio"
            />

            <div className="card-content">
              <h3>Cardio Fitness</h3>

              <p>
                Improve endurance and burn calories efficiently.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
              alt="Yoga"
            />

            <div className="card-content">
              <h3>Yoga & Flexibility</h3>

              <p>
                Increase flexibility and improve mental focus.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <h2 className="section-title">
          Why Choose FitLife?
        </h2>

        <div className="cards-grid">

          <div className="card">
            <div className="card-content">
              <h3>Expert Guidance</h3>

              <p>
                Professionally designed programs for all fitness levels.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Nutrition Support</h3>

              <p>
                Healthy eating plans tailored to your goals.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Progress Tracking</h3>

              <p>
                Monitor your improvements and stay motivated.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2 className="section-title">
          Success Stories
        </h2>

        <div className="cards-grid">

          <div className="card">
            <div className="card-content">
              <h3>Sarah M.</h3>

              <p>
                "I lost 12 kg in 5 months using FitLife's
                workout and nutrition plans."
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>John D.</h3>

              <p>
                "The dashboard helped me stay consistent and
                track my progress."
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Emily R.</h3>

              <p>
                "The best fitness platform I've used.
                Easy and motivating."
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;