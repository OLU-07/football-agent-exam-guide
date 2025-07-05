export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "According to FIFA regulations, what is the maximum commission an agent can charge a player for negotiating a contract?",
    options: [
      "3% of the player's gross income",
      "5% of the player's gross income", 
      "10% of the player's gross income",
      "There is no maximum limit"
    ],
    correctAnswer: 0,
    explanation: "FIFA regulations state that agents can charge a maximum of 3% of the player's gross income from the relevant contract.",
    category: "Regulations & Fees"
  },
  {
    id: 2,
    question: "Who is responsible for paying the agent's fee when representing a club in a transfer?",
    options: [
      "The player being transferred",
      "The selling club",
      "The buying club (client)",
      "FIFA directly"
    ],
    correctAnswer: 2,
    explanation: "When an agent represents a club, that club (the client) is responsible for paying the agent's fees, not the player or the other club.",
    category: "Regulations & Fees"
  },
  {
    id: 3,
    question: "What is the minimum age for a player to be represented by an agent in international transfers?",
    options: [
      "16 years old",
      "18 years old",
      "21 years old",
      "There is no minimum age"
    ],
    correctAnswer: 1,
    explanation: "Players must be at least 18 years old to be represented by an agent in international transfers, as per FIFA's player protection regulations.",
    category: "Player Protection"
  },
  {
    id: 4,
    question: "How long is a FIFA agent license valid before it needs to be renewed?",
    options: [
      "1 year",
      "2 years", 
      "3 years",
      "5 years"
    ],
    correctAnswer: 2,
    explanation: "FIFA agent licenses are valid for 3 years from the date of issue and must be renewed through continuing education requirements.",
    category: "License Requirements"
  },
  {
    id: 5,
    question: "In which situation is an agent prohibited from representing both parties in a transfer?",
    options: [
      "When the transfer fee exceeds €1 million",
      "When the player is under 21 years old",
      "In all cases - dual representation is always prohibited",
      "When there is a clear conflict of interest"
    ],
    correctAnswer: 2,
    explanation: "FIFA regulations prohibit agents from representing multiple parties in the same transaction to avoid conflicts of interest and ensure fair representation.",
    category: "Ethics & Conduct"
  },
  {
    id: 6,
    question: "What must be included in every agent-player representation agreement?",
    options: [
      "The agent's FIFA license number",
      "A termination clause allowing either party to end the agreement",
      "The specific services to be provided",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "FIFA requires that all representation agreements include the agent's license number, termination clauses, and a clear description of services to be provided.",
    category: "Contract Law"
  },
  {
    id: 7,
    question: "Training compensation is payable until a player reaches what age?",
    options: [
      "21 years old",
      "23 years old",
      "25 years old",
      "18 years old"
    ],
    correctAnswer: 1,
    explanation: "Training compensation is payable until the player reaches 23 years of age, recognizing the investment clubs make in developing young players.",
    category: "Transfer Mechanisms"
  },
  {
    id: 8,
    question: "What percentage of a transfer fee is typically allocated for solidarity payments?",
    options: [
      "2%",
      "5%",
      "10%",
      "15%"
    ],
    correctAnswer: 1,
    explanation: "Solidarity payments amount to 5% of the transfer compensation and are distributed among clubs that contributed to the player's training and education.",
    category: "Transfer Mechanisms"
  },
  {
    id: 9,
    question: "Which document is NOT required for FIFA agent license application?",
    options: [
      "Certificate of good conduct",
      "University degree in sports law",
      "Proof of identity",
      "Declaration of no conflicts of interest"
    ],
    correctAnswer: 1,
    explanation: "While educational qualifications are beneficial, a university degree in sports law is not a mandatory requirement for FIFA agent license application.",
    category: "License Requirements"
  },
  {
    id: 10,
    question: "What is the consequence of an agent engaging in unauthorized practice?",
    options: [
      "A warning letter",
      "Suspension or revocation of license",
      "A fine only",
      "Mandatory additional training"
    ],
    correctAnswer: 1,
    explanation: "Unauthorized practice or violation of FIFA regulations can result in suspension or revocation of the agent's license, depending on the severity of the breach.",
    category: "Ethics & Conduct"
  }
];