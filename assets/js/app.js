window.onload = () => {
  /* Botones */
  const btn = document.getElementById('btn');
  const btnIf = document.getElementById('btn-if');
  const btnSwitch = document.getElementById('btn-switch');
  const btnWhile = document.getElementById('btn-while');
  const btnDoWhile = document.getElementById('btn-dowhile');
  const btnFor = document.getElementById('btn-for');

  btn.addEventListener('click', function() {
    alert('Holiii');
  });

  /* Ejemplo IF */

  btnIf.addEventListener('click', function() {
    let age = 18;
    /*
    if (age >= 18 && age <= 30) {
      console.log('Masia juventud en tu vida');
    } else if (age > 30) {
      console.log('Nah que decir');
    } else {
      console.log('masiao baby');
    }
    */
   const mensajeUno = 'a';
   const mensajeDos = 'b';
   const mensajeTres = 'c';
    if (age >= 18 && age <= 30) {
      return console.log(mensajeUno);
    }

    if (age > 30) {
      return console.log(mensajeDos);
    }

    return console.log(mensajeTres);

  });

  // SWITCH
  btnSwitch.addEventListener('click', function() {
    let num = '5';
    switch (num) {
      case '5':
        alert('es un string');
        break;
      case 5 :
        alert('es un numero');
        break;
      default: 
        alert('chao, no es string ni número');
    }
  });

  // EJEMPLO WHILE

  let counter = 0;

  while (counter < 5) {
    alert(counter);
    counter++;
  }


  for (i = 0; i < 5; i++) {
    console.log(i);
  }

  // ES5
  // expression
  var square = function(num) {
    return num * num;
  }

  //declaration
  function square(num) {
    return num * num;
  }

  //ES6
  const square = (num) => num * num;


  const selection = (option) => {
    if (option === 'cat') {
      alert('miau');
    } else if (option === 'dog') {
      alert('guau');
    } else {
      alert('cuack');
    }
  }

}   
