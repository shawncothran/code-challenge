function Hamming() {};

// Hamming.prototype.compute = function(strandA, strandB) {
//   if (strandA.length === strandB.length) {
//     var theNumberOfDifferencesBetweenTwoHomologousDNAStrandsTakenFromDifferentGenomesWithACommonAncestorThanksUncleBob = 0;
//
//     for (var i = 0; i < strandA.length; i++) {
//       if (strandA[i] !== strandB[i]) {
//         theNumberOfDifferencesBetweenTwoHomologousDNAStrandsTakenFromDifferentGenomesWithACommonAncestorThanksUncleBob++;
//       }
//     }
//
//     return theNumberOfDifferencesBetweenTwoHomologousDNAStrandsTakenFromDifferentGenomesWithACommonAncestorThanksUncleBob;
//   }
//
//   throw 'DNA strands must be of equal length.';
// };

Hamming.prototype.compute = function(strandA, strandB) {
  // full disclosure: I had to google how to create prototype methods on ES5 classes because I hadn't done it in over a year
  if (strandA.length === strandB.length) {
    var dist = strandA.split('').filter(function(el, i) {return el !== strandB[i]});

    return dist.length;
  }

  throw 'DNA strands must be of equal length.';
};

module.exports = Hamming;
