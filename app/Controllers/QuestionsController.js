import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
  let questions = appState.questions
  let template = ''
  questions.find(q => template += q.QuestionTemplate)
  setHTML('questions', template)
}



export class QuestionsController {

  constructor() {
    console.log('hello')
    // let data = fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=boolean')
    // console.log(data)
    appState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error){
      
      console.error(error)
    }
  }
}