const packages = [
  {
    id: 1,
    title: "Northern Areas Tour",
    description: "Explore the breathtaking beauty of Hunza, Gilgit and Skardu.",
    duration: "7 Days / 6 Nights",
    price: "PKR 45,000",
  },
  {
    id: 2,
    title: "Swat Valley Escape",
    description: "Experience the lush green valleys and waterfalls of Swat.",
    duration: "4 Days / 3 Nights",
    price: "PKR 25,000",
  },
  {
    id: 3,
    title: "Lahore Heritage Trip",
    description: "Discover the rich culture, food and history of Lahore.",
    duration: "3 Days / 2 Nights",
    price: "PKR 15,000",
  },
]

function Packages() {
  return (
    <section id="packages" style={{
      padding: '80px 40px',
      backgroundColor: '#F2F0EA',
      textAlign: 'center',
    }}>

      {/* Section Heading */}
      <h2 style={{
        fontSize: '2.5rem',
        color: '#3a2e2e',
        marginBottom: '10px',
      }}>
        Our Packages
      </h2>
      <p style={{
        color: '#777',
        marginBottom: '50px',
        fontSize: '1rem',
      }}>
        Handpicked local tours just for you
      </p>

      {/* Cards */}
      <div className="packages-grid" style={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card" style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            width: '280px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'left',
          }}>
            <h3 style={{
              color: '#A5856F',
              marginBottom: '10px',
              fontSize: '1.2rem',
            }}>
              {pkg.title}
            </h3>
            <p style={{
              color: '#555',
              marginBottom: '15px',
              fontSize: '0.95rem',
            }}>
              {pkg.description}
            </p>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>⏱ {pkg.duration}</p>
            <p style={{
              color: '#A5856F',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              marginTop: '10px',
            }}>
              {pkg.price}
            </p>
            <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              marginTop: '20px',
              backgroundColor: '#A5856F',
              color: 'white',
              padding: '10px 25px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              width: '100%',
            }}>
              Book Now
            </button>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Packages