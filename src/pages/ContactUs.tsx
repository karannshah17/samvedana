import React, { useState } from 'react';
import Header from '@/components/Header';
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send WhatsApp message with form data
    const phoneNumber = '+918200045035';
    const message = `Hi, I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
<div className="min-h-screen bg-background">
  <Header />

  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
      <p className="text-xl text-muted-foreground">We would love to hear from you. Send us a message or reach out directly.</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card space-y-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Send a Message</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
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
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
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
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="text-center">
        <div className="bg-card p-6 rounded-xl shadow-card space-y-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">Contact Information</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>📞 Phone: +91 82000 45035</p>
            <p>📧 Email: info@samvedananeurocare.in</p>
            <p>📍 Location: Specialized Neurological Care</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl overflow-hidden shadow-card">
          {/* Embed Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</div>

   );
};

export default ContactUs;
