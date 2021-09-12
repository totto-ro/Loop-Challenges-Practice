
/* 1. Print odds 1-20 */ 

for (let i = 1; i < 20; i++){
    if (i % 2 != 0)

    console.log (i);
} 

/* 2. Decreasing Multiples of 3 from 100 down to 0 */

for (let i = 100; i > 0; i--){
    if (i % 3 === 0)

    console.log (i);
} 

/* 3. Print the sequence 4, 2.5, 1, -0.5, -2, -3.5 */

let num1 = 0;
for ( i = 5.5; i > -3.5; i -= 1.5){
    num1 = i - 1.5;
    
    console.log (num1);
}

/* 4. Sigma from 1-100*/

let sum = 0;
for (let i = 1; i < 101; i++){
    sum += i
    console.log (sum);
} 

/* 5. Factorial values from 1-12*/

let mult = 1;
for (let i = 1; i < 13; i++){
    mult *= i
    console.log (mult);
} 

