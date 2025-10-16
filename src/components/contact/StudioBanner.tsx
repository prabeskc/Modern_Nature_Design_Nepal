import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container.tsx';

interface FormData {
  name: string;
  address: string;
  email: string;
  contact: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
}

export default function StudioBanner() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    email: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name: alphabets only
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name can contain only alphabets';
    }

    // Email must include '@'
    if (!formData.email.includes('@')) {
      newErrors.email = "Email must include '@'";
    }

    // Contact: numbers only
    if (!/^\d+$/.test(formData.contact)) {
      newErrors.contact = 'Contact must contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', address: '', email: '', contact: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="py-16 lg:py-24 bg-gradient-to-br from-sage-green/10 to-mint-green/10"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div
            className={`bg-white rounded-lg shadow-lg p-8 lg:p-12 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-charcoal mb-6 text-center">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block mb-1 text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <label htmlFor="contact" className="block mb-1 text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.contact ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-mint-green text-charcoal px-6 py-3 rounded-lg font-medium hover:bg-mint-green/90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column: Visit Us Card */}
          <div
            className={`bg-off-white rounded-lg p-8 lg:p-12 shadow-lg transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0 shadow-xl' : 'opacity-0 translate-x-8 shadow-lg'
            }`}
            style={{
              transitionDelay: isVisible ? '300ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <div className="mb-6">
              <span
                className={`inline-block text-sm font-medium text-mint-green uppercase tracking-wide mb-2 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Our Studio
              </span>
              <h2
                className={`font-serif text-3xl lg:text-4xl font-medium text-charcoal mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Visit Us
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p
                className={`text-charcoal/70 leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Experience our handcrafted rugs in person at our showroom in the heart of Kathmandu. 
                Meet our artisans, learn about our processes, and discover the perfect rug for your space.
              </p>

              <div className="space-y-4">
                <div
                  className={`transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  <h4 className="font-medium text-charcoal mb-2">Showroom Hours</h4>
                  <p className="text-charcoal/70">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>

                <div
                  className={`transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  <h4 className="font-medium text-charcoal mb-2">Location</h4>
                  <p className="text-charcoal/70">
                    Thamel District, Kathmandu<br />
                    Nepal
                  </p>
                </div>

                <div
                  className={`transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                >
                  <h4 className="font-medium text-charcoal mb-2">Contact</h4>
                  <p className="text-charcoal/70">
                    +977-1-4123456<br />
                    hello@modernnaturedesignnepal.com
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('footer')}
              className={`bg-mint-green text-charcoal px-8 py-4 rounded-lg font-medium hover:bg-mint-green/90 transition-all duration-600 w-full sm:w-auto ${
                isVisible ? 'opacity-100 translate-y-0 shadow-md hover:shadow-lg' : 'opacity-0 translate-y-4 shadow-sm'
              }`}
              style={{
                transitionDelay: isVisible ? '1100ms' : '0ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              Find a showroom
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
