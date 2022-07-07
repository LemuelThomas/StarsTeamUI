import { Component } from "react";

export interface IFAQs {
  id: number | undefined | " ";
  title: string | undefined | " ";
  faqs: string | undefined;
}

export class FAQs {
  userId?: number | undefined | string | " ";
  title?: string | undefined;
  id?: number | undefined | string | " ";
  question_text?: string | undefined | " ";
  answer_text?: string | undefined | " ";

  getId() {
    return this.id;
  }
  getQuestions() {
    return this.question_text;
  }
  getAnswers() {
    return this.answer_text;
  }
}

export interface IMoreFAQs {
  faq_id: number | undefined;
  faq_question: string | undefined;
  faq_answer: string | undefined;
}
export class MoreFAQs extends Component {
  state: IMoreFAQs = {
    faq_id: 0,
    faq_question: " ",
    faq_answer: " ",
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.faq_question}
          {this.state.faq_answer}
        </h1>
      </div>
    );
  }
}
