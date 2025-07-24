import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Basic email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!isValidEmail) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Piyush",
          from_email: form.email,
          to_email: "piyushkaushal101@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      {/* Toast Notifications */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Info Section */}
<div className="mt-10 space-y-6 text-white">
  {/* Email */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-envelope text-[#915EFF] text-xl"></i>
    <span className="text-lg">priyusho62022@gmail.com</span>
  </div>

  {/* Phone */}
  <div className="flex items-center space-x-4">
    <i className="fas fa-phone text-[#915EFF] text-xl"></i>
    <span className="text-lg">7082852764</span>
  </div>

  {/* Social Icons */}
  <div className="flex space-x-6 text-2xl mt-4">
    <a href="https://www.linkedin.com/in/piyush-kaushal-98ab12276" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin text-[#915EFF] hover:text-white"></i>
    </a>
    <a href="https://github.com/Piyush2Kaushal" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github text-[#915EFF] hover:text-white"></i>
    </a>
    <a href="https://www.instagram.com/piyushkaushal02/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram text-[#915EFF] hover:text-white"></i>
    </a>
  </div>

  {/* Resume Button */}
  <div className="mt-6">
    <a
      href="public/Piyush-Kaushal_resume.pdf" 
      download
      className="bg-[#915EFF] hover:bg-[#7e4ee3] text-white font-semibold py-3 px-6 rounded-lg"
    >
      Download My Resume
    </a>
  </div>
</div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        
      </motion.div>

      <motion.div
  variants={slideIn("right", "tween", 0.2, 1)}
  className="w-full md:w-[350px] xl:w-[450px] h-[450px] md:h-[550px] z-12"
>
  <EarthCanvas />
  
</motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, "contact");
