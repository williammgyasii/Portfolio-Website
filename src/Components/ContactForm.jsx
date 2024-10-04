import React, { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "../Firebase/getFirebase";

const ContactForm = () => {
  // Single state object to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Function to update input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Dynamically update the field based on name
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sendEmail = httpsCallable(getFirebaseFunctions, "sendContactEmail");

    try {
      const result = await sendEmail(formData);
      if (result.data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : submitted ? (
            <span className="text-green-500 font-semibold animate-pulse">
              Message Sent!
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
