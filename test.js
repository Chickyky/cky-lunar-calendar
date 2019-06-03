const lunar = require('./index');

let now = new Date();

let dateLunar = lunar.solar2Lunar(now.getDate(), now.getMonth() + 1, now.getFullYear());
console.log('Solar -> Lunar:', [now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/') , '->', dateLunar[0], dateLunar[1], dateLunar[2]);


let dateSolar = lunar.lunar2Solar(now.getDate(), now.getMonth() + 1, now.getFullYear());
console.log('Lunar -> Solar:', [now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/') , '->', dateSolar[0], dateSolar[1], dateSolar[2]);
