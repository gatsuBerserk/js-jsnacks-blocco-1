const numbers= []; 
let sum = 0; 

for (let i = 0; i < 10 ; i++){
    const randomNumbers = (Math.floor(Math.random() * 10) + 1);
    numbers.push(randomNumbers);  
    sum += randomNumbers;  
    
    
}; 
 console.log(numbers); 
 console.log(sum);
//  console.log(sum);
//  console.log= (sum / numbers.length);