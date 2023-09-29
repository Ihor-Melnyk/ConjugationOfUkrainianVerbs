let sex = "male"; // 'female' || 'male';
let firstName;
let surname;
let patronymic;

function setObjFullNameByFullNameString(fullName) {
  const arrayFullName = fullName.split(" ");
  const objFullName = {
    sex: setSexByPatronymic(arrayFullName[2]) || sex,
    surname: arrayFullName?.[0] || "",
    firstName: arrayFullName?.[1] || "",
    patronymic: arrayFullName?.[2] || "",
  };
  return objFullName;
}

function setSexByPatronymic(patronymic) {
  if (!patronymic) return;
  let sex;
  patronymic.endsWith("вна") ? (sex = "female") : (sex = "male");
  return sex;
}
