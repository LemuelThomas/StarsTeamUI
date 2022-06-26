import { FAQs } from "../models/FAQs";

let newfaqs = new FAQs();
newfaqs.id = 1;
newfaqs.question_text = " What are the keys to the universe?\n";
newfaqs.answer_text = " \nGet money.";

let newfaqsmap = [newfaqs.id, newfaqs.id, newfaqs.id];

function Display_FAQs() {
  //debugging function.
  return (
    <>
      {newfaqsmap.push(newfaqs.getmorefqs())}
      <br></br>
    </>
  );
}
export default Display_FAQs;
