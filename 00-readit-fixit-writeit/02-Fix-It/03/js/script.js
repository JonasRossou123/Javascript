const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

function reverseArr(input) {
    let ret = [];
    for(let i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}


const b = reverseArr(tvshows);


document.write(`<ol>`);
for (let i = 0; i <b.length; i++) {
  document.write(`<li>${b[i]}</li>`);
}
document.write(`</ol>`);
