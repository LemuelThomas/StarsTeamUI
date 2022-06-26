import { FAQs } from "../models/FAQs";

let newfaqs = new FAQs();
newfaqs.id = 1;
newfaqs.question_text = " What are the keys to the universe?\n";
newfaqs.answer_text = " \nGet money.";

let newusermap = [
  newfaqs.getId(),
  newfaqs.getQuestions(),
  newfaqs.getAnswers(),
];
function Display_FAQs() {
  //debugging function.
  return (
    <>
      {newfaqs.getFAQs()}
      <br></br>
    </>
  );
}
export default Display_FAQs;
