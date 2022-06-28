import { FAQs, getFAQs, IFAQs } from "../models/FAQs";
import { useEffect, useState } from "react";

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
  const [FAQs, setFAQs] = useState([] as IFAQs[]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
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
      {newfaqs.getAnswers()}
      <br></br>

      <h1>
        <div className="middlebar">-------------------</div>
      </h1>
      {newfaqs_1.getQuestions()}
      <br></br>
      {newfaqs_1.getAnswers()}
      <br></br>

      <h1>
        <div className="bottombar">
          {FAQs.map((faqs) => (
            <div key={faqs.id}>{faqs.title}</div>
          ))}
        </div>
      </h1>
    </>
  );
}
export default Display_FAQs;
