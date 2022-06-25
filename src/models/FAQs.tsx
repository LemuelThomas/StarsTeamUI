export class FAQs {
  id: number | undefined;
  question_text: string | undefined | " ";
  answer_text: string | undefined | " ";

  getId() {
    return this.id;
  }
  getQuestions() {
    return this.question_text;
  }
  getAnswers() {
    return this.answer_text;
  }

  getFAQ([]) {
    let a = [];
    a.push(this.getId());
    a.push(this.getQuestions());
    a.push(this.getAnswers());
    return <div>{a}</div>;
  }
}
