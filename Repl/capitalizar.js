// Escribe una función llamada capitalizar que reciba una cadena 
//y capitalice cada palabra de la cadena.
// Nota: puedes asumir que cada palabra está separada por espacio.

//RegEx Solution
function capitalizar(str) {
    //     let nueCad = str.split(' ');
    //     // for (let i of nueCad) {
    //     //     i[0].toUpperCase();
    //     // }
    //     // for (let i = 0; i < nueCad.length; i++) {
    //     //     nueCad[i][0].toUpperCase();
    //     // }
    //     let result = nueCad.join(' ');
    //     return result;
    // }

    var result = str.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
    return result;
}

//------------------MakeItRealTeacherSolution-----------
function capitalizar(str) {
    const words = str.split(" ");
    for (let i=0; i < words.length; i++) {
      let word = words[i];
      word = word[0].toUpperCase() + word.substr(1);
      words[i] = word;
    }
    
    return words.join(" ");
  }

console.log(capitalizar("pedro perez")); // "Pedro Perez"
console.log(capitalizar("make it real")); // "Make it Real"

// const toTitleCase = (phrase) => {
//     return phrase
//       .toLowerCase()
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   let result = toTitleCase('maRy hAd a lIttLe LaMb');
//   console.log(result);