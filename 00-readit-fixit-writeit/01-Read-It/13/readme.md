# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 

We kunnen geen if/break gebruiken in een foreach loop

We gebruiken hier een for functie en zolang de voorwaarde blijft lopen (string in de string van de array)
wordt er een p tag gezet rond dat object





* Look at the documentation of for...in

`const parseMovieData = movie => {
  let result = ``;
  for (const prop in movie) {
    result += wrapWithTag(movie[prop], `p`);
  }
  return result;
};`

we nemen de waarde van movie (titel, jaar en regisseur) en steken dat in result (na wrap with tag)

de for in loop neemt de property uit het element
we kunnen niet tellen met titel, year en regisseur
prop -> becomes the index (0, 1, 2, 3)
movie ->  array we are looping through

kijken naar properties in array movies

we willen loopen zonder te weten hoeveel keer we kunnen loopen.

we kunnen de length niet berekenen bij objects .. daarom for in want je 




* Look at the documentation of the .sort(à function. Explain how it's applied here.



.sort zal bij een array met verschillende objects (in dit geval 3 title, year, author) de objects op elk niveau gaan sorteren > daarom moet je specifiëren in een apart aangemaakte functie dat ze de telkens year gaan vergelijken. Verticaal werken ipv horizontaal

Als a > b (postieve uitkomst) -> changeren van positie
Als a = b -> laat ongemoeid
Als a < b (negatief) -> laat ongemoeid





* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

in oefening 10 geeft console alle info uit de array terwijl er maar 3 worden weergegeven op de website
terwijl oefening 13 alle info geeft die ook op de website te vinden staat. 