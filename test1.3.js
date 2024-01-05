const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');


const questions = [
    { question: 'Вопрос 1: Зачем разработчики тестируют веб-приложения в различных браузерах?', answers: ['Для увеличения производительности', 'Для обеспечения совместимости и корректного отображения', 'Для изменения внешнего вида веб-сайта'], correctIndex: 1 },
    { question: 'Вопрос 2: Какие инструменты предоставляют браузеры для отладки и анализа кода?', answers: ['Только консоль', 'Инспектор элементов, консоль, сетевая панель', 'Только инспектор элементов'], correctIndex: 1 },
    { question: 'Вопрос 3: Что позволяет делать инспектор элементов?', answers: [' Только просматривать HTML-код', 'Редактировать HTML и CSS в браузере', 'Проводить анализ JavaScript-кода'], correctIndex: 1 },
    { question: 'Вопрос 4: Для чего используется консоль в инструментах разработчика?', answers: ['Для просмотра HTML-кода', 'Для отладки JavaScript, вывода сообщений и выполнения команд', 'Для анализа сетевых запросов'], correctIndex: 1 },
    { question: 'Вопрос 5: Какую информацию предоставляет сетевая панель?', answers: ['Время загрузки только HTML-кода', 'Запросы к серверу, время загрузки ресурсов и оптимизацию производительности', 'Только количество запросов к серверу'], correctIndex: 1 },
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
