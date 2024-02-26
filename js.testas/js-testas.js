/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.

Eur kuras = 0,9208
USD kursas = 1,0815
*/ 

function eurai_i_dolerius(euras, kursas){
    return euras * kursas; 
}

function eurai_suma(){
    return Math.floor(Math.random()*1000) + 1;
}

let kursas = 1.0815; 
let euras =  eurai_suma()

let doleris = eurai_i_dolerius(euras, kursas);
console.log(`${euras} euru bus ${doleris.toFixed(2)} doleriai`);


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function dolerius_i_eurus(doleriai, verte){
    return doleriai * verte; 
}

function doleriu_suma(){
    return Math.floor(Math.random()*1000) + 1;
}

let verte = 0.9208; 
let doleriai = doleriu_suma()

let eurai = dolerius_i_eurus(doleriai, verte);
console.log(`${doleriai} doleriai bus ${eurai.toFixed(2)} eurai`);


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function KMIskaiciavimas(ugis,svoris){
    let kmi = svoris / (ugis * ugis)
    return kmi;
}

let ugis = 1.75; 
let svoris = 75;

let kmi = KMIskaiciavimas(ugis,svoris)
console.log( 'Kmi pagal parinktus skaičius bus:', kmi.toFixed(1));


if ( kmi > 25 ){
    console.log( 'KMI inkesas višyją norma, dėl to nustatytas virsvoris');
} else if (18.5 <= kmi < 25 ){
    console.log( 'KMI indeksas yra normos riboje, dėl to nustatytas normalus kūno svoris');
} else if ( kmi < 18.8){
    console.log( 'KMI indeksas yra per mažas, dėl to nustatytas svorio trūkumas');
}
   
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

let žmogaus_metai = 30; 
let dienos_per_metus = 365; 
let para = 24;
let valanda = 60;
let sekunde = 60; 

function dienuSK(dienos_per_metus,žmogaus_metai){
    let dienos = dienos_per_metus * žmogaus_metai;
    return dienos;
}

function valanduSK(dienos,para){
    let valandos = dienos * para; 
    return valandos;
}

function minuciuSK(valandos,valanda){
    let minuciu = valandos * valanda;
    return minuciu;
}

function sekundziuSK(minuciu,sekunde){
    let sekundziu = minuciu * sekunde;
    return sekundziu;
}

let dienos = dienuSK(dienos_per_metus,žmogaus_metai)
console.log('Dienų skaicius per 30 metų', dienos);

let valandos = valanduSK(dienos,para)
console.log('Valandų skaicius per 30 metų', valandos);

let minuciu = minuciuSK(valandos,valanda)
console.log('Minucių skaicius per 30 metų', minuciu);

let sekundziu = sekundziuSK(minuciu,sekunde)
console.log('Sekundžių skaicius per 30 metų', sekundziu);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.

Formulė: 20 farengeitu 
(Temperatūra(F) - 32) * (5/9) ; rezultatas -6.666 laipsniai celsiju

Formulė: 20 celsijaus
Temperatūra(C) * (9/5) + 32; rezultatas 68 laipsniai farengeitu

*/

function farengeitas_celsijus(farengeitas){
    let rezultatas_celsijus = (farengeitas - 32) * (5/9);
    return rezultatas_celsijus
}


function celsijus_farengeitas(celsijus){
    let rezultatas_farengeitus = (celsijus * (9/5)) + 32;
    return rezultatas_farengeitus
}

let farengeitas = 20; 
let konvertavus_i_celsijus = farengeitas_celsijus(farengeitas)
console.log( '20 laipsnių farengeitų pavertus, į celsijus gauname:',  konvertavus_i_celsijus.toFixed(1), 'celsijaus');

let celsijus = 20; 
let konvertavus_i_farengeitus = celsijus_farengeitas(celsijus)
console.log( '20 laipsnių celsiju pavertus, į farengeitus gauname:',  konvertavus_i_farengeitus.toFixed(1), 'farengeitus');


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let skaicius = 0;

for (let i = 1; i <= 10; i++){
    if (i > 1) {
        skaicius += "-"
    }
    skaicius += i;
}

console.log(skaicius);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

for ( let i = 1; i <= 5; i++ ){
    let eile = '';
    for ( let o = 1; o <= i; o++ ) {
        eile += '*'
    }
    console.log(eile);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

let esama_data = new Date();
let kaledu_data = new Date(esama_data.getFullYear(),11,25);

let liko_dienu = Math.ceil ((kaledu_data-esama_data) / (1000*60*60*24))

console.log( `Iki kaledu liko: ${liko_dienu} dienos`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas' ]

let sujungta = vardai.join(',')
let sujungta1 = vardai.join('+')

console.log(sujungta);
console.log(sujungta1);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/



