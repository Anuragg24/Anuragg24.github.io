import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";


export const Contact = () => {
 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast.success("message sent!")
        setFormData({ name: "", email: "", phone:"",message: "" });
      })
      .catch(() => toast.error("something went wrong"));
  };
const handlePhoneChange = (e) => {
  const value = e.target.value;

  // Check if the value contains any non-digit characters
  if (/[^0-9]/.test(value)) {
    toast.error("Please enter numbers only"); // Display toast
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    setFormData({ ...formData, phone: numericValue });
  } else {
    setFormData({ ...formData, phone: value });
  }
};
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 bg-gradient-to-r from-[#6953ff] to-[#3a1ef0] bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6 border-blue-500/50 hover:border-blue-500/90
                      glass p-6 rounded-xl border dark:border-white/10  
              hover:-translate-y-1 
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all" onSubmit={handleSubmit}>
            <div className="relative ">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-gray/10 text-black dark:text-white border-blue-500/50 dark:bg-white/5 border dark:border-white/10 rounded px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-gray/10 text-black dark:text-white border-blue-500/50 dark:bg-white/5 border dark:border-white/10 rounded px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
             <input
  type="tel"
  id="phone"
  name="phone"
  required
  value={formData.phone}
  className="w-full bg-gray/10 text-black dark:text-white border-blue-500/50 dark:bg-white/5 border dark:border-white/10 rounded px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
  placeholder="9876543210"
  onChange={handlePhoneChange}
  maxLength={15}
/>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-gray/10 text-black dark:text-white border-blue-500/50 dark:bg-white/5 border dark:border-white/10 rounded px-4 py-3  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full dark:bg-blue-500 bg-[#3a1ef0] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
