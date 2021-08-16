/*var str = 'КаЖдЫй ОхОтНиК жЕлАеТ зНаТь';

function change_register(str) {
  // Ваш код
  let string = '';
  for (let i = 0; i < str.length; i++) {
    // debugger;
    if (str[i].toUpperCase() === str[i]) {
      string += str[i].toLowerCase();
      console.log(str[i]);
    } else {
      string += str[i].toUpperCase();
    }
  }
  return string;
}

document.writeln(change_register(str));*/

/*var str = 'every., -/ hunter #! wishes ;: {} to $ % ^ & * know';

function remove_char(str) {
  let string = '';
  for (let i = 0; i < str.length; i++) {
    // debugger;
    if (str[i].match(/[a-z]/)) {
      string += str[i];
    } else if (str[i] === ' ') {
      string += str[i];
    }
  }
  return string;*/
/* let string = '';
  for (let i = 0; i < str.length; i++) {
    // debugger;

    if (str[i].toLowerCase() !== str[i].toUpperCase()) {
      string += str[i];
    }
  }*/
// return string;
// }
/*function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}*/
/*document.writeln(remove_char(str));*/

/*function zeros(num, len, sign) {
  //...ваш код...
  let str = '';
  str += num;
  let length = str.length;
  while (str.length < len) {
    str = '0' + str;
  }

  if (sign) {
    return sign + str;
  }
  return str;
}

document.writeln(zeros(145, 5, '-')); // -00145
document.writeln(zeros(33, 4, '+')); // +0033
document.writeln(zeros(33, 4));*/

/*document.writeln(zeros(145, 5, '-')); // -00145
document.writeln(zeros(33, 4, '+'));  // +0033
document.writeln(zeros(33, 4));   */ // 0033
/*
function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

document.writeln(comparison('string', 'StRiNg')); // true
document.writeln(comparison('ABCDe', 'AbcdW')); // false*/

/*function insensitive_search(str1, str2) {
  if (str1.toLowerCase().includes(str2) === true) {
    console.log('соответствует');
    return 'соответствует';
  } else {
    console.log('не соответствует');
    return 'не соответствует';
  }
}

document.writeln(insensitive_search('Изучаю JavaScript', 'javascript'));
// Соответствует
document.writeln(insensitive_search('Изучаю JavaScript', 'javascriptS'));
// Не соответствует*/
