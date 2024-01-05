const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Какое свойство CSS используется для определения цвета текста?', answers: ['a) text-color', 'b) font-color', 'c) color'], correctIndex: 2 },
    { question: '2. Какие свойства позволяют настраивать шрифт текста в CSS?', answers: ['a) font-family, font-size, font-weight', 'b) text-style, text-size, text-weight', 'c) style-font, size-font, weight-font'], correctIndex: 0 },
    { question: '3. Как можно задать обтекание текстом для изображения в CSS?', answers: ['a) float: left;', 'b) text-wrap: around;', 'c) image-wrap: float;'], correctIndex: 0 },
    { question: '4. Какое свойство CSS создает закругленные углы для изображения?', answers: ['a) corner-radius', 'b) border-radius', 'c) image-corner'], correctIndex: 1 },
    { question: '5. Какое свойство CSS задает цвет фона элемента?', answers: ['a) background-color', 'b) color-background', 'c) background-style'], correctIndex: 0 },
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
