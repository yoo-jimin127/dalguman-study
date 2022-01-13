function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

var a = document.getElementsByTagName("h3");

for (let i = 0; i < a.length; i++) {
  a[i].style.backgroundColor = "#fe2000";
}

//0.25 = hex + "d9"
//0.5
//0.75
//1

//#0033ff + d9

// #0033ffd9

console.log(hexToRgb("#0033ff").r); // "51";
console.log(hexToRgb("#0033ff").g); // "51";
console.log(hexToRgb("#0033ff").b);

function fixop(/*parameter wordCount*/) {}
