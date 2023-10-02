import alphabet from "./Alphabet";

// 1. 1. Українські та інші слов’янські прізвища, що мають закінчення іменників І або ІІ відміни
// 1.1. І відміна -  закінчуються на "а", "я"
// 1.2. ІІ відміна - закінчуються на "о" + чоловічий рід
//2. Прізвища прикметникового типу на -ий, -ій відмінюються згідно з правилами відмінювання відповідних прикметників твердої або м’якої групи чоловічого й жіночого родів, множини.
//3. Чоловічі прізвища прикметникового типу на -ов, -ев (-єв), -ів (-їв), -ин, -ін (-їн)

function setCaseSurname(surname, sex = "male", grammaticalCase = "genitive") {
  debugger;
  if (!surname) return;
  //1.
  // закінчення на "а"
  if (surname.endsWith("а")) {
    return surname.slice(0, -1) + "и";
  }
  // закінчення на "я"
  if (surname.endsWith("я")) {
    return surname.slice(0, -1) + "і";
  }
  // закінчення на "о" + чоловічий рід
  if (surname.endsWith("о") && sex == "male") {
    return surname.slice(0, -1) + "а";
  }

  // закінчення на "ьо"
  if (surname.endsWith("ьо")) {
    return surname.slice(0, -2) + "я";
  }

  // закінчення "і" + приголосна + літера "ь" + чоловічий рід "...ідь"
  if (
    surname.endsWith(
      "і" +
        alphabet
          .filter((x) => x.sound == "consonant")
          .find((x) => x.letter == surname.slice(-2, -1))?.letter +
        "ь"
    ) &&
    sex == "male"
  )
    return surname.slice(0, -3) + "е" + surname.slice(-2, -1) + "я";

  // закінчення на приголосну + чоловічий рід + перед приголосною, літера "і"
  if (
    surname.endsWith(
      "і" +
        alphabet
          .filter((x) => x.sound == "consonant")
          .find((x) => x.letter == surname.slice(-1))?.letter
    ) &&
    sex == "male"
  )
    return surname.slice(0, -2) + "о" + surname.slice(-1) + "а";

  // закінчення на "й" + чоловічий рід
  if (surname.endsWith("й") && sex == "male") return surname.slice(0, -1) + "я";

  // закінчення на приголосну + чоловічий рід
  if (
    surname.endsWith(
      alphabet
        .filter((x) => x.sound == "consonant")
        .find((x) => x.letter == surname.slice(-1))?.letter
    ) &&
    sex == "male"
  )
    return surname + "а";

  if (surname.endsWith("ій") || surname.endsWith("ий")) {
    return surname.slice(0, -1) + "и";
  }

  //2
  // закінчення на "ий"
  if (surname.endsWith("ий")) {
    return surname.slice(0, -2) + "ого";
  }
  // закінчення на "ій"
  if (surname.endsWith("ій")) {
    return surname.slice(0, -2) + "ього";
  }

  //3
}
