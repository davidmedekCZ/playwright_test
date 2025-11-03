const actualAge = 0;
const drinkingLimitAge = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingLimitAge) {
  console.log(`${fullName} už může pít alkohol.`); // ? Zpětné apostrofy ve Windows (CZ klávesnice): pravý ALT + ý; dolar alt + ů
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí mu/jí ${
      drinkingLimitAge - actualAge
    } roky/let.`
  );
} else {
  console.log("CHYBA: aktuální věk může být jen kladné číslo!");
}
