import React from "react";
import "./Quiz.css";
import axios from "axios";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends React.Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true,
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswer === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };

  isQuizFinished = () => {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  };

  onRetryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  onRetryToQuizesListHandler = () => {
    this.props.history.push("/quiz-list");
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const response = await axios.get(
        `https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes/${id}.json`
      );

      const quiz = response.data;

      this.setState({
        quiz,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="quiz">
        <h1 className="quiz-title">Quiz</h1>
        {this.state.loading ? (
          <Loader />
        ) : this.state.isFinished ? (
          <FinishedQuiz
            results={this.state.results}
            quiz={this.state.quiz}
            onRetry={this.onRetryHandler}
            onRetryToQuizesList={this.onRetryToQuizesListHandler}
          />
        ) : (
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
