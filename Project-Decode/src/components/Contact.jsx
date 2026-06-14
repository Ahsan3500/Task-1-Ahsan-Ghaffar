import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.package || !formData.message) {
      setError('Please fill in all fields!')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" style={{
        padding: '80px 40px',
        backgroundColor: '#A0D4E0',
        textAlign: 'center',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '60px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ color: '#A5856F', fontSize: '2rem', marginBottom: '20px' }}>
            🎉 Message Sent!
          </h2>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            Thank you {formData.name}! We will contact you soon about your {formData.package} booking.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" style={{
      padding: '80px 40px',
      backgroundColor: '#A0D4E0',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#3a2e2e',
        marginBottom: '10px',
      }}>
        Get In Touch
      </h2>
      <p style={{
        color: '#3a2e2e',
        marginBottom: '50px',
        fontSize: '1rem',
      }}>
        Ready to plan your next adventure? Contact us today!
      </p>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '50px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}>

        {error && (
          <p style={{
            color: 'red',
            marginBottom: '20px',
            fontSize: '0.9rem',
          }}>
            ⚠️ {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />

        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
            color: '#555',
          }}
        >
          <option value="">Select a Package</option>
          <option value="Northern Areas Tour">Northern Areas Tour</option>
          <option value="Swat Valley Escape">Swat Valley Escape</option>
          <option value="Lahore Heritage Trip">Lahore Heritage Trip</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            boxSizing: 'border-box',
            resize: 'none',
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#A5856F',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Send Message
        </button>

      </div>
    </section>
  )
}

export default Contact