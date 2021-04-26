# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?
de for-loop werd vervangen door forEach
elke string in movies wordt nu sowieso afgegaan, komt dus op hetzelfde neer 

* What does the function 'parseTitle' do? 
parseTitle zet op zijn beurt weer een reeks van andere functies in gang.
parsetitle wordt title 
title wordt gelowercased
ververgens wordt deze lowertitle gebruikt als "content" in de functie wrapwithtag (waar er ook een lijst van wordt gemaakt)
uiteindelijk wordt dit resultaat neergepend in het document

  What parameter do we pass to this function?
Strings of Movies

* What does the function 'wrapWithTag' do? 
maakt een lijst van de doorgegeven content (in dit geval doorgesijpeld van strings movies via parsetitle, title en lowercase)

  Why are the parameters placed between brackets?
maakt er een functie van 


  const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);



