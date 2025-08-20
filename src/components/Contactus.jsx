import React, { useState } from 'react';
import Footer from './Footer';
const Contactus = () => {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://sheetdb.io/api/v1/71cpi0sa3skan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: form }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setForm({ Name: '', Email: '', Phone: '', Message: '' });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <>
    <div className="max-w-md p-4 mx-auto my-20 bg-white rounded shadow">
      <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 mb-3 border"
          type="text"
          name="Name"
          placeholder="Your Name"
          value={form.Name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-3 border"
          type="email"
          name="Email"
          placeholder="Your Email"
          value={form.Email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-3 border"
          type="tel"
          name="Phone"
          placeholder="Your Phone"
          value={form.Phone}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full p-2 mb-3 border"
          name="Message"
          placeholder="Your Message"
          value={form.Message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded"
        >
          Submit
        </button>
      </form>

    </div>

      {/* <Footer/> */}

    </>
  );
};

export default Contactus;
