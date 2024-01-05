const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что представляет собой JavaScript в контексте веб-разработки?', answers: ['a) Язык разметки', 'b) Язык программирования', 'c) Операционная система'], correctIndex: 1 },
    { question: '2. Какие основные конструкции управления потоком выполнения предоставляет JavaScript?', answers: ['a) start и end', 'b) if, else, for, while', 'c) open и close'], correctIndex: 1 },
    { question: '3. Что такое DOM (Document Object Model) в контексте JavaScript?', answers: ['a) Серверная база данных', 'b) Модель объектов документа, представляющая HTML-документ', 'c) Язык стилей для веб-страниц'], correctIndex: 1 },
    { question: '4. Как добавить обработчик события к элементу с помощью JavaScript?', answers: ['a) addEvent(\'click\', function() { })', 'b) addEventListener(\'click\', function() { })', 'c) handleEvent(\'click\', function() { })'], correctIndex: 1 },
    { question: '5. Что такое AJAX в контексте JavaScript?', answers: ['a) Метод передачи данных по протоколу UDP', 'b) Подход к асинхронной обработке запросов к серверу', 'c) Фреймворк для создания веб-компонентов'], correctIndex: 1 },
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
