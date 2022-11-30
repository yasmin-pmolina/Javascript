//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
let today = new Date();
//- La fecha de tu nacimiento
let birthday = new Date(1989, 10, 3);
console.log(`birthday  `, birthday.toLocaleDateString('en-GB'));
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let flag = today > birthday   
console.log(`today > birthday:`, flag);
//- Una variable que contenga el día de tu nacimiento
let birthdayDay = birthday.getDate();
console.log(`birthdayDay:`, birthdayDay);
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let birthdayMonth = birthday.getMonth() + 1;
console.log(`birthdayMonth:`, birthdayMonth);
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let birthdayYear = birthday.getFullYear();
console.log(`birthdayYear  `, birthdayYear);