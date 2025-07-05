import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { sampleQuestions, Question } from "@/data/sampleQuestions";
import ExamResults from "./ExamResults";

interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

const PracticeExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes
  const [examStarted, setExamStarted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!examStarted || showResults) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setShowResults(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, showResults]);

  const startExam = () => {
    setExamStarted(true);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
    setTimeRemaining(30 * 60);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const question = sampleQuestions[currentQuestion];
    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedAnswer: selectedOption,
      isCorrect: selectedOption === question.correctAnswer
    };

    const updatedAnswers = [...userAnswers];
    const existingAnswerIndex = updatedAnswers.findIndex(a => a.questionId === question.id);
    
    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }
    
    setUserAnswers(updatedAnswers);

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Check if there's already an answer for the next question
      const nextQuestion = sampleQuestions[currentQuestion + 1];
      const existingAnswer = updatedAnswers.find(a => a.questionId === nextQuestion.id);
      setSelectedOption(existingAnswer ? existingAnswer.selectedAnswer : null);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Load the previous answer if it exists
      const prevQuestion = sampleQuestions[currentQuestion - 1];
      const existingAnswer = userAnswers.find(a => a.questionId === prevQuestion.id);
      setSelectedOption(existingAnswer ? existingAnswer.selectedAnswer : null);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100;

  if (showResults) {
    return <ExamResults userAnswers={userAnswers} questions={sampleQuestions} onRetake={startExam} />;
  }

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-fifa-gray flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl border-none">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="text-4xl font-bold mb-6 gradient-text font-montserrat">
                FIFA Agent Practice Exam
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Test your knowledge with our comprehensive practice exam featuring real FIFA agent 
                certification questions. You'll have 30 minutes to complete 10 questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fifa-blue mb-2">10</div>
                  <div className="text-muted-foreground">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fifa-blue mb-2">30</div>
                  <div className="text-muted-foreground">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fifa-blue mb-2">70%</div>
                  <div className="text-muted-foreground">Pass Rate</div>
                </div>
              </div>
              
              <Button size="lg" onClick={startExam} className="btn-hero text-lg px-12 py-6">
                Start Practice Exam
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = sampleQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-fifa-gray py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-fifa-blue font-montserrat">
              FIFA Agent Practice Exam
            </h1>
            <div className="text-2xl font-bold text-fifa-gold">
              {formatTime(timeRemaining)}
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {sampleQuestions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-lg border-none mb-6">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="text-sm text-fifa-light-blue mb-2 font-medium">
                {question.category}
              </div>
              <h2 className="text-xl font-semibold text-fifa-navy leading-relaxed">
                {question.question}
              </h2>
            </div>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-fifa-blue bg-fifa-blue/5'
                      : 'border-gray-200 hover:border-fifa-light-blue hover:bg-fifa-light-blue/5'
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === index
                        ? 'border-fifa-blue bg-fifa-blue'
                        : 'border-gray-300'
                    }`}>
                      {selectedOption === index && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium text-gray-700">
                      {String.fromCharCode(65 + index)}) {option}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="border-fifa-blue text-fifa-blue hover:bg-fifa-blue hover:text-white"
          >
            Previous Question
          </Button>
          
          <div className="text-center">
            <Button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
              className="btn-hero px-8"
            >
              {currentQuestion === sampleQuestions.length - 1 ? 'Submit Exam' : 'Next Question'}
            </Button>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-semibold text-fifa-blue mb-4">Question Navigator</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {sampleQuestions.map((_, index) => {
              const isAnswered = userAnswers.some(a => a.questionId === sampleQuestions[index].id);
              const isCurrent = index === currentQuestion;
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentQuestion(index);
                    const existingAnswer = userAnswers.find(a => a.questionId === sampleQuestions[index].id);
                    setSelectedOption(existingAnswer ? existingAnswer.selectedAnswer : null);
                  }}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    isCurrent
                      ? 'bg-fifa-blue text-white'
                      : isAnswered
                      ? 'bg-fifa-gold text-fifa-navy'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-fifa-blue rounded"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-fifa-gold rounded"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <span>Not Answered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeExam;