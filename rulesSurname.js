function declineLastNameCase(
  lastName,
  gender,
  lastNameType,
  caseType = "genitive"
) {
  if (lastNameType === "noun") {
    if (caseType === "genitive") {
      if (gender === "male") {
        lastName = lastName
          .replace(/а$/, "и") // закінчення на "а"
          .replace(/я$/, "і") // закінчення на "я"
          .replace(/(ьо|й)$/, "я") // закінчення на "ьо", "й"
          .replace(/єць$/, "йця") // закінчення на "єць"
          .replace(/ець$/, "ця") // закінчення на "ець"
          .replace(
            /(і[бвгґджзклмнпрстфхцчшщ]ь)$/,
            "е" + lastName.slice(-2, -1) + "я"
          ) // закінчення на "і"+приголосна+"ь"
          .replace(/([бвгґджзклмнпрстфхцчшщ]ь)$/, lastName.slice(-2, -1) + "я") // закінчення на приголосна+"ь"
          .replace(
            /(і[бвгґджзклмнпрстфхцчшщ])$/,
            "о" + lastName.slice(-1) + "а"
          ) // закінчення на "і"+приголосна
          .replace(/([бвгґджзклмнпрстфхцчшщ])$/, lastName.slice(-1) + "а") // закінчення на приголосну
          .replace(/о$/, "а"); // закінчення на "о"
      } else if (gender === "female") {
        lastName = lastName
          .replace(/а$/, "и") // закінчення на "а"
          .replace(/я$/, "і"); // закінчення на "я"
      }
    }
  } else if (lastNameType === "adjective") {
    if (caseType === "genitive") {
      if (gender === "male") {
        lastName = lastName
          .replace(/(ой|ий)$/, "ого") // закінчення на "ой", "ий"
          .replace(/ій$/, "ього") // закінчення на "ій"
          .replace(/ов$/, "ова") // закінчення на "ов"
          .replace(/єв$/, "єва") // закінчення на "єв"
          .replace(/ів$/, "іва") // закінчення на "ів"
          .replace(/їв$/, "їва") // закінчення на "їв"
          .replace(/ин$/, "ина") // закінчення на "ин"
          .replace(/ін$/, "іна") // закінчення на "ін"
          .replace(/їн$/, "їна"); // закінчення на "їн"
      } else if (gender === "female") {
        lastName = lastName
          .replace(/(а)$/, "ої") // закінчення на "а"
          .replace(
            /([бвгґджзклмнпрстфхцчшщ]я)$/,
            lastName.slice(-2, -1) + "ьої"
          ); // закінчення на приголосна+"я"
      }
    }
  }

  return lastName;
}
