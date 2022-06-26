import { render } from "@testing-library/react";
import { useState } from "react";

export class FAQs {
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

  setFAQs([]) {
    let a = [];
    a.push(this.getId());
    a.push(this.getQuestions());
    a.push(this.getAnswers());
    return <div>{a}</div>;
  }
 getAsyncFAQs = async () => {
    const listResp = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    //const get=async(url,action)=>{(await fetch(url)).text().then(action)}
    
    console.log("Getting the FAQs...");
    if (listResp) return console.log(await listResp.json());
    return Promise<FAQs>;
  };

  getFAQs() {
    // The actual database.
    /*  const getfaqs = await fetch("http://localhost:8080/test");
    console.log(await getfaqs.text()); */
    console.log("Getting the FAQs...");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data: FAQs) => console.log(data));
  }
}
