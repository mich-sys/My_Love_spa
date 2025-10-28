import { useState } from 'react';
import PageCard from '../components/PageCard.jsx';
import BackHomeLink from '../components/BackHomeLink.jsx';
import { quizQuestions } from '../data/quiz.js';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  const handleOptionClick = (option) => {
    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCompleted(true);
    }
  };

  return (
    <PageCard>
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9ec9ff]/80">starlit trivia</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#e7e4ff]">How Well Do You Remember?</h2>
        <p className="mt-2 text-[#cbd5ff]">A loving little pop quiz on our favorite moments.</p>
      </div>

      {!completed && currentQuestion && (
        <div className="mt-10 space-y-8">
          <div className="rounded-[1.8rem] border border-[#a7b7ff]/40 bg-[#1e2144]/80 p-8 shadow-[0_18px_40px_rgba(15,18,40,0.6)]">
            <p className="text-xl font-medium text-[#f1f4ff]">{currentQuestion.question}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleOptionClick(option)}
                className="rounded-2xl border border-[#3d4b8a]/60 bg-[#141631]/80 px-6 py-4 text-left font-semibold text-[#e0e5ff] transition hover:border-[#a7b7ff]/80 hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-[#8293ff]">
            Question {currentIndex + 1} of {quizQuestions.length}
          </p>
        </div>
      )}

      {completed && (
        <div className="mt-12 rounded-[2.2rem] border border-[#9fffe2]/40 bg-gradient-to-br from-[#172237]/90 via-[#132631]/90 to-[#102026]/90 p-10 text-center shadow-[0_20px_60px_rgba(9,28,38,0.6)]">
          <p className="text-2xl font-semibold text-[#9fffe2]">
            You got {score} out of {quizQuestions.length} right!
          </p>
          <p className="mt-3 text-[#c8ffe8]">I\'m already proud of how well you remember us.</p>
        </div>
      )}

      <BackHomeLink />
    </PageCard>
  );
}
