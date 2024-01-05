const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-button');

const questions = [
    { question: '1. Как получить элемент по его идентификатору с использованием JavaScript?', answers: ['a) getElementById(\'myElement\');', 'b) selectElement(\'myElement\');', 'c) queryElement(\'myElement\');'], correctIndex: 0 },
    { question: '2. Как изменить текстовое содержимое элемента в DOM с использованием JavaScript?', answers: ['a) element.textContent = \'Новый текст\';', 'b) element.innerHtml = \'Новый текст\';', 'c) element.innerText = \'Новый текст\';'], correctIndex: 2 },
    { question: '3. Как добавить новый элемент в DOM с использованием JavaScript?', answers: ['a) addNewElement(\'p\');', 'b) document.createElement(\'div\');', 'c) createNewElement(\'span\');'], correctIndex: 1 },
    { question: '4. Как добавить обработчик клика к элементу в DOM?', answers: ['a) element.attachEvent(\'click\', myFunction);', 'b) element.addEventListener(\'click\', myFunction);', 'c) element.click(myFunction);'], correctIndex: 1 },
    { question: '5. Как удалить класс из элемента в DOM с использованием JavaScript?', answers: ['a) element.removeClassName(\'highlight\');', 'b) element.removeClass(\'highlight\');', 'c) element.classList.remove(\'highlight\');'], correctIndex: 2 },
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
