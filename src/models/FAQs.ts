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
}
