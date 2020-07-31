function moneyBox(coins) {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(saveCoins);
}
moneyBox(20);
moneyBox(40);

const moneyBox = () => {
  let saveCoins = 0;
  const countMoney = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
  };
  return countMoney;
};

let total = moneyBox();
total(10);
total(10);
