const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Что представляют собой селекторы в CSS?', answers: ['a) Язык программирования', 'b) Средства определения внешнего вида HTML-элементов', 'c) Идентификаторы элементов'], correctIndex: 1 },
    { question: '2. Какой селектор применяет стили ко всем элементам определенного типа?', answers: ['a) Идентификатор', 'b) Типовой селектор', 'c) Класс'], correctIndex: 1 },
    { question: '3. Что обозначает селектор с хэш-идентификатором в CSS?', answers: ['a) Применяет стили ко всем элементам', 'b) Применяет стили к элементу с определенным идентификатором', 'c) Применяет стили к элементам с определенным классом'], correctIndex: 1 },
    { question: '4. Какие свойства CSS отвечают за управление цветом текста и фона элемента?', answers: ['a) text-color и background', 'b) color и background-color', 'c) font-color и background'], correctIndex: 1 },
    { question: '5. Что делает свойство font-family в CSS?', answers: ['a) Устанавливает цвет текста', 'b) Определяет семейство шрифтов текста', 'c) Задает размер шрифта'], correctIndex: 1 },
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
