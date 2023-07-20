let validate = new JustValidate('.form');

validate.addField("#name", [
 {
  rule: 'customRegexp',
    value: /[а-яА-Я]/,
    errorMessage: 'Недопутимый формат'
 }
]);

validate.addField("#tel", [
 {
  rule: 'customRegexp',
    value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    errorMessage: 'Недопутимый формат'
 }
])