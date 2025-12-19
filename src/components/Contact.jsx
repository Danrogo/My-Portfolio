import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import github from '../../public/assets/socials/github.png';
import linkedin from '../../public/assets/socials/linkedin.png';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,  
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <hr />
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex mx-3">
            <a href="https://github.com/Danrogo" target="_blank" rel="noreferrer">
              <img src={github} alt="" />
            </a>
            <a className="" href="www.linkedin.com/in/daniel-cherogony-165705382" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded required" />
            <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3 required" />
            <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2 required" placeholder="Message:"></textarea>
            <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
              Send
              {done && <p>Thank you for your message! I will get in touch soon</p>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
