const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Какой тег HTML представляет собой основной язык разметки для веб-страниц?', answers: ['a) <body>', 'b) <html>', 'c) <head>'], correctIndex: 1 },
    { question: '2. Где содержатся метаданные страницы, такие как заголовок, мета-теги для SEO, ссылки на стили и скрипты?', answers: ['a) В теге <body>', 'b) В теге <head>', 'c) В теге <html>'], correctIndex: 1 },
    { question: '3. Как обозначаются уровни заголовков на веб-странице в порядке убывания важности?', answers: ['a) <h1> - <h6>', 'b) <h6> - <h1>', 'c) <heading1> - <heading6>'], correctIndex: 0 },
    { question: '4. Какой тег используется для создания параграфов на веб-странице?', answers: ['a) <paragraph>', 'b) <p>', 'c) <para>'], correctIndex: 1 },
    { question: '5. Как создать ссылку на другую веб-страницу с использованием HTML?', answers: ['a) <link>', 'b) <a>', 'c) <ref>'], correctIndex: 1 },
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
