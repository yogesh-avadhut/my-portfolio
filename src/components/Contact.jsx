import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Email is invalid';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert(`Thank you, ${form.name}! Your message has been sent.`);
      setForm({ name: '', email: '', message: '' });
    } else {
      setErrors(errs);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">📬 Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><MdLocationOn className="icon" /> Pune, Maharashtra, India</p>
          <p><MdPhone className="icon" /> +91 84213 13738</p>
          <p><MdEmail className="icon" /> dev.yogeshavadhut@gmail.com</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <small className="errorMsg">{errors.name}</small>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <small className="errorMsg">{errors.email}</small>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <small className="errorMsg">{errors.message}</small>}
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
