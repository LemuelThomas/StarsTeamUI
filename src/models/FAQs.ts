export interface IFAQs {
  userId: number | undefined | " ";
  id: number | undefined | " ";
  title: string | undefined | " ";

  results: {
    userId: number | undefined;
    id: number | undefined;
    title: string | undefined;
    completed: boolean;
    url: string;
  }[];
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

  static getFAQs = async () => {
    console.log("This is a static function.");
    return Promise.resolve(
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data: FAQs) => console.log(data))
    );
  };
}

export const getFAQs = async (): Promise<IFAQs> => {
  const listResp = await fetch("https://jsonplaceholder.typicode.com/todos");

  return await listResp.json();
};

//FAQs.getFAQs();
