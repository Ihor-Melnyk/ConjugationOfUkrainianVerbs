function declineFirstNameCase(firstName, gender, caseType = "genitive") {
  if (caseType === "genitive") {
    if (gender === "male") {
      firstName = firstName
        .replace(/(і[бвгґджзклмнпрстфхцчшщ])$/, "о" + firstName.slice(-1) + "а") // закінчення на "і"+приголосна
        .replace(/а$/, "и") // закінчення на "а";
        .replace(/я$/, "і") // закінчення на "я";
        .replace(/[уеіаоєяию]й$/, firstName.slice(-1) + "я") // закінчення на голосну+"й";
        .replace(/(Ігор)$/, firstName + "я") // вийняток "Ігор"
        .replace(/(Лазар)$/, firstName + "я") // вийняток "Лазар"
        .replace(/([бвгґджзклмнпрстфхцчшщ])$/, firstName.slice(-1) + "а") // закінчення на приголосну
        .replace(/(Лаврін)$/, firstName + "а") // вийняток "Лаврін"
        .replace(/(Олефір)$/, firstName + "а") // вийняток "Олефір"
        .replace(/(і[бвгґджзклмнпрстфхцчшщ])$/, "о" + firstName.slice(-1) + "а") // закінчення на "і"+приголосна
        .replace(/([бвгґджзклмнпрстфхцчшщ]о)$/, firstName.slice(-2, -1) + "а"); // закінчення на приголосна+"о";
    } else if (gender === "female") {
      firstName = firstName
        .replace(/([бвгґджзклмнпрстфхцчшщ])$/, firstName.slice(-1) + "і") // закінчення на приголосну
        .replace(/іа$/, "іі") // закінчення на "іа";
        .replace(/а$/, "и") // закінчення на "а";
        .replace(/ія$/, "ії") // закінчення на "ія";
        .replace(/(я|ь)$/, "і"); // закінчення на "я" або "ь";
    }
  }

  return firstName;
}
