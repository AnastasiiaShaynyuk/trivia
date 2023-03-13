

export class Question {
  constructor(data) {
    this.category = data.category
    this.difficulty = data.difficulty
    this.type = data.type
    this.question =data.question
    this.answer = data.correct_answer ? 'true' : data.incorrect_answers ? 'false' : ''
  }




  get QuestionTemplate() {
    return `
    <h5>${this.question}</h5>`
  }


}