const ADMIN_PASSWORD = prompt('Введите пароль:');
let message;

while (true) {
  if (ADMIN_PASSWORD === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
    console.log(message);
    alert(message);
    break;
  } else if (ADMIN_PASSWORD === null) {
    message = 'Отменено пользователем!';
    console.log(message);
    alert(message);
    break;
  } else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
    alert(message);
    break;
  }
}
