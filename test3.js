const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что представляет собой CSS в веб-разработке?', answers: ['a) Язык программирования', 'b) Язык стилей', 'c) Язык разметки'], correctIndex: 1 },
    { question: '2. Какую роль выполняет CSS в визуальной стилизации веб-сайтов?', answers: ['a) Создание серверной логики', 'b) Визуальная привлекательность и дизайн', 'c) Оптимизация баз данных'], correctIndex: 1 },
    { question: '3. Что обеспечивает адаптивность веб-страниц с использованием CSS?', answers: ['a) Возможность загрузки на различных устройствах', 'b) Удобство просмотра на различных размерах экранов', 'c) Автоматическое создание контента'], correctIndex: 1 },
    { question: '4. Какой принцип позволяет отделить структуру и содержание от визуального оформления веб-страницы?', answers: ['a) Принцип отзывчивого дизайна', 'b) Принцип каскадирования', 'c) Принцип разделения ответственности'], correctIndex: 2 },
    { question: '5. Что предоставляет CSS для создания динамичных эффектов на веб-сайтах?', answers: ['a) Возможность программирования на JavaScript', 'b) Создание анимаций, переходов и визуальных эффектов', 'c) Работу с серверной частью'], correctIndex: 1 },
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
