// Question 1 --
// Write a program that prints numbers from 1 to 100. Except, for the multiples of three, print "google" and for the multiples of five, print "facebook". And, for the multiples of both, print "amazon".

for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('amazon');
  } else if (num % 3 === 0) {
    console.log('google');
  } else if (num % 5 === 0) {
    console.log('facebook');
  } else {
    console.log(num);
  }
}
