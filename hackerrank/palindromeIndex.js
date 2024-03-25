function palindromeIndex(s) {
    // Write your code here
    if (s == s.split("").reverse().join("")){
        return -1
    }
    for (var i=0; i<parseInt(s.length/2);i++){
        if (s[i] != s[s.length-i-1]){ 
            let fromStart = s.substring(0, i) + s.substring((i + 1)); 
            let fromEnd = s.substring(0, (s.length - 1 - i)) + s.substring((s.length - 1 - i) + 1); 
            if (fromStart == fromStart.split("").reverse().join("")){
                return i;
            } else if (fromEnd === fromEnd.split("").reverse().join("")) {
                return s.length - 1 - i;
            }
        }
    }
    return -1
}

console.log(palindromeIndex("asdfgdsa"))