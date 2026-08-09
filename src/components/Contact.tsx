// useState is a React Hook used to store and update component state.
//  State change hone par React component ko dobara render karta hai.
import { useState } from "react";

// EmailJS library import.Iska use backend/server banaye baghair email send karne ke liye ho raha hai.
import emailjs from "@emailjs/browser";

// Functional Component, React component basically ek reusable function hota hai jo JSX return karta hai.
function Contact() {

  // useState(""),useState initial value "" rakhta hai.
  // name -> current state value, setName-> name state update karne wala function
  // User input type karega to setName() state ko update karega.
  const [name, setName] = useState("");

  // Email field ki state.
  const [email, setEmail] = useState("");

  // Message textarea ki state.
  const [message, setMessage] = useState("");

  // submitted state success message ko control karti hai.
  // false  -> success message hidden
  // true   -> success message visible
  const [submitted, setSubmitted] = useState(false);


  // async function ke andar hum await use kar sakte hain.
  // EmailJS se response aane mein time lag sakta hai,isliye email sending asynchronous operation hai.
  async function handleSubmit(event: React.FormEvent) {

    // Form ka default browser behavior normally page reload karna hota hai.
    // preventDefault() page reload ko rokta hai,taake React khud form submission handle kare.
    event.preventDefault();

    // try/catch,try ke andar woh code hota hai jahan error aa sakta hai.
    // Agar EmailJS request fail ho jaye to catch execute hoga.
    try {

      // await, EmailJS ke response ka wait karta hai.
      // await ki wajah se next code tab execute hoga jab email sending request complete ho jaye.
      await emailjs.send(

        // Service ID,EmailJS dashboard mein banayi hui email service ko identify karta hai.
        "service_jhyxkg8",

        // Template ID,EmailJS ke email template ko identify karta hai.
        "template_gzy3pia",

        // Template parameters, Ye object EmailJS template ko actual user data provide karta hai.
        {
          name: name,
          email: email,
          message: message,
        },

        // EmailJS configuration object.
        // publicKey EmailJS ko identify/authenticate karne ke liye use hoti hai.
        {
          publicKey: "d1b2ss8afVnnujTRt",
        }
      );

      // Email successfully send ho jaye to submitted ko true kar dete hain.
      // true hone ke baad neeche conditional rendering success message display karegi.
      setSubmitted(true);

      // Successful submission ke baad form fields clear karna.
      setName("");
      setEmail("");
      setMessage("");

      // setTimeout(),JS built-in function hai.Ye given time ke baad function execute karta hai.
      //5000 milliseconds = 5 seconds,5 seconds baad success message hide ho jayega.
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);


    } catch (error) {

      // Agar EmailJS request fail ho jaye, error catch block mein aa jata hai.
      // console.error() developer ko browser console mein error details dekhne deta hai.
      console.error("Email sending failed:", error);
    }
  }

  // JSX, JS ke andar HTML jaisi syntax likhne deta hai.
  // className React mein CSS classes ke liye use hota hai.
  return (
    <section id="contact" className="contact">


      {/* Contact section ka heading/content */}
      <div className="contact-heading">

        {/* Reusable CSS class */}
        <p className="section-subtitle">
          Get In Touch
        </p>
        <h2>Contact Me</h2>
        <p>
          Have a project or opportunity? Feel free to
          get in touch with me.
        </p>
      </div>
      {/* 
        HTML form
        onSubmit React event handler hai.
        Form submit hone par handleSubmit function execute hoga.
      */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
         {/* NAME FIELD */}

        <div className="form-group">

          {/* 
            htmlFor="name" label ko input ke id="name" se connect karta hai.
            Ye accessibility ke liye important hai.
          */}
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            // Controlled Input,React state input ki current value ko control kar rahi hai.
            value={name}

            // onChange har baar run hota hai jab user input change karta hai.
            // event.target.value: input ke andar currently entered text deta hai.
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Enter your name"

            // required browser ko batata hai ke field empty nahi honi chahiye.
            required
          />
        </div>
        {/*  EMAIL FIELD */}
        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input
            id="email"
            // type="email",Browser ko batata hai ke ye email field hai.
            // Basic email validation browser automatically perform karta hai.
            type="email"

            // Controlled input
            value={email}

            // User ki typing ko React state mein save karta hai.
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            // Empty field ko prevent karta hai.
            required
          />
        </div>
        {/*MESSAGE FIELD*/}
        <div className="form-group">
          <label htmlFor="message">
            Message
          </label>
          {/* textarea multi-line text input ke liye use hota hai*/}
          <textarea
            id="message"
            value={message}
            // User ke message ko state mein update karta hai.
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder="Write your message"
            // Initial visible height.
            rows={6}
            required
          />
        </div>
        {/* type="submit",button ko form submit button banata hai.Form submit hone par:
          onSubmit -> handleSubmit() */}
        <button
          type="submit"
          className="btn"
        >
          Send Message
        </button>
      </form>
      {/* Conditional Rendering {submitted && (...)}
        Agar submitted === true:success message show hoga.
        Agar submitted === false:kuch render nahi hoga.
        Ye React mein logical AND (&&) conditional rendering ka common pattern hai.
      */}
      {submitted && (
        <p className="success-message">
          Thank you! Your message has been sent successfully. 😊
        </p>
      )}

    </section>
  );
}
export default Contact;
