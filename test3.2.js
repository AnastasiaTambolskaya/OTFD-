const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что включает в себя основные компоненты бокс-модели в CSS?', answers: ['a) Отступы, границы, поля', 'b) Отступы, границы, содержимое, поля', 'c) Границы, содержимое, поля, размер'], correctIndex: 1 },
    { question: '2. Какие свойства CSS определяют размеры и отступы бокса?', answers: ['a) size и spacing', 'b) width и margin', 'c) width и padding'], correctIndex: 2 },
    { question: '3. Какое значение свойства position используется, когда элемент размещается в потоке документа и игнорирует свойства top, right, bottom, и left?', answers: ['a) Relative (Относительное)', 'b) Absolute (Абсолютное)', 'c) Static (Статическое)'], correctIndex: 2 },
    { question: '4. Как работает свойство position: relative в CSS?', answers: ['a) Элемент фиксируется относительно видимой области окна браузера.', 'b) Элемент сдвигается относительно своего нормального положения в потоке документа.', 'c) Элемент липнет к верхней или нижней границе родительского контейнера.'], correctIndex: 1 },
    { question: '5. Какое свойство используется для установки цвета фона элемента в CSS?', answers: ['a) background-color', 'b) color', 'c) border-color'], correctIndex: 0 },
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
