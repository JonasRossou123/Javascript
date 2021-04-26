# READ IT
## EX 03
* Open script.js and try to predict the result of the script. Explain.
* Open the developer tools in your browser and inspect the 'console' tab.

const amount = 10;

for (let i = 0; i < amount; i++) {
  console.log(i);
  document.write(`<p>${i + 1}</p>`);
}

een loop telt vanaf 0 tot amount is bereikt. In dit geval van 0 tot 9 want mag het cijfer 10 niet raken. 
 Zolang cijfer kleiner is als 10 blijft deze loop draaien en komt er telkens eentje bij
 ze worden telkens op het einde van de loop neergepend in het document
