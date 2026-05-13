import React, { useState } from "react";

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    img: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    title: "Avatar",
    genre: "Adventure",
    img: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 5,
    title: "Joker",
    genre: "Drama",
    img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 6,
    title: "Avengers Endgame",
    genre: "Action",
    img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
];

export default function MovieBookingApp() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [bookingId, setBookingId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setBookingId(
      Math.random().toString(36).substr(2, 8).toUpperCase()
    );

    setPage(4);
  };

  const styles = {
    app: {
      background: "#0f172a",
      color: "#fff",
      minHeight: "100vh",
      padding: 25,
      fontFamily: "Arial, sans-serif",
    },

    title: {
      textAlign: "center",
      marginBottom: 40,
      fontSize: 42,
      fontWeight: "bold",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 25,
    },

    card: {
      background: "#1e293b",
      borderRadius: 15,
      overflow: "hidden",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
    },

    img: {
      width: "100%",
      height: 320,
      objectFit: "cover",
    },

    movieInfo: {
      padding: 15,
      textAlign: "center",
    },

    btn: {
      padding: "12px 22px",
      border: "none",
      borderRadius: 8,
      background: "#e11d48",
      color: "#fff",
      cursor: "pointer",
      marginTop: 15,
      fontWeight: "bold",
      fontSize: 15,
    },

    input: {
      width: "100%",
      padding: 14,
      margin: "12px 0",
      borderRadius: 8,
      border: "1px solid #334155",
      background: "#0f172a",
      color: "#fff",
      fontSize: 15,
      boxSizing: "border-box",
      outline: "none",
    },

    formBox: {
      maxWidth: 420,
      margin: "auto",
      background: "#1e293b",
      padding: 30,
      borderRadius: 15,
      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
    },
  };

  // HOME PAGE
  if (page === 1) {
    return (
      <div style={styles.app}>
        <h1 style={styles.title}>
          🍿 Ultimate Movie Hub
        </h1>

        <div style={styles.grid}>
          {MOVIES.map((movie) => (
            <div
              key={movie.id}
              style={styles.card}
              onClick={() => {
                setSelectedMovie(movie);
                setPage(2);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px) scale(1)";
              }}
            >
              <img
                src={movie.img}
                alt={movie.title}
                style={styles.img}
              />

              <div style={styles.movieInfo}>
                <h3 style={{ marginBottom: 5 }}>
                  {movie.title}
                </h3>

                <p style={{ color: "#cbd5e1" }}>
                  {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // MOVIE DETAILS PAGE
  if (page === 2) {
    return (
      <div style={styles.app}>
        <button
          style={{
            ...styles.btn,
            background: "#334155",
          }}
          onClick={() => setPage(1)}
        >
          ← Back
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: 30,
          }}
        >
          <img
            src={selectedMovie.img}
            alt={selectedMovie.title}
            style={{
              width: 320,
              borderRadius: 15,
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            }}
          />

          <h1 style={{ marginTop: 20 }}>
            {selectedMovie.title}
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: 18,
            }}
          >
            {selectedMovie.genre}
          </p>

          <button
            style={styles.btn}
            onClick={() => setPage(3)}
          >
            Book Seat
          </button>
        </div>
      </div>
    );
  }

  // BOOKING PAGE
  if (page === 3) {
    return (
      <div style={styles.app}>
        <button
          style={{
            ...styles.btn,
            background: "#334155",
            marginBottom: 20,
          }}
          onClick={() => setPage(2)}
        >
          ← Back
        </button>

        <div style={styles.formBox}>
          <h2 style={{ marginBottom: 20 }}>
            🎟️ Booking Form
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              style={styles.input}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              required
              style={styles.input}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              required
              style={styles.input}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value,
                })
              }
            />

            <button
              type="submit"
              style={{
                ...styles.btn,
                width: "100%",
              }}
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    );
  }

  // CONFIRMATION PAGE
  return (
    <div style={styles.app}>
      <div
        style={{
          maxWidth: 500,
          margin: "auto",
          textAlign: "center",
          background: "#1e293b",
          padding: 35,
          borderRadius: 15,
          boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ color: "#4ade80" }}>
          ✅ Booking Confirmed
        </h1>

        <h2 style={{ marginTop: 15 }}>
          ID: {bookingId}
        </h2>

        <div
          style={{
            marginTop: 25,
            textAlign: "left",
            lineHeight: 2,
            color: "#e2e8f0",
          }}
        >
          <p>
            <strong>Movie:</strong>{" "}
            {selectedMovie.title}
          </p>

          <p>
            <strong>Name:</strong>{" "}
            {formData.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {formData.mobile}
          </p>
        </div>

        <button
          style={styles.btn}
          onClick={() => setPage(1)}
        >
          Back Home
        </button>
      </div>
    </div>
  );
}