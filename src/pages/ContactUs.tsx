
import React, { useState } from 'react';
import Header from '@/components/Header';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '+918200045035';
    const message = `Hi, I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#008E9E] mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We would love to hear from you. Send us a message or reach out directly.
          </p>
        </div>

        {/* Grid: Form + Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Send a Message Form */}
          <div className="h-full flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-xl shadow-card flex flex-col h-full"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Send a Message</h2>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition mt-4"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="h-full flex flex-col justify-between">
            <div className="bg-card p-8 rounded-xl shadow-card h-full flex flex-col justify-center space-y-6">
              
              {/* Heading with gradient underline */}
              <div className="text-center">
                <h3 className="text-[#01287E] text-2xl font-bold mb-2">Contact Information</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 text-lg text-muted-foreground">
                <a
                  href="tel:+918200045035"
                  className="w-full btn-medical block text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  📞 Call Now: +91 8200045035
                </a>

                <a
                  href="mailto:samvedananeuro@gmail.com"
                  className="w-full btn-medical block text-center bg-accent text-white px-4 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
                >
                  📧 Email: samvedananeuro@gmail.com
                </a>

                <div className="text-center font-semibold text-[#01287E]">
                  📍 Samvedana Neurocare<br/>
                  504, Anikedhya Capitol 2 Complex<br/>
                  Nr. Mahalaxi Cross road, Fatehpura, Paldi<br/>
                  Ahmedabad -380007
                </div>
              </div>
            </div>
          </div>

          {/* Map spanning both columns */}
          <div className="md:col-span-2 mt-8 rounded-xl overflow-hidden shadow-card">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3944926696463!2d72.55984417600777!3d23.00928331682269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85acd84a9047%3A0x5f61e835af322c7f!2sAnikedhya%20Capitol%202!5e0!3m2!1sen!2sde!4v1757370136333!5m2!1sen!2sde" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                     </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
