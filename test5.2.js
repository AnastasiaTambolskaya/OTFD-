const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что представляет собой компонент в компонентном подходе?', answers: ['a) Строка кода', 'b) Отдельная функциональная единица', 'c) Изображение'], correctIndex: 1 },
    { question: '2. Какой принцип компонентного подхода позволяет использовать компоненты в различных частях приложения или проекта?', answers: ['a) Модульность', 'b) Переиспользование Кода', 'c) Изолированность'], correctIndex: 1 },
    { question: '3. Что обеспечивает избегание конфликтов и неожиданных взаимодействий между компонентами?', answers: ['a) Модульность', 'b) Изолированность', 'c) Управление Состоянием'], correctIndex: 2 },
    { question: '4. Какой принцип позволяет компонентам иметь собственные состояния и взаимодействовать с другими компонентами?', answers: ['a) Модульность', 'b) Управление Состоянием', 'c) Переиспользование Кода'], correctIndex: 1 },
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
