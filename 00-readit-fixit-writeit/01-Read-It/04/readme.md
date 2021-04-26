# READ IT
## EX 04
* Open script.js and read the code. What do you think will happen. Try to explain in your own words.


document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ol>`);

er wordt een i aangemaakt als integer om controle te houden over het aantal uit te voeren for's in de array Movies. 
Deze i wordt gekoppeld aan het aantal arrays berekend door movies.length. Zolang deze het einde niet heeft gehaald wordt er i +1 gedaan. 
op het einde van de loop wordt de movie neergepend in een ongeordende lijst
y
