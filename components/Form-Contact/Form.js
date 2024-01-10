import { post } from "../../functions/axios.post";
import "./Form.css";
import Error from "./Error";
import Success from "./Success";
import { useState } from "react";
export default function Form(props) {
  let [error, setError] = useState();
  let [success, setSuccess] = useState();
  let [click, setClick] = useState();
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [text, setText] = useState();
  function nchange(e) {
    setName(e.target.value);
  }
  function echange(e) {
    setEmail(e.target.value);
  }
  function tchange(e) {
    setText(e.target.value);
  }
  async function onSubmit(event) {
    setClick(true);
    
    event.preventDefault();
    const formData = new FormData(event.target);
    let URL = props.URL;
    
    post(URL, formData, (data) => {
      if (data.data.status == "NL") {
        setError(["Write Name Properly"]);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setClick(false);
      } else if (data.data.status == "EL") {
        setError(["Write Email Properly"]);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setClick(false);
      } else if (data.data.status == "ML") {
        setError(["Write Message Properly"]);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setClick(false);
      } else if (data.data.status == 200) {
        document.querySelectorAll("input").value = "";
        setSuccess(["Form Submitted Successfully"]);
        setName("");
        setEmail("");
        setText("");
        document.querySelectorAll("input").value = "";
        document.querySelectorAll("textarea").value = "";
        setClick(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    });
    
  }

  return (
    <>
      <form onSubmit={onSubmit} className="cform">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={nchange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={echange}
        />

        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="Message"
          onChange={tchange}
          value={text}
        >
          {text}
        </textarea>

        {click ? (
          <button type="submit" id="submit" className="op" disabled>
            Submitting...
          </button>
        ) : (
          <button type="submit" id="submit">
            Submit
          </button>
        )}
      </form>
      {error ? <Error errors={error} /> : ""}
      {success ? <Success success={success} /> : ""}
    </>
  );
}
