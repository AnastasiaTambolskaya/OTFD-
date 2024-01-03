function checkCode() {
    // Здесь должен быть ваш эталонный код
    var expectedCode = "console.log('Hello, World!');";
  
    // Получаем код пользователя из textarea
    var userCode = document.getElementById('userCode').value;
  
    // Сравниваем коды
    if (userCode.trim() === expectedCode.trim()) {
      document.getElementById('result').innerText = "Код верный!";
    } else {
      document.getElementById('result').innerText = "Ошибка в коде. Пожалуйста, проверьте и исправьте.";
    }
  }
  