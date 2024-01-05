const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Какой из фреймворков разработан Facebook?', answers: ['a) Angular', 'b) React', 'c) Vue.js'], correctIndex: 1 },
    { question: '2. Какой фреймворк обеспечивает модульность и переиспользование кода через компоненты?', answers: ['a) Angular', 'b) React', 'c) Vue.js'], correctIndex: 1 },
    { question: '3. Какой из фреймворков предоставляет полноценный MVC подход?', answers: ['a) Angular', 'b) React', 'c) Vue.js'], correctIndex: 0 },
    { question: '4. Какой фреймворк легковесный и идеален для создания небольших и средних веб-приложений?', answers: ['a) Angular', 'b) React', 'c) Vue.js'], correctIndex: 2 },
    { question: '5. Какие преимущества обеспечивают использование Frontend Frameworks?', answers: ['a) Ускоренная разработка', 'b) Модульность и переиспользование', 'c) Состояние и маршрутизация', 'd) Все выше перечисленное'], correctIndex: 3 },
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${question.question}</p>`;
        
        question.answers.forEach((answer, answerIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = answerIndex;
            
            const label = document.createElement('label');
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            
            questionElement.appendChild(label);
        });
        
        questionContainer.appendChild(questionElement);
    });
}

function showResults() {
    const answerContainers = questionContainer.querySelectorAll('.question');
    let correctAnswers = 0;
    let allQuestionsAnswered = true; // Флаг для проверки, ответил ли пользователь на все вопросы
    
    questions.forEach((question, index) => {
        const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedInput) {
            const userAnswer = parseInt(selectedInput.value);
            if (userAnswer === question.correctIndex) {
                correctAnswers++;
            }
        } else {
            allQuestionsAnswered = false; // Установить флаг в false, если на какой-то вопрос не был дан ответ
        }
    });

    if (allQuestionsAnswered) {
        resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
    } else {
        alert('Пожалуйста, ответьте на все вопросы.');
    }
}

buildQuiz();

submitButton.addEventListener('click', showResults);
