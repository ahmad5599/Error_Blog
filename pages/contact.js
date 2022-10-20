import { React, useState } from "react";
import Contact from "../styles/Contact.module.css";
import Head from "next/head";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(name, phone, email, desc);
    const data = { name, phone, email, desc };
    if (name != "" && phone != "" && email != "" && desc != "") {
      fetch("http://localhost:3000/api/addcontact/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("Success:", data);
          alert("Form submitted");
          setDesc("");
          setName("");
          setPhone("");
          setEmail("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill all the fields");
    }
  }
  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
    console.log(e, " change");
  }
  return (
    <div className={Contact.container}>
      <Head>
        <title>Contact</title>
      </Head>

      <main className={Contact.main}>
        <h1 className={Contact.title}>Contact Me</h1>
        <form className={Contact.form} onSubmit={handleFormSubmit}>
          <div className={Contact.mb3}>
            <label htmlFor="name">Enter your name </label>
            <input
              type="name"
              className={Contact.formLabel}
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
          </div>
          <div className={Contact.mb3}>
            <label htmlFor="phone">Enter your phone number </label>
            <input
              type="phone"
              className={Contact.formLabel}
              id="phone"
              value={phone}
              onChange={handleChange}
              name="phone"
              placeholder="Enter phone number"
            />
          </div>
          <div className={Contact.mb3}>
            <label htmlFor="email">Email address </label>
            <input
              type="email"
              className={Contact.formLabel}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <br />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className={Contact.mb3}>
            <label htmlFor="desc">Description </label>
            <div className={Contact.textdiv}>
              <textarea
                className={`${Contact.formLabel} `}
                id="desc"
                name="desc"
                rows="3"
                value={desc}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className={Contact.btn}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default ContactMe;
