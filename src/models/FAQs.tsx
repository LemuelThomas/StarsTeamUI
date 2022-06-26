import { render } from "@testing-library/react";
import { useState } from "react";

export class FAQs {
  id?: number | undefined | string | " ";
  question_text?: string | undefined | "";
  answer_text?: string | undefined | "";

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
  getmorefqs = async () => {
    const listResp = await fetch("https://jsonplaceholder.typicode.com/todos");

    console.log("Getting the FAQs...");
    if (listResp) return console.log(await listResp.json());
  };

  getFAQs = async () => {
    /*  const getfaqs = await fetch("http://localhost:8080/test");
    console.log(await getfaqs.text()); */

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: FAQs) => console.log(data));
  };
}
