async function parallel1(one, two) {
  let result = (await one) + two;
  console.log(result);
}

function parallel2(one, two) {
  let result = one !== two;
  console.log(result);
}

parallel1(8, 8);
parallel2(8, 8);
