const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Что представляет собой HTML в веб-разработке', answers: ['Язык разметки', 'Язык программирования', 'Язык стилей'], correctIndex: 0 },
    { question: 'Вопрос 2: Какую роль HTML играет в создании веб-страниц?', answers: ['Определение визуального дизайна', 'Управление серверной частью веб-приложения', 'Организация структуры и содержания документа'], correctIndex: 2 },
    { question: 'Вопрос 3: Зачем важна четкая и логичная структура HTML для веб-страниц?', answers: ['Для уменьшения объема кода', 'Улучшение доступности и SEO-оптимизации', 'Только для красивого отображения контента'], correctIndex: 1 },
    { question: 'Вопрос 4: Что предоставляет HTML разработчикам в веб-разработке?', answers: ['Только функциональность веб-приложений', 'Только стилизацию элементов', 'Возможность организации информации на странице'], correctIndex: 2 },
    { question: 'Вопрос 5: Какова ключевая роль верного построения HTML-документа?', answers: ['Создание динамичных и сложных веб-приложений', 'Улучшение доступности и оптимизация для поисковых систем и вспомогательных технологий', 'Понимание содержания только браузерами'], correctIndex: 1 },
    // Добавьте другие вопросы по аналогии
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
    let allQuestionsAnswered = true; // Flag to check if all questions are answered
    
    questions.forEach((question, index) => {
        const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedInput) {
            const userAnswer = parseInt(selectedInput.value);
            if (userAnswer === question.correctIndex) {
                correctAnswers++;
            }
        } else {
            allQuestionsAnswered = false; // Set flag to false if any question is not answered
        }
    });

    if (allQuestionsAnswered) {
        resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
    } else {
        alert('Пожалуйста, ответьте на все вопросы.');
    }
}

// function showResults() {
//     const answerContainers = questionContainer.querySelectorAll('.question');
//     let correctAnswers = 0;
    
//     questions.forEach((question, index) => {
//         const selectedInput = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
//         if (selectedInput) {
//             const userAnswer = parseInt(selectedInput.value);
//             if (userAnswer === question.correctIndex) {
//                 correctAnswers++;
//             }
//         }
//     });

//     resultsContainer.innerHTML = `${correctAnswers} / ${questions.length}`;
// }

buildQuiz();

submitButton.addEventListener('click', showResults);
