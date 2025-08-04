import React, { useEffect, useState } from 'react';
import he from 'he';
import { useParams } from 'react-router-dom';

const Singlequiz = () => {
    const {title}=useParams();

  const [quiz, setQuiz] = useState([]);
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://opentdb.com/api.php?amount=10&category=${title}&difficulty=easy&type=multiple`)

      .then(res => res.json())
      .then(data => {

        const formattedData = data.results.map(q => {
          const options = [...q.incorrect_answers];
          const randIndex = Math.floor(Math.random() * 4);
          options.splice(randIndex, 0, q.correct_answer);
          return {
            question: he.decode(q.question),
            options: options.map(opt => he.decode(opt)),
            answer: he.decode(q.correct_answer),
          };
        });
        setQuiz(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching quiz:", error);
        setLoading(false);
      });
  }, []);

  const optionClick = (opt) => {
    if (opt === quiz[currentQues].answer) {
      setScore(score + 1);
    }

    if (currentQues + 1 < quiz.length) {
      setCurrentQues(currentQues + 1);
    } else {
      setResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQues(0);
    setScore(0);
    setResult(false);
    // Optional: re-fetch quiz
    window.location.reload(); // or trigger fetch again
  };

  if (loading) {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="w-12 h-12 text-blue-600 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <p className="text-lg font-medium text-gray-700">Loading Quiz...</p>
      </div>
    </div>
  );
}

  return (
    <div className="max-w-xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      {result ? (
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Quiz Completed!</h2>
          <h3 className="mb-4 text-lg">Your Score: {score} / {quiz.length}</h3>
          <button
            onClick={restartQuiz}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
                    {quiz[currentQues] && (
            <h3 className="mb-2 text-xl font-semibold">
                {currentQues + 1}. {quiz[currentQues].question}
            </h3>
            )}
          <h4 className="mb-4 text-gray-600">Score: {score} / {quiz.length}</h4>
          <ul className="space-y-3">
            {quiz[currentQues].options.map((opt, idx) => (
              <li
                key={idx}
                onClick={() => optionClick(opt)}
                className="px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-blue-100"
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Singlequiz;
