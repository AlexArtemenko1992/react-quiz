import React from "react";
import { NavLink } from "react-router-dom";
import "./QuizList.css";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends React.Component {
  state = {
    quizes: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes.json"
      );
      const quizes = [];
      Object.keys(response.data).forEach((id, i) => {
        quizes.push({
          id: id,
          name: `Quiz ${i + 1}`,
        });
      });
      this.setState({
        quizes,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const renderQuizes = this.state.quizes.map((link) => {
      return (
        <li className="quiz-list-item" key={link.id}>
          <NavLink to={`/quiz/${link.id}`} className="quiz-list-link">
            {link.name}
          </NavLink>
        </li>
      );
    });
    return (
      <div className="quiz-list">
        <div>
          <h1 className="quiz-list-title">Quiz list</h1>
          {this.state.loading ? (
            <Loader />
          ) : (
            <ul className="quiz-list-group">{renderQuizes}</ul>
          )}
        </div>
      </div>
    );
  }
}

export default QuizList;
