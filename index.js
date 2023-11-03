function setObjFullNameByFullNameString(fullName) {
  if (fullName) {
    const arrayFullName = fullName.split(" ");
    const objFullName = {
      gender: setGenderByPatronymic(arrayFullName[2]),
      lastName: arrayFullName?.[0] || "",
      firstName: arrayFullName?.[1] || "",
      patronymic: arrayFullName?.[2] || "",
      lastNameType: "noun",
    };
    return objFullName;
  }
}

function setLastNameType(fullName, objFullName) {
  const data = EdocsApi.getDictionaryData("TypeSurName2", "", [
    { attributeCode: "Title", value: objFullName.lastName.toLowerCase() },
  ]);
  if (data.length) {
    //зміна "типу прізвища" на прикметниковий
    objFullName.lastNameType = "adjective";
  }
  return objFullName;
}

function setGenderByPatronymic(patronymic) {
  if (!patronymic) return "male";
  let gender;
  patronymic.endsWith("вна") ? (gender = "female") : (gender = "male");
  return gender;
}
