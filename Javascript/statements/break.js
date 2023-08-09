top: {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (i === 1 && j === 1) break top;
      console.log(`i:${i},j:${j}`);
    }
  }
}
/*
i:0,j:0
i:0,j:1
i:0,j:2
i:1,j:0
*/

// top1: {
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       if (i === 1 && j === 1) break;
//       console.log(`i:${i},j:${j}`);
//     }
//   }
// }
/*
i:0,j:0
i:0,j:1
i:0,j:2
i:1,j:0
i:2,j:0
i:2,j:1
i:2,j:2
*/

// top1: {
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       console.log(`i:${i},j:${j}`);
//     }
//   }
// }
/*
i:0,j:0
i:0,j:1
i:0,j:2
i:1,j:0
i:2,j:0
i:2,j:1
i:2,j:2
i:0,j:0
i:0,j:1
i:0,j:2
i:1,j:0
i:1,j:1
i:1,j:2
i:2,j:0
i:2,j:1
i:2,j:2
*/
