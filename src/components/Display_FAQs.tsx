import { FAQs, IFAQs, IMoreFAQs } from "../models/FAQs";
import { useEffect, useState } from "react";
import render from "react";

let newfaqs = new FAQs();
newfaqs.question_text = " Question: What are the keys to the universe?\n";
newfaqs.answer_text =
  " \n Answer: \nThere are 50 keys – 48 of which enable readers to unlock the secrets of other realms,\
   such as the animal or natural kingdoms, the elements, archangels and other angelic beings, cosmic masters,\
    and wisdom centers; and two Golden Cosmic Keys, Hollow Earth and Sirius, which allow attunement to the wisdom of the cosmos.";

let newfaqs_1 = new FAQs();

newfaqs_1.question_text = " Question: How do I use the keys to the universe?\n";
newfaqs_1.answer_text =
  " \n Answer: \n When the universe will present vast changes for humanity--this examination communicates the knowledge of wise ancients. \
  There are 48 keys and two cosmic keys that open up the various energies of the universe. \
  Along with the accompanying CD, the information in this book will enable readers to expand their consciousness \
  by using these keys to unlock the secrets of other realms, such as the animal and natural kingdoms, the elementals,\
   different archangels and other angelic beings, cosmic masters, and wisdom centers. An exploration of spiritual laws,\
    this is a fascinating and important look at energies that manifest as sound resonances and what humanity can do to access them..";

function Display_FAQs() {
  //-- casting the onject from an interface to a state.
  const [FAQs, setFAQs] = useState([] as IMoreFAQs[]);
  useEffect(() => {
    fetch("http://localhost:5000/MovieApp//api/1.0/faqs")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setFAQs(data);
      });
  }, []); // return an empty array.

  return (
    <>
      <h1>
        <div className="headerbar">FAQs</div>
      </h1>
      <br></br>
      <h2>{newfaqs.getQuestions()}</h2>
      <h2>{newfaqs.getAnswers()}</h2>
      <br></br>

      <h1>
        <div className="middlebar">-------------------</div>
      </h1>
      <br></br>
      <h2> {newfaqs_1.getQuestions()}</h2>
      <h2> {newfaqs_1.getAnswers()}</h2>

      <br></br>

      <h1>
        <div className="bottombar">
          {FAQs.map((faqs) => (
            <div key={faqs.faq_id}>{faqs.faq_question}</div>
          ))}
        </div>
      </h1>
      <h1>
        <div></div>
      </h1>
      <br></br>
    </>
  );
}
export default Display_FAQs;
