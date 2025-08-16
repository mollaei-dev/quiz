const quizData = [
  {
    question: "کدوم غذا بیشتر به 'کدنویسی' شبیهه؟",
    options: [
      "پیتزا 🍕    (همه‌چی روش می‌ریزن)",
      "سوپ 🍲   (گاهی همه‌چیز قاطی میشه)",
      "سوشی 🍣   (دقیق و ظریف)",
      "کیک 🎂   (لایه‌لایه و ساختاریافته)",
    ],
    answer: 3,
  },
  {
    question: "کدوم وسیله بیشتر حسِ 'دیباگ کردن' می ده ؟",
    options: ["ذره‌بین 🔍", "چکش 🔨", "لپ‌تاپ 💻", "بیلچه ⛏️"],
    answer: 0,
  },

  {
    question: "اگر اینترنت قطع بشه، بیشتر مردم اولین کارشون چیه؟",
    options: [
      "زنگ به پشتیبانی 📞",
      " امتحان وای‌فای همسایه 📡",
      " ریست مودم 🔌",
      "نشستن و گریه کردن 😭",
    ],
    answer: 2,
  },

  {
    question: "کدوم نوشیدنی انرژی صبح خیلی‌هاست؟",
    options: ["قهوه ☕", "آب پرتقال 🍊", "شیر 🥛", "نوشابه 🥤"],
    answer: 0,
  },
  {
    question: "اگر لپ‌تاپت بتونه حرف بزنه، اولین چیزی که بهت میگه چیه؟",
    options: [
      "بسه دیگه فیلم دانلود نکن! 🍿",
      "رم منو پر نکن! 🧠",
      "بزن بریم کد بزنیم! 💻",
      "یکم استراحت کن، منم خسته‌م 😪",
    ],
    answer: 3,
  },
];

let number = 0;
let score = 0;

const elQuestion = document.getElementById("question");
const elAnswers = document.getElementById("answers");
const btnNext = document.getElementById("next-btn");
const elResult = document.getElementById("result");

function loadQuestion() {
  elResult.textContent = "";
  elAnswers.innerHTML = "";
  btnNext.style.display = "none";
  const currentQuiz = quizData[number];
  elQuestion.textContent = currentQuiz.question;
  currentQuiz.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index));
    elAnswers.appendChild(btn);
  });
}

btnNext.addEventListener("click", () => {
  number++;
  if (number < quizData.length) {
    loadQuestion();
  } else {
    elQuestion.textContent = `پایان بازی! امتیاز شما: ${score} از ${quizData.length}`;
    elAnswers.innerHTML = "";
    btnNext.style.display = "none";
    elResult.textContent = "";
  }
});
loadQuestion();
