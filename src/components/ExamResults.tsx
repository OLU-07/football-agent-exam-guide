import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/sampleQuestions";

interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

interface ExamResultsProps {
  userAnswers: UserAnswer[];
  questions: Question[];
  onRetake: () => void;
}

const ExamResults = ({ userAnswers, questions, onRetake }: ExamResultsProps) => {
  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = score >= 70;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 70) return "text-fifa-gold";
    return "text-red-600";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "bg-green-50 border-green-200";
    if (score >= 70) return "bg-yellow-50 border-yellow-200";
    return "bg-red-50 border-red-200";
  };

  return (
    <div className="min-h-screen bg-fifa-gray py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Results Header */}
        <Card className={`shadow-2xl border-2 mb-8 ${getScoreBackground(score)}`}>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-6">
              {passed ? "🎉" : "📚"}
            </div>
            
            <h1 className="text-4xl font-bold mb-4 font-montserrat">
              {passed ? "Congratulations!" : "Keep Studying!"}
            </h1>
            
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>
              {score}%
            </div>
            
            <p className="text-xl text-muted-foreground mb-6">
              You scored {correctAnswers} out of {totalQuestions} questions correctly
            </p>
            
            <div className="max-w-md mx-auto mb-6">
              <Progress value={score} className="h-4" />
            </div>
            
            <div className={`text-lg font-semibold mb-8 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed 
                ? "You passed! This performance indicates good readiness for the FIFA exam." 
                : "You need 70% to pass. Review the explanations below and try again."}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onRetake} className="btn-hero text-lg px-8 py-4">
                Retake Exam
              </Button>
              <Button variant="outline" className="border-fifa-blue text-fifa-blue hover:bg-fifa-blue hover:text-white text-lg px-8 py-4">
                View Full Course
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Question by Question Review */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-fifa-blue font-montserrat text-center mb-8">
            Question Review & Explanations
          </h2>
          
          {questions.map((question, index) => {
            const userAnswer = userAnswers.find(a => a.questionId === question.id);
            const isCorrect = userAnswer?.isCorrect || false;
            const selectedAnswer = userAnswer?.selectedAnswer ?? -1;
            
            return (
              <Card key={question.id} className="shadow-lg border-none">
                <CardHeader className={`${isCorrect ? 'bg-green-50' : 'bg-red-50'} rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-fifa-navy">
                      Question {index + 1}
                    </CardTitle>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isCorrect 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </div>
                  </div>
                  <div className="text-sm text-fifa-light-blue font-medium">
                    {question.category}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-fifa-navy mb-4 leading-relaxed">
                    {question.question}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {question.options.map((option, optionIndex) => {
                      const isUserSelection = selectedAnswer === optionIndex;
                      const isCorrectOption = optionIndex === question.correctAnswer;
                      
                      let optionStyle = "p-3 rounded-lg border-2 ";
                      
                      if (isCorrectOption) {
                        optionStyle += "border-green-500 bg-green-50 text-green-800";
                      } else if (isUserSelection && !isCorrect) {
                        optionStyle += "border-red-500 bg-red-50 text-red-800";
                      } else {
                        optionStyle += "border-gray-200 bg-gray-50";
                      }
                      
                      return (
                        <div key={optionIndex} className={optionStyle}>
                          <div className="flex items-center justify-between">
                            <span>
                              <strong>{String.fromCharCode(65 + optionIndex)}) </strong>
                              {option}
                            </span>
                            <div className="flex gap-2">
                              {isCorrectOption && (
                                <span className="text-green-600 text-sm font-medium">
                                  ✓ Correct Answer
                                </span>
                              )}
                              {isUserSelection && (
                                <span className={`text-sm font-medium ${
                                  isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {isCorrect ? '✓ Your Answer' : '✗ Your Answer'}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="bg-fifa-gray p-4 rounded-lg">
                    <h4 className="font-semibold text-fifa-blue mb-2">Explanation:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-fifa-blue mb-4 font-montserrat">
            Ready to Master the FIFA Agent Exam?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            This practice exam is just a sample of our comprehensive preparation program. 
            Get access to hundreds more questions, detailed study materials, and expert guidance.
          </p>
          <Button size="lg" className="btn-hero text-lg px-12 py-6">
            Enroll in Full Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamResults;