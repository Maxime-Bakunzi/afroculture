let quizData = [
  {
    question:
      "Which 100-mile-long waterway links the Mediterranean and the Red Sea?",
    options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Gibraltar Strait"],
    correct: "Suez Canal",
  },
  {
    question: "In which country is the Aswan Dam?",
    options: ["Egypt", "Sudan", "Ethiopia", "Nigeria"],
    correct: "Egypt",
  },
  {
    question: "Which country has the rand as its currency?",
    options: ["South Africa", "Nigeria", "Kenya", "Ghana"],
    correct: "South Africa",
  },
  {
    question: "What does ANC stand for?",
    options: [
      "African National Congress",
      "African National Coalition",
      "African National Committee",
      "African National Council",
    ],
    correct: "African National Congress",
  },
  {
    question:
      "Who was the Egyptian king whose tomb and treasures were discovered in the Valley of the Kings in 1922?",
    options: ["Tutankhamen", "Ramses II", "Hatshepsut", "Thutmose III"],
    correct: "Tutankhamen",
  },
  {
    question: "Which volcano in Tanzania is the highest mountain in Africa?",
    options: ["Kilimanjaro", "Mount Kenya", "Mount Meru", "Mount Elgon"],
    correct: "Kilimanjaro",
  },
  {
    question:
      "Which country, bordering Zaire, takes its name from the former name of the Zaire river?",
    options: ["Congo", "Gabon", "Angola", "Cameroon"],
    correct: "Congo",
  },
  {
    question: "Which is the second longest river in Africa?",
    options: ["Nile", "Congo", "Niger", "Orange"],
    correct: "Nile",
  },
  {
    question:
      "What is the name shared by the currency units of Algeria and Tunisia?",
    options: ["Dinar", "Peso", "Dirham", "Lira"],
    correct: "Dinar",
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Nairobi", "Mombasa", "Kisumu", "Eldoret"],
    correct: "Nairobi",
  },
  {
    question: "Which country is the island of Zanzibar part of?",
    options: ["Tanzania", "Kenya", "Mozambique", "Malawi"],
    correct: "Tanzania",
  },
  {
    question: "What is the capital of Sierra Leone?",
    options: ["Freetown", "Bo", "Kenema", "Makeni"],
    correct: "Freetown",
  },
  {
    question: "Who was Zambia's first president?",
    options: [
      "Kenneth Kaunda",
      "Frederick Chiluba",
      "Levy Mwanawasa",
      "Rupiah Banda",
    ],
    correct: "Kenneth Kaunda",
  },
  {
    question: "Name the East African country which lies on the Equator.",
    options: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
    correct: "Kenya",
  },
  {
    question: "What appears in the middle of the Rwandan flag?",
    options: ["Letter R", "Sun", "Star", "Tree"],
    correct: "Letter R",
  },
  {
    question:
      "Which country includes the Yoruba, Ibo, and Hausa-Fulani peoples?",
    options: ["Nigeria", "Ghana", "Cameroon", "Senegal"],
    correct: "Nigeria",
  },
  {
    question:
      "Who was the founder of the Back to Africa movement who largely inspired Rastafarianism?",
    options: ["Marcus Garvey", "Haile Selassie", "Bob Marley", "Peter Tosh"],
    correct: "Marcus Garvey",
  },
  {
    question: "At which town in the Sudan do the White and Blue Niles join?",
    options: ["Khartoum", "Port Sudan", "Omdurman", "Wad Madani"],
    correct: "Khartoum",
  },
  {
    question: "In which country did King Hassan II ascend the throne in 1961?",
    options: ["Morocco", "Algeria", "Tunisia", "Libya"],
    correct: "Morocco",
  },
  {
    question: "In which country are Tangier and Casablanca?",
    options: ["Morocco", "Algeria", "Tunisia", "Libya"],
    correct: "Morocco",
  },
  {
    question: "The flag of Libya is a plain rectangle of which color?",
    options: ["Green", "Red", "Blue", "Black"],
    correct: "Green",
  },
  {
    question:
      "From which European country did Angola achieve independence in 1975?",
    options: ["Portugal", "Spain", "France", "Italy"],
    correct: "Portugal",
  },
  {
    question: "Mount Toubkai is the highest peak of which range of mountains?",
    options: [
      "Atlas Mountains",
      "Drakensberg Mountains",
      "Simien Mountains",
      "Rwenzori Mountains",
    ],
    correct: "Atlas Mountains",
  },
  {
    question:
      "Which South African politician won the Nobel Peace Prize in 1960?",
    options: [
      "Albert Luthuli",
      "Nelson Mandela",
      "Desmond Tutu",
      "FW de Klerk",
    ],
    correct: "Albert Luthuli",
  },
  {
    question:
      "In which township were 69 demonstrators killed by South African police in March 1960?",
    options: ["Sharpeville", "Soweto", "Alexandra", "Tembisa"],
    correct: "Sharpeville",
  },
  {
    question: "Afrikaans is a variety of which European language?",
    options: ["Dutch", "German", "French", "English"],
    correct: "Dutch",
  },
  {
    question: "What is the former name of the People's Republic of Benin?",
    options: ["Dahomey", "Ivory Coast", "Gold Coast", "Upper Volta"],
    correct: "Dahomey",
  },
  {
    question:
      "Which country unilaterally declared independence in November 1965?",
    options: ["Zimbabwe", "Namibia", "Botswana", "Zambia"],
    correct: "Zimbabwe",
  },
  {
    question: "What is Africa's largest country?",
    options: ["Sudan", "Algeria", "Congo", "Nigeria"],
    correct: "Algeria",
  },
  {
    question: "Which African country is sandwiched between Ghana and Benin?",
    options: ["Togo", "Ivory Coast", "Liberia", "Equatorial Guinea"],
    correct: "Togo",
  },
];

const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn-container .start-btn");

let questionNumber = 0;
let score = 0;
const MAX_QUESTIONS = 10;
let timerInterval;

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
  for (i = 0; i < MAX_QUESTIONS; i++) {
    localStorage.removeItem(`userAnswer_${i}`);
  }
};

resetLocalStorage();

const checkAnswer = (e) => {
  let userAnswer = e.target.textContent;
  if (userAnswer === quizData[questionNumber].correct) {
    score++;
    e.target.classList.add("correct");
  } else {
    e.target.classList.add("incorrect");
  }

  localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);

  let allOptions = document.querySelectorAll(".quiz-container .option");
  allOptions.forEach((o) => {
    o.classList.add("disabled");
  });
};

const createQuestion = () => {
  clearInterval(timerInterval);

  let secondsLeft = 9;
  const timerDisplay = document.querySelector(".quiz-container .timer");
  timerDisplay.classList.remove("danger");

  timerDisplay.textContent = `Time Left: 10 seconds`;

  timerInterval = setInterval(() => {
    timerDisplay.textContent = `Time Left: ${secondsLeft
      .toString()
      .padStart(2, "0")} seconds`;
    secondsLeft--;

    if (secondsLeft < 3) {
      timerDisplay.classList.add("danger");
    }

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      displayNextQuestion();
    }
  }, 1000);

  options.innerHTML = "";
  question.innerHTML = `<span class='question-number'>${
    questionNumber + 1
  }/${MAX_QUESTIONS}</span>${quizData[questionNumber].question}`;

  const shuffledOptions = shuffleArray(quizData[questionNumber].options);

  shuffledOptions.forEach((o) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.innerHTML = o;
    option.addEventListener("click", (e) => {
      checkAnswer(e);
    });
    options.appendChild(option);
  });
};

const retakeQuiz = () => {
  questionNumber = 0;
  score = 0;
  quizData = shuffleArray(quizData);
  resetLocalStorage();

  createQuestion();
  quizResult.style.display = "none";
  quizContainer.style.display = "block";
};

const displayQuizResult = () => {
  quizResult.style.display = "flex";
  quizContainer.style.display = "none";
  quizResult.innerHTML = "";

  const resultHeading = document.createElement("h2");
  resultHeading.innerHTML = `You have scored ${score} out of ${MAX_QUESTIONS}.`;
  quizResult.appendChild(resultHeading);

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const resultItem = document.createElement("div");
    resultItem.classList.add("question-container");

    const userAnswer = localStorage.getItem(`userAnswer_${i}`);
    const correctAnswer = quizData[i].correct;

    let answeredCorrectly = userAnswer === correctAnswer;

    if (!answeredCorrectly) {
      resultItem.classList.add("incorrect");
    }

    resultItem.innerHTML = `<div class="question">Question ${i + 1}: ${
      quizData[i].question
    }</div>
    <div class="user-answer">Your answer: ${userAnswer || "Not Answered"}</div>
    <div class="correct-answer">Correct answer: ${correctAnswer}</div>`;

    quizResult.appendChild(resultItem);
  }

  const retakeBtn = document.createElement("button");
  retakeBtn.classList.add("retake-btn");
  retakeBtn.innerHTML = "Retake Quiz";
  retakeBtn.addEventListener("click", retakeQuiz);
  quizResult.appendChild(retakeBtn);
};

const displayNextQuestion = () => {
  if (questionNumber >= MAX_QUESTIONS - 1) {
    displayQuizResult();
    return;
  }

  questionNumber++;
  createQuestion();
};

nextBtn.addEventListener("click", displayNextQuestion);

startBtn.addEventListener("click", () => {
  startBtnContainer.style.display = "none";
  quizContainer.style.display = "block";
  createQuestion();
});
