/* anything that needs to happen ASAP after jQuery loads

*/

// $(function() { // modern jQuery doesn't require '$(document).ready()' idiom
//   "use strict";
//   const filteringDiv = $(".filtering");
//   if (filteringDiv.length === 0) {
//     console.error("did not find 'filtering' class in html");
//   } else {
//     const theHeight = filteringDiv.outerHeight();
//     console.log(theHeight);
//     $("<style type\"text/css\">.filtering{max-height:" + theHeight+"px}</style>").
//       appendTo("head");
//   }
// });
