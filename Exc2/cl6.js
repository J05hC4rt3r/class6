function reversibleInclusiveList(start, end) {
  let array = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      array.push(i);
    }
  }
  return array;
}

console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(1, 20));
console.log(reversibleInclusiveList(20, 5));
