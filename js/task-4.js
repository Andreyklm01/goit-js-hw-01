const credits = '23580';
const pricePerDroids = '3000';

const quantityOfDroids = prompt('Сколько дроидов вы хотите купить?');
let totalPrice;

if (quantityOfDroids === null) {
  alert('Отменено пользователем!');
  console.log('Отменено пользователем!');
} else {
  totalPrice = quantityOfDroids * pricePerDroids;
  console.log('Стоимость дроидов:', totalPrice);

  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
    console.log('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
    console.log(
      `Покупка ${quantityOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
