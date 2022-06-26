import { FAQs } from "../models/FAQs";

//create a FAQs object.
let newfaqs = new FAQs();
newfaqs.id = 1;
newfaqs.question_text = " Question: What are the keys to the universe?\n";
newfaqs.answer_text =
  " \n Answer: \nThere are 50 keys – 48 of which enable readers to unlock the secrets of other realms,\
   such as the animal or natural kingdoms, the elements, archangels and other angelic beings, cosmic masters,\
    and wisdom centers; and two Golden Cosmic Keys, Hollow Earth and Sirius, which allow attunement to the wisdom of the cosmos.";

let newfaqs_1 = new FAQs();
newfaqs_1.id = 1;
newfaqs_1.question_text = " Question: What are the keys to the universe?\n";
newfaqs_1.answer_text =
  " \n Answer: \nThere are 50 keys – 48 of which enable readers to unlock the secrets of other realms,\
   such as the animal or natural kingdoms, the elements, archangels and other angelic beings, cosmic masters,\
    and wisdom centers; and two Golden Cosmic Keys, Hollow Earth and Sirius, which allow attunement to the wisdom of the cosmos.";

//Let's create a new mapping
let newfaqsmap = [newfaqs.id, newfaqs.question_text, newfaqs.answer_text];

function Display_FAQs() {
  /*Display the information in a certain stucture 
  and push that object into there. 
  */
  return (
    <>
      <h1>
        <span className="HeaderBar">FAQs</span>
      </h1>
      {newfaqs.getQuestions()}
      <br></br>
      {newfaqs.getAnswers()}
      <br></br>

      <h1>
        <span className="MiddleBar">-------------------</span>
      </h1>
      {newfaqs.getQuestions()}
      <br></br>
      {newfaqs.getAnswers()}
      <br></br>

      <h1>
        <span className="MiddleBar">-------------------</span>
      </h1>

      {newfaqsmap.push(newfaqs.getAsyncFAQs())}
    </>
  );
}
export default Display_FAQs;
