import React from "react";
import "./QuizCreator.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Inputs/Inputs";
import Select from "../../components/UI/Select/Select";
import axios from "axios";

import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";

class QuizCreator extends React.Component {
  state = {
    quiz: [],
    rightAnswer: 1,
    isFormValid: false,
    formControls: {
      question: createControl(
        {
          label: "Enter your question",
          place: "Enter your question...",
          errorMessage: "Fiend cant be empty",
        },
        { required: true }
      ),
      option1: createControl(
        {
          label: "Variant 1",
          place: "Enter your variant...",
          errorMessage: "Fiend cant be empty",
          id: 1,
        },
        { required: true }
      ),
      option2: createControl(
        {
          label: "Variant 2",
          place: "Enter your variant...",
          errorMessage: "Fiend cant be empty",
          id: 2,
        },
        { required: true }
      ),
      option3: createControl(
        {
          label: "Variant 3",
          place: "Enter your variant...",
          errorMessage: "Fiend cant be empty",
          id: 3,
        },
        { required: true }
      ),
      option4: createControl(
        {
          label: "Variant 4",
          place: "Enter your variant...",
          errorMessage: "Fiend cant be empty",
          id: 4,
        },
        { required: true }
      ),
    },
  };

  addNewQuizHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes.json",
        this.state.quiz
      );
      console.log(res.data);
      this.setState({
        quiz: [],
        rightAnswer: 1,
        isFormValid: false,
        formControls: {
          question: createControl(
            {
              label: "Enter your question",
              place: "Enter your question...",
              errorMessage: "Fiend cant be empty",
            },
            { required: true }
          ),
          option1: createControl(
            {
              label: "Variant 1",
              place: "Enter your variant...",
              errorMessage: "Fiend cant be empty",
              id: 1,
            },
            { required: true }
          ),
          option2: createControl(
            {
              label: "Variant 2",
              place: "Enter your variant...",
              errorMessage: "Fiend cant be empty",
              id: 2,
            },
            { required: true }
          ),
          option3: createControl(
            {
              label: "Variant 3",
              place: "Enter your variant...",
              errorMessage: "Fiend cant be empty",
              id: 3,
            },
            { required: true }
          ),
          option4: createControl(
            {
              label: "Variant 4",
              place: "Enter your variant...",
              errorMessage: "Fiend cant be empty",
              id: 4,
            },
            { required: true }
          ),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  addQuestionHandler = (e) => {
    e.preventDefault();
    const quiz = JSON.parse(JSON.stringify(this.state.quiz));
    const index = quiz.length + 1;
    const questionItem = {
      question: this.state.formControls.question.value,
      id: index,
      rightAnswer: this.state.rightAnswer,
      answers: [
        {
          text: this.state.formControls.option1.value,
          id: this.state.formControls.option1.id,
        },
        {
          text: this.state.formControls.option2.value,
          id: this.state.formControls.option2.id,
        },
        {
          text: this.state.formControls.option3.value,
          id: this.state.formControls.option3.id,
        },
        {
          text: this.state.formControls.option4.value,
          id: this.state.formControls.option4.id,
        },
      ],
    };
    quiz.push(questionItem);
    this.setState({
      quiz,
      rightAnswer: 1,
      isFormValid: false,
      formControls: {
        question: createControl(
          {
            label: "Enter your question",
            place: "Enter your question...",
            errorMessage: "Fiend cant be empty",
          },
          { required: true }
        ),
        option1: createControl(
          {
            label: "Variant 1",
            place: "Enter your variant...",
            errorMessage: "Fiend cant be empty",
            id: 1,
          },
          { required: true }
        ),
        option2: createControl(
          {
            label: "Variant 2",
            place: "Enter your variant...",
            errorMessage: "Fiend cant be empty",
            id: 2,
          },
          { required: true }
        ),
        option3: createControl(
          {
            label: "Variant 3",
            place: "Enter your variant...",
            errorMessage: "Fiend cant be empty",
            id: 3,
          },
          { required: true }
        ),
        option4: createControl(
          {
            label: "Variant 4",
            place: "Enter your variant...",
            errorMessage: "Fiend cant be empty",
            id: 4,
          },
          { required: true }
        ),
      },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  onChangeHandler = (e, name) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[name] };
    control.touched = true;
    control.value = e.target.value;
    control.valid = validate(control.value, control.validation);
    formControls[name] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  selectChangeHandler = (e) => {
    this.setState({
      rightAnswer: +e.target.value,
    });
  };

  renderControls() {
    const inputs = Object.keys(this.state.formControls).map(
      (controlName, i) => {
        const control = this.state.formControls[controlName];

        return (
          <React.Fragment key={i}>
            <Input
              key={i}
              placeholder={control.place}
              label={control.label}
              value={control.value}
              errorMessage={control.errorMessage}
              valid={control.valid}
              touched={control.touched}
              shouldValidate={true}
              onChange={(e) => this.onChangeHandler(e, controlName)}
            />
            {i === 0 ? <hr /> : null}
          </React.Fragment>
        );
      }
    );
    return inputs;
  }

  render() {
    return (
      <div className="quiz-creator">
        <div>
          <form onSubmit={this.submitHandler}>
            <h1>Create new quiz</h1>
            <h2>Questions in quiz: {this.state.quiz.length}</h2>

            {this.renderControls()}

            <Select
              label="Select right answer"
              value={this.state.rightAnswer}
              onChange={this.selectChangeHandler}
              options={[
                {
                  text: 1,
                  value: 1,
                },
                {
                  text: 2,
                  value: 2,
                },
                {
                  text: 3,
                  value: 3,
                },
                {
                  text: 4,
                  value: 4,
                },
              ]}
            />

            <Button
              type="error"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Add question
            </Button>
            <Button
              type="success"
              onClick={this.addNewQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Create quiz
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;
