/**
 * Created by G_Kva on 25-11-2016.
 */

var antwoordnaam = prompt("Wat is uw naam?", "");

document.write("Uw naam is:" + antwoordnaam+"<br>");
alert("Beste  : "+ antwoordnaam);

var antwoordleeftijd = prompt("Vul u leeftijd in");
document.write("uw leeftijd is: " +antwoordleeftijd + "<br>");
if(antwoordleeftijd < 18){
    alert("U bent minderjarig");
} else {
    alert("U bent volwassen");
}
var antwoordadres = prompt("Wat is uw adres?","");

document.write("uw adres is:" + antwoordadres);

var arrayGegevens;
arrayGegevens = [];
arrayGegevens[0] = antwoordnaam;
arrayGegevens[1] = antwoordleeftijd;
arrayGegevens[2] = antwoordadres;


document.write("<br><pre>" + arrayGegevens + "</pre>" );
function myFunction() {

}
arrayGegevens.forEach(myFunction);