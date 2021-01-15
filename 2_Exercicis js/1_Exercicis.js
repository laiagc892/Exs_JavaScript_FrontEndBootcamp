console.log("JavaScript carregat des d'un document .js dins el <body>");

// document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:")



//* -------------------- VARIABLES --------------------
console.log('%c-------------------- VARIABLES --------------------', 'color: orangered');

console.log("%c---------- Exercici 1 ----------", "color: green");
// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi
//* OPCIÓ 1, amb variable auxiliar:
buit = primer;
primer = segon;
segon = buit;

//* OPCIÓ 1, amb desestructuració:
[primer, segon] = [segon, primer]

console.log(primer,segon);  // ha de mostrar 2 1



//* -------------------- FUNCIONS --------------------
console.log('%c-------------------- FUNCIONS --------------------', 'color: orangered');

console.log("%c---------- Exercici 2 ----------", "color: green");
// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" a l'executar-la

// TODO: aquí la definició de psicolog()
function psicologo() {
    console.log("Com estàs?");
}

psicologo();


console.log("%c---------- Exercici 3 ----------", "color: green");
// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta()
function pregunta(menjar) {
    console.log(`T'agrada ${menjar}?`);
}

pregunta("la pizza");


console.log("%c---------- Exercici 4 ----------", "color: green");
// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta2()

function pregunta2(fastfood) {
    return "T'agrada " + fastfood;
}

console.log(pregunta2("la pizza") + " amb piña?");


console.log("%c---------- Exercici 5 ----------", "color: green");
// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució()

function metresCubicsALitres(metres3) {
    let litres;
    return litres = metres3 * 1000;
}

function mostrarSolució() {
    console.log(`${m3} metres cúbics són ${metresCubicsALitres(m3)} litres`);
}

mostrarSolució()

console.log("%c---------- Exercici 6 ----------", "color: green");
// exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners()

function afegirDiners(quant) {
    diners += quant
}

function gastarDiners(quant) {
    diners -= quant
}

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



//* -------------------- CONDICIONALS --------------------
console.log('%c-------------------- CONDICIONALS --------------------', 'color: orangered');

console.log("%c---------- Exercici 7 ----------", "color: green");
// exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

// TODO: editar el missatge del prompt()

//! PROVISIONAL var talla = prompt("Quina talla de samarreta vols? (S, M, L, XL)");

// TODO: estructura condicional que digui per la consola la talla escollida

//! PROVISIONAL switch (talla.toUpperCase()) {
//! PROVISIONAL     case "S":
//! PROVISIONAL         console.log("Has sel·leccionat la talla %cS", "font-weight: bold");
//! PROVISIONAL         break;
//! PROVISIONAL     case "M":
//! PROVISIONAL         console.log("Has sel·leccionat la talla %cM", "font-weight: bold");
//! PROVISIONAL         break;
//! PROVISIONAL     case "L":
//! PROVISIONAL         console.log("Has sel·leccionat la talla %cL", "font-weight: bold");
//! PROVISIONAL         break;
//! PROVISIONAL     case "XL":
//! PROVISIONAL         console.log("Has sel·leccionat la talla %cXL", "font-weight: bold");
//! PROVISIONAL         break;

//! PROVISIONAL     default:
//! PROVISIONAL         console.log(`%c${talla} no és una talla vàlida. Escull entre S, M, L i XL.`, "color: red; font-weight: bold");
//! PROVISIONAL         break;
//! PROVISIONAL }

//! Solució millor:
// (omar exs)


console.log("%c---------- Exercici 8 ----------", "color: green");
// exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes

function cercle(radi, mode) {
    if (mode == "P") {
        console.log(2 * Math.PI * radi);
    } else if (mode == "A") {
        console.log(Math.PI * radi**2);
    } else {
        console.log('%cEl mode introduït no és vàlid', 'color: red');
    }
}

cercle(radi, mode);
cercle(radi, "A");


console.log("%c---------- Exercici 9 ----------", "color: green");
// exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()

function poligon(longCostat, numCostats) {
    if (numCostats < 3) return console.log("Ruc!");
    
    let apotema = longCostat / (2 * Math.tan(Math.PI / numCostats));    // Utilitzem les fórmules per fer els càlculs corresponents. 
    P = longCostat * numCostats;
    A = P * apotema / 2;
    console.log(`El poígon regular de costat ${longCostat} i ${numCostats} costats té un PERÍMETRE de ${P.toFixed(2)} i una ÀREA de ${A.toFixed(2)}.`);
}

poligon(costat, costats);


console.log("%c---------- Exercici 10 ----------", "color: green");
// exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

// TODO: defineix la funció botiga()

/*  INSTRUCCIONS SUBCODI (meves)
funció. pregunta item
barret. pregunta tipus barret
samarreta/pantaló. triar color
triar talla (de qualsevol de les tres coses)
log de la cadena resultant
*/

//! PROVISIONAL function botiga() {
//! PROVISIONAL     let item = prompt('Quin ítem vols? (Samarreta, pantaló o barret)').toLowerCase();

//! PROVISIONAL     if (item == 'barret') {
//! PROVISIONAL         let tipusBarret = prompt('De quin tipus el vols? (Copa, pirata, gorra o llana)').toLowerCase();
//! PROVISIONAL         if (!(tipusBarret == 'copa' || tipusBarret == 'pirata' || tipusBarret == 'gorra' || tipusBarret == 'llana')) {
//! PROVISIONAL             console.log('%cNo has definit un tipus de barret vàlid', 'color: red');
//! PROVISIONAL             return      // "return" finalitza l'execució de la funció, p.e., quan hi hauria un error i volem que la pari
//! PROVISIONAL         } else {
//! PROVISIONAL             item = (tipusBarret == 'gorra') ? 'una gorra' : `un barret de ${tipusBarret}`;
//             // ternari, és una mica com un if en versió pregunta que respon dues coses segons es compleix o no.
//! PROVISIONAL         }
//! PROVISIONAL     } else if (item == 'samarreta' || item == 'pantaló' || item == 'pantalo') {
//! PROVISIONAL         let color = prompt('De quin color ho vols?').toLowerCase();
//! PROVISIONAL         item = (item == 'samarreta') ? `una samarreta de color ${color}` : `un pantaló de color ${color}`
//! PROVISIONAL     } else {
//! PROVISIONAL         console.log('%cNo has definit un ítem vàlid', 'color: red');
//! PROVISIONAL         return
//! PROVISIONAL     }

//! PROVISIONAL     let talla = prompt('Quina talla vols? (S, M, L, XL)').toUpperCase();

//! PROVISIONAL     if (!(talla == 'S' || talla == 'M' || talla == 'L' || talla == 'XL')) {
//! PROVISIONAL         console.log('%cNo has definit una talla vàlida', 'color: red');
//! PROVISIONAL         return
//! PROVISIONAL     }

//! PROVISIONAL     return `Has demanat %c${item}%c de la talla %c${talla}`;
//! PROVISIONAL }

//! PROVISIONAL var carrito = botiga();
//! PROVISIONAL if (carrito != undefined) {
//! PROVISIONAL     console.log(carrito, 'color: purple', 'color: default', 'color: purple');  // això tornarà "Has demanat un barret de pirata (talla L)"
//! PROVISIONAL }



//* -------------------- MÈTODES NUMBERS --------------------
console.log('%c-------------------- MÈTODES NUMBERS --------------------', 'color: orangered');

console.log("%c---------- Exercici 11 ----------", "color: green");
// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, potència, arrels quadrades i cúbiques)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)

//! PROVISIONAL function calculadora() {
//! PROVISIONAL     var x = parseFloat(prompt("Introdueix el primer número de l'operació"));
//! PROVISIONAL 
//! PROVISIONAL     if (x == null || isNaN(x)) {    // Comprova el primer número
//! PROVISIONAL         console.log(`%c"${x}" no és un número vàlid`, `color: red; font-weight: bold`);
//! PROVISIONAL     }
//! PROVISIONAL 
//! PROVISIONAL     var s = prompt("Introdueix el símbol de l'operació: +, -, *, /, **(potència), arrel (quadrada) o arrel3 (cúbica)");
//! PROVISIONAL     var symbols = ["+", "-", "*", "/", "**"];
//! PROVISIONAL     
//! PROVISIONAL     if (s != null && symbols.includes(s)) {
//! PROVISIONAL         var y = parseFloat(prompt("Introdueix el segon número de l'operació"));
//! PROVISIONAL         if (y == null || isNaN(y)) {    // Comprova el segon número
//! PROVISIONAL             console.log(`%c"${x}" no és un número vàlid`, `color: red; font-weight: bold`);
//! PROVISIONAL         } else {
//! PROVISIONAL             if (s == "+") {
//! PROVISIONAL                 console.log(`${x} + ${y} = ${x + y}`);
//! PROVISIONAL             } else if (s == "-") {
//! PROVISIONAL                 console.log(`${x} - ${y} = ${x - y}`);
//! PROVISIONAL             } else if (s == "*") {
//! PROVISIONAL                 console.log(`${x} * ${y} = ${x * y}`);
//! PROVISIONAL             } else if (s == "/" && y != 0) {
//! PROVISIONAL                 console.log(`${x} / ${y} = ${x / y}`);
//! PROVISIONAL             } else if (s == "/" && y == 0) {    // excepció per dividir per 0
//! PROVISIONAL                 console.log(`%c No es pot dividir per zero!`, "color: red");
//! PROVISIONAL             } else if (s == "**") {
//! PROVISIONAL                 console.log(`${x} ** ${y} = ${x ** y}`);
//! PROVISIONAL             }
//! PROVISIONAL         }
//! PROVISIONAL     } else if (s != null && s.toLowerCase() == "arrel") {
//! PROVISIONAL         console.log(`√${x} = ${Math.sqrt(x)}`);
//! PROVISIONAL     } else if (s != null && s.toLowerCase() == "arrel3") {
//! PROVISIONAL         console.log(`3√${x} = ${Math.cbrt(x)}`);
//! PROVISIONAL     }
//! PROVISIONAL     else {
//! PROVISIONAL         console.log(`%c"${s}" no és una operació vàlida`, `color: red; font-weight: bold`);
//! PROVISIONAL     }
//! PROVISIONAL     
//! PROVISIONAL }
//! PROVISIONAL 
//! PROVISIONAL calculadora();


console.log("%c---------- Exercici 12 ----------", "color: green");
// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle

var c1, c2, c3;

//* ⚠️ LES FUNCIONS ARROW S'HAN DE DEFINIR ABANS DE CRIDAR-LES!!!

//* Funció OPCIÓ 1:
// const triangleRectangle = (ca1, ca2, hip) => {
//     if (hip**2 == ca1**2 + ca2**2) {
//         return true;
//     } else {
//         return false;
//     }
// }

//* Funció OPCIÓ 2:
const triangleRectangle = (ca1, ca2, hip) => {
    return (hip**2 == ca1**2 + ca2**2) ? true : false
}

c1 = 3;
c2 = 4;
c3 = 5;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false

// TODO: defineix la funció triangleRectangle()

//* Funció OPCIÓ 3:
// function triangleRectangle(ca1, ca2, hip) {
//     if (hip**2 == ca1**2 + ca2**2) {
//         return true;
//     } else {
//         return false;
//     }
// }


console.log("%c---------- Exercici 13 ----------", "color: green");
// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle

c1 = 30;
c2 = 40;

// TODO: defineix la funció calculaHipotenusa()

const calculaHipotenusa = (ca1, ca2) => 
`La hipotenusa de triangle amb catets ${ca1} i ${ca2} és ${(Math.sqrt(ca1**2 + ca2**2)).toFixed(2)}.`;

// TODO: defineix la funció calculaAngles()

const calculaAngles = (ca1, ca2) => {
    let ang1 = Math.atan(ca2 / ca1) * (180/Math.PI);   // Que és el mateix que Math.atan2(ca1, ca2), ja que "Math.atan2() fa l'arctangent del quocient dels dos arguments" (revisar per si un cas).
    let ang2 = Math.atan(ca1 / ca2) * (180/Math.PI);
    return `Els angles del triangle rectangle de costats ${ca1} i ${ca2} són ${ang1.toFixed(2)}º i ${ang2.toFixed(2)}º.`
}

console.log(calculaHipotenusa(c1,c2));  // ha de donar 50

console.log(calculaAngles(c1,c2));      // ha de donar 53.13º i 36.87º



//* -------------------- MÈTODES STRINGS --------------------
console.log('%c-------------------- MÈTODES STRINGS --------------------', 'color: orangered');

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

console.log("%c---------- Exercici 14 ----------", "color: green");
// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

// TODO: defineix la funció convertirEnEnter()

/*  Comprovar si és un num (bucle de la string amb .length)
comprovar fins quan són num els següents (parar quan no sigui num)
extreure/pintar aquell tros de string (acumulador?)
*/

//* OPCIÓ 1, comprovant que numEnter ja no està buida (plena per un número, almenys):
const convertirEnEnter = (str) => {
    let numEnter = "";
    for (let i = 0; i < str.length; i++) {
        if ( !isNaN(str[i]) ) {
            numEnter += str[i];
        } else if ( numEnter != "" && isNaN(str[i]) ) {
            // return parseFloat(numEnter);
            break;
        } else {
            continue;    // Podríem no haver-lo posat, però així es pot llegir millor què passa.
        }
    }
    return parseFloat(numEnter);    // L'hem de posar, ja que si l'últim caràcter de la string és un número, el bucle no té més caràcters per comprovar que no son números i acabar extreiet el num (resulta undefined).
}

string = "hola"
console.log(string[4]);

//* OPCIÓ 2, amb boleanes:
// const convertirEnEnter = (str) => {
//     let numEnter = "";
//     let esNum = false;
//     for (let i = 0; i <= str.length; i++) {
//         if (!isNaN(str[i])) {
//             numEnter += str[i];
//             esNum = true;
//         } else if (esNum == true && isNaN(str[i])){
//             return numEnter
//         } else {
//             continue
//         }
//     }
//     return numEnter
// }


console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45


console.log("%c---------- Exercici 15 ----------", "color: green");
// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()

const convertirEnDecimal = (str) => {
    let numEnDecimal = "";
    let symDecimal = [".", ",", "'"];
    let jaTeUnaComa = false;
    
    for (let i = 0; i < str.length; i++) {
        if ( !isNaN(str[i]) ) {
            numEnDecimal += str[i];
        } else if ( numEnDecimal != "" && symDecimal.includes(str[i]) && !jaTeUnaComa){     // és el mateix que jaTeUnaComa == false
            numEnDecimal += ".";
            jaTeUnaComa = true;
        } else if ( numEnDecimal != "" && isNaN(str[i]) ) {
            break;
        } else {
            continue    // Podríem no haver-lo posat, però així es pot llegir millor què passa.
        }
    }
    return numEnDecimal;
}

console.log(convertirEnDecimal("hola89'23.4"));     // ha de tornar 89.234
console.log(convertirEnDecimal("43'35adeu"));      // ha de tornar 43.35
console.log(convertirEnDecimal("amor45.9odi"));    // ha de tornar 45.9


console.log("%c---------- Exercici 16 ----------", "color: green");
// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

// TODO: defineix la funció valorAbsolut()

//* OPCIÓ 1, amb ternari d'una línia BADUM!:
const valorAbsolut = (valor) => parseFloat(String(valor)[0] == "-" ? String(valor).slice(1) : String(valor));

//* OPCIÓ 1, amb ternari amb operació amb 0:
// const valorAbsolut = (valor) => valor > 0 ? valor : 0 - valor;


//* OPCIÓ 1.2, amb ternari d'una línia BADUM!:
// const valorAbsolut = (valor) => {
//     return parseFloat((valor += "")[0] == "-" ? valor.slice(1) : valor)
// }

//* OPCIÓ 1.3, amb ternari:
// const valorAbsolut = (valor) => {
//     valor += "";
//     return parseFloat(valor[0] == "-" ? valor.slice(1) : valor)
// }

//* OPCIÓ 2, amb condicional:
// const valorAbsolut = (valor) => {
//     valor += ""
//     if (valor[0] == "-") {
//         return valor.slice(1);
//     }
//     return valor
// }

console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678


console.log("%c---------- Exercici 17 ----------", "color: green");
// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "aaaaabcdef!?*";

console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f

// TODO defineix la funció lletraRandom()

//* OPCIÓ 1, amb do/while:
function lletraRandom(str) {
    do {
        var lletra = str[Math.floor(Math.random() * str.length)];
        // És igual que:    let index = Math.floor(Math.random() * str.length);
        //                  lletra = str[index];
        // console.log(lletra);    // A la funció no fa res, era per veure amb el quokka que quan surten signes va al while i tornar a intentar-ho per agafar una lletra:
    } while (lletra.toUpperCase() == lletra.toLowerCase())
    return lletra
}

//* OPCIÓ 2, amb while:
// function lletraRandom(str) {
//     let lletra = ""
//     console.log(lletra);    // A la funció no fa res, era per veure amb el quokka que quan surten signes va al while i tornar a intentar-ho per agafar una lletra:
//     while (lletra.toUpperCase() == lletra.toLowerCase()) {
//         index = Math.floor(Math.random() * str.length);
//         lletra = str[index];
//     }
//     return lletra
// }

//* OPCIÓ 3, amb codi + while darrera (com el do/while però sense el do):
// function lletraRandom(str) {
//     let index = Math.floor(Math.random() * str.length);
//     let lletra = str[index];
//     console.log(lletra);    // A la funció no fa res, era per veure amb el quokka que quan surten signes va al while i tornar a intentar-ho per agafar una lletra:
//     while (lletra.toUpperCase() == lletra.toLowerCase()) {
//         index = Math.floor(Math.random() * str.length);
//         lletra = str[index];
//     }
//     return lletra
// }


console.log("%c---------- Exercici 18 ----------", "color: green");
// exercici 18: crea una funció que agafi un text i li separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

// TODO: defineix la funció separarParaules()

/*  Localitzar espais,
separar paraules amb slice
*/

//* OPCIÓ 1, amb for/of:
function separarParaules(frase) {
    let paraules = "";
    for (caracter of frase) {
        if (caracter.toUpperCase() != caracter.toLowerCase()) {
            // Si és una lletra...:
            paraules += caracter;
        } else if ( caracter.toUpperCase() == caracter.toLowerCase() && paraules[paraules.length-1] != " " ) {
            // Si NO és una lletra i l'anterior ho era...:
            paraules += " ";
        }
    }
    return paraules
}

//* OPCIÓ 2, amb for amb índex:
// function separarParaules(frase) {
//     let paraules = "";
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i].toUpperCase() != frase[i].toLowerCase()) {
//             // Si és una lletra...:
//             paraules += frase[i];
//         } else if ( frase[i].toUpperCase() == frase[i].toLowerCase() && paraules[paraules.length-1] != " " ) {
//             // Si NO és una lletra i l'anterior ho era...:
//             paraules += " ";
//         }
//     }
//     return paraules
// }


console.log(paraules);


console.log("%c---------- Exercici 19 ----------", "color: green");
// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log(paraulaRandom(text));

// TODO defineix la funció paraulaRandom()

/*  SUBCODI Utilitzar seprarar paraules d'abans,
acumular paraula al localitzar espais (en bucle)
*/

function paraulaRandom(frase) {
    let fraseEspais = separarParaules(frase);
    let paraules = [];
    let unaParaula = "";
    
    for (caracter of fraseEspais) {
        if (caracter.toUpperCase() != caracter.toLowerCase()) {    // Si és una lletra...:
            unaParaula += caracter;
            // console.log(unaParaula);
        } else if (caracter == " ") {
            // console.log(unaParaula);
            paraules.push(unaParaula);    // el mètode push() afegeix al final d'un array un o més elements
            unaParaula = "";
        }
    }
    // console.log(paraules);
    return paraules [ Math.floor(Math.random() * paraules.length) ]
}


console.log("%c---------- Exercici 20 ----------", "color: green");
// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

/*  HELP:
Taula dates horòscop: https://es.wikipedia.org/wiki/Zodiaco#Tabla_de_fechas
Icones horòscops en text i emojis: https://en.wikipedia.org/wiki/Astrological_symbols#Signs_of_the_zodiac
Mini descripcions horòscops: https://www.boredpanda.com/hilarious-horoscope-1979/?utm_source=google&utm_medium=organic&utm_campaign=organic
*/
// TODO defineix la funció horoscop()

//! PROVISIONAL const horoscop = () => {
//! PROVISIONAL     let data, dia, mes, signe, descr;
//! PROVISIONAL     data = prompt("Quan vas néixer? DD/MM");
//! PROVISIONAL     dia = data.slice(0, 2);
//! PROVISIONAL     mes = data.slice(3);
//! PROVISIONAL     signe = "";
//! PROVISIONAL     descr = "";
//! PROVISIONAL 
//! PROVISIONAL     // debugger
//! PROVISIONAL     if (
//! PROVISIONAL         (data.length != 5 || data[2] != "/") ||
//! PROVISIONAL         !(
//! PROVISIONAL         ((1 <= dia && dia <= 31) && (mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12) ) ||
//! PROVISIONAL         ((1 <= dia && dia <= 30) && (mes==4||mes==6||mes==9||mes==11) ) ||
//! PROVISIONAL         ((1 <= dia && dia <= 29) && (mes==2) )
//! PROVISIONAL         )
//! PROVISIONAL         ) {
//! PROVISIONAL             return console.log(`%c${data} és una data invàlida`, "color: red");
//! PROVISIONAL         }
//! PROVISIONAL     // ------------------------------------------------------------------------------------------------
//! PROVISIONAL 
//! PROVISIONAL     if ((21<=dia && dia<=31 && mes==3) || (1<=dia && dia<=20 && mes==4)) {    // Àries
//! PROVISIONAL         signe = "Àries ♈︎";
//! PROVISIONAL         descr = "You are the pioneer type and think that most people are d**kheads. You are quick tempered, impatient and scornful of advice. You are a prick.";
//! PROVISIONAL     } else if ((21<=dia && dia<=30 && mes==4) || (1<=dia && dia<=20 && mes==5)) {   // Taure
//! PROVISIONAL         signe = "Taure ♉︎";
//! PROVISIONAL         descr = "You are practical and persistent. You have dogged determination to work like hell. Most people think you are stubborn and bull-headed. Your nothing but a dam communist.";
//! PROVISIONAL     } else if ((21<=dia && dia<=31 && mes==5) || (1<=dia && dia<=21 && mes==6)) {   // Gèminis (o Bessons)
//! PROVISIONAL         signe = "Gèminis (o Bessons) ♊︎";
//! PROVISIONAL         descr = "You are a quick and intelligent thinker. People like you because you are bi-sexual. You are inclined to expect too much for too little. This means you are a cheap bastard/b**ch.";
//! PROVISIONAL     } else if ((21<=dia && dia<=30 && mes==4) || (1<=dia && dia<=20 && mes==5)) {   // Càncer (o Cranc)
//! PROVISIONAL         signe = "Càncer (o Cranc) ♋︎";
//! PROVISIONAL         descr = "You are sympathetic and understanding of people’s problems, which makes you a sucker. You are always putting things off. That is why you will always be on welfare and won’t be worth a [damn]. Everybody in prison is a cancer.";
//! PROVISIONAL     } else if ((23<=dia && dia<=31 && mes==7) || (1<=dia && dia<=22 && mes==8)) {   // Lleó
//! PROVISIONAL         signe = "Lleó ♌︎";
//! PROVISIONAL         descr = "You consider yourself a born leader. Others think you are an idiot. Most leos are bullies. You are vain and can’t tolerate honest criticism. Your arrogance is disgusting. Leo people are thieving and mother f**kers and spend most of their time kissing mirrors.";
//! PROVISIONAL     } else if ((23<=dia && dia<=31 && mes==8) || (1<=dia && dia<=22 && mes==9)) {   // Verge
//! PROVISIONAL         signe = "Verge ♍︎";
//! PROVISIONAL         descr = "You are the logical type and hate discord. This [crap]-picking is sickening to your friends. You’re unemotional and often fall asleep while f**king. Virgos are good bus drivers and p i m p s.";
//! PROVISIONAL     } else if ((23<=dia && dia<=30 && mes==9) || (1<=dia && dia<=22 && mes==10)) {   // Balança
//! PROVISIONAL         signe = "Balança ♎︎";
//! PROVISIONAL         descr = "You are the artistic type and have a difficult time with reality. If you are male, you are nil. Most libra women are wh**es. All libras die of venereal disease.";
//! PROVISIONAL     } else if ((23<=dia && dia<=31 && mes==10) || (1<=dia && dia<=22 && mes==11)) {   // Escorpí
//! PROVISIONAL         signe = "Escorpí ♏︎";
//! PROVISIONAL         descr = "The worst of the lot. You are shrewd in business and can’t be trusted. You shall achieve the pinnacle of success because of your total lack of ethics. You are a perfect son-of-a-b**ch. Most scorpios are murderers.";
//! PROVISIONAL     } else if ((23<=dia && dia<=30 && mes==11) || (1<=dia && dia<=21 && mes==12)) {   // Sagitari
//! PROVISIONAL         signe = "Sagitari ♐︎";
//! PROVISIONAL         descr = "You are optimistic and enthusiastic. You have reckless tendency to rely on luck since you have no talent. The majority of sagittarians are drunks. Nixon is a sagittarian. You are not worth the time of day.";
//! PROVISIONAL     } else if ((22<=dia && dia<=31 && mes==12) || (1<=dia && dia<=20 && mes==1)) {   // Capricorn
//! PROVISIONAL         signe = "Capricorn ♑︎";
//! PROVISIONAL         descr = "You are conservative and afraid of taking risks. You are basically a chicken[crap]. There has never been a capricorn of any importance. You should kill yourself.";
//! PROVISIONAL     } else if ((21<=dia && dia<=31 && mes==1) || (1<=dia && dia<=18 && mes==2)) {   // Aquari
//! PROVISIONAL         signe = "Aquari ♒︎";
//! PROVISIONAL         descr = "You have an inventive mind and are inclined to be progressive. You lie a great deal. You make the same mistakes repeatedly because you’re stupid. Everyone thinks you’re a [freaking] jerk.";
//! PROVISIONAL     } else if ((19<=dia && dia<=29 && mes==2) || (1<=dia && dia<=20 && mes==3)) {   // Peixos
//! PROVISIONAL         signe = "Peixos ♓︎";
//! PROVISIONAL         descr = "You have a vivid imagination and often think you are followed by the FBI or CIA. You have no influence on your friends and people resent you for flaunting your power. You lack confidence an are generally a dips**t.";
//! PROVISIONAL     }
//! PROVISIONAL     
//! PROVISIONAL 
//! PROVISIONAL     console.log (`Si vas néixer el ${data}, el teu signe és %c${signe}%c i la teva descripció és: "${descr}"`, "color: purple", "color: auto");
//! PROVISIONAL }
//! PROVISIONAL 
//! PROVISIONAL // console.log(data);
//! PROVISIONAL horoscop();



//* -------------------- BUCLE FOR --------------------
console.log('%c-------------------- BUCLE FOR --------------------', 'color: orangered');

console.log("%c---------- Exercici 21 ----------", "color: green");
// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

// TODO el codi aquí

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) console.log(`%c${i} vegades`, "color: orange");
    else if (i == 1) console.log(`%c${i} vegada`, "color: darkred");
    else console.log(`%c${i} vegades`, "color: darkred");
}


console.log("%c---------- Exercici 22 ----------", "color: green");
// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

// TODO el codi aquí
for (let i = 1; i < 21; i++) {
    let str = `${i}`;
    if (i % 2 == 0) str += " hola";
    if (i % 3 == 0) str += " adéu";
    if (i % 5 == 0) str += " què tal?";
    console.log(str);
}


console.log("%c---------- Exercici 23 ----------", "color: green");
// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)
//// PISTA: usa la paraula clau "break"

//! PROVISIONAL var max = prompt("Fins quin número vols contar (1-1000)?");

// TODO defineix aquí la funció contar()

const contar = (numMax) => {
    for (let i = 1; i < 1001; i++) {
        if (i <= numMax && numMax != null && !isNaN(numMax)) {
            console.log(i);
            continue;
        } else if (i > numMax) {
            break;
        } else console.log("%cIntrodueix un número vàlid... o torna a P3", "color: red");
    }
}

//! PROVISIONAL contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit


console.log("%c---------- Exercici 24 ----------", "color: green");
// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola
//// PISTA: un número primer només és divisible per 1 i per si mateix

// TODO el codi aquí

var numP = "";

for (let dividend = 1; dividend < 101; dividend++) {
    for (let divisor = 2; divisor <= dividend; divisor++) {
        if (dividend % divisor == 0 && !(divisor >= dividend)) {
            // console.log(dividend);
            break;
        } else if (dividend == divisor) {
            // console.log(dividend);
            numP += dividend + ", ";
        }
    }
}

console.log(`Els nombres primers que hi ha entre 1 i 100 son: ${numP}`);

//* Pista Yifei
// for(dividendo=1;dividendo<101;dividendo++){}
// for(divisor=1;divisor<=dividendo;divisor++){


console.log("%c---------- Exercici 25 ----------", "color: green");
// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
//// PISTA: usa la paraula clau "continue"

//! PROVISIONAL var digits = prompt("Quins digits vols mostrar (1-9)?");

// TODO defineix la funció mostrarDigits()

// Serveixen tan per string com per array: el mètode .includes(), el .length i el caràcter segons índex str[] arr[].

//* SUBCODI:
/*  determinar/extreure quins dígits estan continguts a la string
determinar/escollir quins nums de l'1 al 100 contenen aquests dígits.
*/

const mostrarDigits = () => {
    let nums = "";
    digits = String(digits);
    for (let i = 1; i < 101; i++) {
        i += "";
        for (const unNum of i) {
            if (digits.includes(unNum)) {
                nums += i + ", ";
            }
        }
    }
    console.log(nums.slice(0,-2));
}

//! PROVISIONAL mostrarDigits(digits);      // si digits és "2 3 4", això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."



//* -------------------- BUCLE WHILE --------------------
console.log('%c-------------------- BUCLE WHILE --------------------', 'color: orangered');

console.log("%c---------- Exercici 26 ----------", "color: green");
// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua
//// PISTA: l'ultim console.log() mostrarà un string amb salts de línia "\n"

// TODO aquí el codi

var llistaCompra = "Llista de la compra:\n";

//! PROVISIONAL do {
//! PROVISIONAL     item = prompt(`Escriu el que has de comprar, paraula per paraula. Quan hagis acabat, escriu "feta!"`);
//! PROVISIONAL     if (item != "feta!") llistaCompra += `- ${item}\n`;
//! PROVISIONAL } while (item != "feta!");

console.log(llistaCompra);



//* -------------------- MÈTODES ARRAYS --------------------
console.log('%c-------------------- MÈTODES ARRAYS --------------------', 'color: orangered');

console.log("%c---------- Exercici 27 ----------", "color: green");
// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]

// TODO aquí el codi

var data = new Date;
var dia = data.getDay()
// console.log(dia);
// dia = 0;

if (dia != 0) {
    console.log(dies[dia-1]);
} else console.log(dies[6]);


console.log("%c---------- Exercici 28 ----------", "color: green");
// exercici 28: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

var cadena = "blaucacavermellcacagroccacamarrócacaverd"

// TODO defineix aquí la funció separar()

const separar = (str, separador) => {
    let indexSep = str.indexOf(separador);
    let arrSeparat = [];
    while (indexSep != -1) {
        console.log(indexSep);
        // If perquè només guardi el tros d'abans del separador si existeix:
        if (indexSep != 0) arrSeparat.push(str.slice(0, indexSep));
        str = str.slice(indexSep+separador.length);
        console.log(str);
        // Hem de redefinir el valor de indexSep per al següent separador:
        indexSep = str.indexOf(separador);
    }
    if (str) arrSeparat.push(str);
    return arrSeparat;
}

console.log(separar(cadena, "caca"));   // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]

var cadena = "blau,,,vermell,groc,,,marró,verd"
console.log(separar(cadena, ","));


console.log("%c---------- Exercici 29 ----------", "color: green");
// exercici 29: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

var array = ["primer", "segon", "tercer", "quart", "cinquè"]

// TODO defineix aquí la funció moure()

//* OPCIÓ 1, amb for:
// const moure = (arr, N) => {
//     for (let i = 0; i < N; i++) {
//         let elMogut= "";
//         elMogut = arr.pop();
//         console.log(elMogut);
//         arr.unshift(elMogut);
//     }
//     console.log(arr);
//     return arr;
// }

//* OPCIÓ 2, amb splice i concat:
// const moure = (arr, N) => {
//     let moguts = [];
//     moguts = arr.splice((arr.length-N), N);
//     console.log(moguts);
//     return (arr.splice((arr.length-N), N)).concat(arr);
// }

//* OPCIÓ 3, amb splice i concat reduït:
const moure = (arr, N) => (arr.splice((arr.length-N), N)).concat(arr);

console.log(moure(array, 2));       // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]


console.log("%c---------- Exercici 30 ----------", "color: green");
// exercici 30: adapta l'exercici de la llista de la compra (ex. 26) perquè posi els elements en un array i
// els ordeni alfabèticament

// TODO aquí el codi

var arrLlista = [];
var llistaCompra = "Llista de la compra:\n- ";

// do {
//     item = prompt(`Escriu el que has de comprar, paraula per paraula. Quan hagis acabat, escriu "feta!"`);
//     if (item != "feta!") arrLlista.push(item);
// } while (item != "feta!");

arrLlista.sort();
llistaCompra += arrLlista.join("\n- ");
console.log(llistaCompra);


console.log("%c---------- Exercici 31 ----------", "color: green");
// exercici 31: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

// TODO aquí el codi

// Generador d'array números aleatoris entre 1 i 365
// Generador d'array de N números aleatoris -> array(5) -> [45,4,7,323,53]
// Comprovador d'elements repetits -> [45,2,74,84,74] -> true
// Bucle que et generi els arrays -> array(5), array(10), array(15)...

// Console.log:
// 5 personas
// 10 personas
// 15...

const arrDatesN = N => {
    var arrDates = [];
    for (let i = 0; i < N; i++) {
        arrDates.push(Math.ceil(Math.random()*365));
    }
    return arrDates
}
// console.log(arrDatesN(5));

//* OPCIÓ 1 del bucle d'arrays segons N:
// for (let i = 5; i <= 50; i+=5) {
//     console.log(arrDatesN(i));
// }
//* OPCIÓ 2 del bucle d'arrays segons N:
var N = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50"];
for (n of N) {
    console.log(`L'array de dates random de N = ${n} és:`);
    console.log(arrDatesN(n));
}




//* -------------------- OBJECTES --------------------
console.log('%c-------------------- OBJECTES --------------------', 'color: orangered');

console.log("%c---------- Exercici 32 ----------", "color: green");
// exercici 32: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

var persona = { // TODO aquí les propietats de l'objecte
}

persona.calcularEdat();

// TODO console.log() que digui "La Maria va nèixer el 1995 i té 25 anys" agafant les propietats de l'objecte


console.log("%c---------- Exercici 33 ----------", "color: green");
// exercici 33: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

var frase = { string : "blaucacavermellcacagroccacamarrócacaverd",
// TODO aquí el mètode de l'objecte  
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada);     // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


console.log("%c---------- Exercici 34 ----------", "color: green");
// exercici 34: adapta l'exercici de la llista de la compra (ex. 26 i 29) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")

// TODO: aqui el codi


console.log("%c---------- Exercici 35 ----------", "color: green");
// exercici 35: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la
//// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// TODO gestionar el csv perquè acabi sent una cosa com la de sota

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");