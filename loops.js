/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let s = "javascript"
function vowelsAndConsonants() {
    const vowels= "aeiou";
    var word = ""
    var v=""
    for(let i = 0; i<s.length;i++){
       if (vowels.includes(s[i])){
          v+=s[i]
           
       }
       if(!vowels.includes(s[i])){
          word+=s[i];
       }
       
      
    }
    const reorderedWord = word+v
    return reorderedWord.trim()
}
vowelsAndConsonants()
module.exports = vowelsAndConsonants