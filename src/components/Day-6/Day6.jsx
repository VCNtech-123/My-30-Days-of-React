
function isPrime(n) {
  // 1. Handle numbers less than 2
  if (n <= 1) return false;
  
  // 2. Check for 2 and 3 (the first two primes)
  if (n <= 3) return true;

  // 3. Optimization: Eliminate even numbers and multiples of 3
  if (n % 2 === 0 || n % 3 === 0) return false;

  // 4. Check divisors from 5 up to the square root
  // We use i * i <= n instead of Math.sqrt(n) for slight performance
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

const colorValidator = (num) => {
    if (isPrime(num)) {
        return 'bg-red-300';
    }
    else if (num % 2 == 0) {
        return 'bg-green-300';
    }
    else {
        return 'bg-yellow-300';
    }
}

const NumberCard = ({ number }) => {
    return (
        <div className={`${colorValidator(number)} p-9 min-h-40 min-w-40 flex items-center justify-center font-bold font-mono`}>
            {number}
        </div>
    )
}

const numbers = [];

for (let i = 0; i < 100; i++) {
    numbers.push(i);
}

const NumberContainer = () => {
    return (
        <div className="flex flex-col items-center p-12">
            <h1 className="font-mono font-bold text-6xl">30 Days of React</h1>
            <h1 className="font-mono text-2xl">Number Generator</h1>
            <div className="flex justify-center w-[1120px] flex-wrap my-0 mx-auto gap-2 py-6">
                
                {numbers.map(num => <NumberCard key={num} number={num} />)}
            </div>
        </div>
    )
}

//2

const randomColor = () => {
    let hex = '123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length);
        color += hex[index];
    }

    return '#' + color;
}


const HexCard = ({ color }) => {
    return (
        <div className={`p-9 min-h-40 min-w-40 flex items-center justify-center font-bold font-mono`} style={{backgroundColor: color}}>
            {color}
        </div>
    )
}

const colorCard = [];

for (let i = 0; i < 100; i++) {
    colorCard.push(randomColor());
}

const HexadecimalContainers = () => {
    console.log(colorCard);
    return (
        <div className="flex flex-col items-center p-12">
            <h1 className="font-mono font-bold text-6xl">30 Days of React</h1>
            <h1 className="font-mono text-2xl">Hexadecimal Colors</h1>
            <div className="flex justify-center w-[1120px] flex-wrap my-0 mx-auto gap-2 py-6">
                {colorCard.map(hex => <HexCard key={hex} color={hex} />)}
            </div>
        </div>
    )
}

export default HexadecimalContainers;