/* let name = 'bob';
console.log(`hi ${name}`);

let sentence = `This is really a convenience, you probably will never
 want to do something like this.You might choose to put long passages
  of text into an external file 
  and load it somehow`;
  console.log(sentence); */



  function getReasonCount() { return 1;}

  let interpolation =`Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reason' } to try this`;
  console.log(interpolation);