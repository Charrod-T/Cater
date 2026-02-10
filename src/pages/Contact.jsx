import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 254-7986",
      link: "tel:+5552547986",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@catering.com",
      link: "mailto:info@catering.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Culinary Street, Food City, FC 12345",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9AM-6PM",
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Begin your journey to an extraordinary celebration
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-neutral-200">
          <h2 className="text-4xl font-bold text-neutral-900 mb-3">Request a Quote</h2>
          <p className="text-neutral-600 mb-8">
            Share your vision and we'll create something exceptional together
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 254-7986"
                className="mt-2"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="50"
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Tell us about your event *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Describe your event, dietary requirements, preferences, etc."
                rows={5}
                className="mt-2"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full py-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all font-semibold"
            >
              Send Inquiry
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">Reach Out</h2>
          <div className="space-y-6 mb-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-3 group-hover:scale-110 transition-transform shadow-lg">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wider">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-neutral-600 hover:text-amber-600 transition-colors text-base"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-neutral-600 text-base leading-relaxed">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
            <div className="aspect-video bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 flex items-center justify-center">
              <MapPin className="h-20 w-20 text-amber-600" />
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-lg">
            <h3 className="font-semibold text-neutral-900 mb-3 text-lg">
              Prompt Response Guaranteed
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              We respond to all inquiries within 24 hours. For time-sensitive matters, please contact us by phone for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
