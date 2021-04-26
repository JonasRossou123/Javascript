# READ IT
## EX 08
* Look at the documentation of the join() function. Explain how it is used here.

in dit script maak je eerst een nieuwe array waarbij de waardes geen hoofdletters meer bevatten. Deze array wordt op zijn beurt alweer gebruikt om er een tag op te zetten.
De originele array Movies is momenteel dus 2 keer bewerkt doormiddel van de .map method. 

Ten slotte gebruik je wrapWithtag function expression met als content de laatst bewerkte array wrappedmovies. De .join method maakt een string van de array. 

je gebruikt als seperator '' omdat je niet de standaard komma wilt die de .join method eraan zou geven. Als tag gebruik je ul
