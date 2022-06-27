function reverse(word){

    for (let j = 0; j<=word.length-1; j++){
        frontSpelledWord.push(word[j])}
    for (let i = word.length-1; i>= 0; i--){
        backSpelledWord.push(word[i])}
    
    
    if (frontSpelledWord[k] === backSpelledWord[k]){
            console.log("Yes,", word, "is a palindrome.")}
    else {console.log ("No,", word, "is not a palindrome.")}
    
    console.log("Front spelling:",frontSpelledWord)
    console.log("Back Spelling:",backSpelledWord)}
    
    reverse("reviver");