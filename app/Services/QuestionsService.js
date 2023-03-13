import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";


class QuestionsService {
  async getQuestions() {
    let response = await axios.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple')
    console.log('axios', response)
    appState.questions = response.data.results.map(q => new Question(q))
    console.log('AppState', appState.questions)
  }
}

export const questionsService = new QuestionsService()