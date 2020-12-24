export const randomNumberGenerator = (num, lastGeneratedNumber)=>{
    const random = Math.floor(Math.random() * num) 
    if(random !== lastGeneratedNumber){
        lastGeneratedNumber = random
        return lastGeneratedNumber
    }
     return randomNumberGenerator(num)
 
}