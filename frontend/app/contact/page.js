"use client";
import Header from "../../components/Header";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission to backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-[#800000] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    Have questions about our resume analysis service? We're here
                    to help! Fill out the form and we'll get back to you as soon
                    as possible.
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Email:</span>
                      support@resumeanalyzer.com
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold mr-2">Hours:</span>
                      Monday - Friday, 9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#808000] hover:bg-[#6B6B00] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
