import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = `Hello Mountain Top Suites and Apartments,%0A%0A` +
      `Name: ${formData.fullName}%0A` +
      `Email: ${formData.email}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}%0A%0A` +
      `I would like to inquire about your services.`;

    window.open(`https://wa.me/2348067120227?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 scroll-animate">
          <div className="deco-line-center mb-6"></div>
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase font-medium mb-4 font-accent">Get In Touch</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Contact & Location</h2>
          <p className="text-navy-500 max-w-xl mx-auto font-body">We are here to help you plan your perfect stay. Reach out to us through any of the channels below.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-animate">
            <div className="bg-white rounded-2xl shadow-lg border border-navy-100/50 p-8 mb-8">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?" 
                    className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm font-body"
                    required
                  />
                </div>
                <div>
                  <label className="block text-navy-700 text-sm font-medium mb-2 font-body">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..." 
                    className="input-luxury w-full bg-navy-50 text-navy-900 rounded-xl py-3 px-4 text-sm resize-none font-body"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="btn-primary w-full bg-navy-900 hover:bg-navy-800 text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  Send via WhatsApp<i className="fab fa-whatsapp ml-2 text-lg"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 scroll-animate">
            <div className="bg-white rounded-2xl shadow-lg border border-navy-100/50 p-8">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-gold-600"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm font-body">Address</p>
                    <p className="text-navy-500 text-sm mt-1 font-body">Grammar School Bus Stop, 16/23 Olaleke Taiwo St, off Aina Rd, Ojodu, Lagos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-gold-600"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm font-body">Phone</p>
                    <p className="text-navy-500 text-sm mt-1 font-body">+234 806 712 0227</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-gold-600"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm font-body">Email</p>
                    <p className="text-navy-500 text-sm mt-1 font-body">info@mountaintop.com</p>
                    <p className="text-navy-500 text-sm mt-1 font-body">mountaintoplagos@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-gold-600"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm font-body">WhatsApp</p>
                    <a 
                      href="https://wa.me/2348067120227" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold-500 text-sm mt-1 hover:text-gold-600 transition inline-flex items-center gap-1 font-body"
                    >
                      Chat with us<i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-100">
                <p className="text-navy-900 font-semibold text-sm mb-4 font-body">Follow Us</p>
                <div className="flex gap-3">
                  {['instagram', 'facebook-f', 'twitter'].map((icon) => (
                    <a 
                      key={icon}
                      href={`https://${icon.replace('-f', 'book')}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center text-navy-600 hover:bg-gold-400 hover:text-navy-900 transition"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-navy-100/50 overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1!2d3.35!3d6.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzknMDAuMCJOIDPCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mountain Top Suites and Apartments Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
