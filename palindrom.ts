let inputOne = 13312;

const isPalindromNumber = (pal:number) => {
  if(pal < 0) return false
  if(pal % 10 === 0) return false
  if(pal < 10) return true

  let rev = 0;
  while (pal > rev) {
    rev *= 10
    rev += pal % 10
    pal = Math.trunc(pal / 10)
  }
     return pal === rev || pal === Math.trunc(pal / 10)
};

console.log(isPalindromNumber(inputOne));