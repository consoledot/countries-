export const randomNumberGenerator = (array, lastGeneratedNumber)=>{
    const random = Math.floor(Math.random() * array.length)
    const newArray = []
    while(newArray.length <= 20){
        if(random !== lastGeneratedNumber){
                lastGeneratedNumber = random
                newArray.push()
                return lastGeneratedNumber
            }
    }
   
     return randomNumberGenerator(array,lastGeneratedNumber)
 
}