import { render } from "@testing-library/react";
import { useState } from "react";

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

  setFAQs([]) {
    let a = [];
    a.push(this.getId());
    a.push(this.getQuestions());
    a.push(this.getAnswers());
    return <div>{a}</div>;
  }

  getFAQs = async () => {
    const getfaqs = await fetch("http://localhost:8080/test");
    console.log(await getfaqs.text());
    return [];
  };
}
