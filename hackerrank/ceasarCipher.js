/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

var caesarCipher = function(s, k) {
    // Write your code here
    //[A-Z]: 65-90
    //[a-z]: 97-122
    var newString = ""
    var shift = k%26
    for (var i = 0; i<s.length; i++){
        var ascii = s.charCodeAt(i)
        if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122 ){
            console.log(s[i]+" - "+ascii)
            if (ascii >= 97 && ascii <= 122 && ascii + shift > 122 || ascii >= 65 && ascii <= 90 && ascii + shift > 90 ){
                newString+= String.fromCharCode(ascii + shift -26)
            }
            else{
                newString+= String.fromCharCode(ascii + shift)
            }   
        }
        else{
            newString+=s[i]
        }
    }
    console.log(newString)
}

53
6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr
87

const s = "6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr"
const k = 87
caesarCipher(s, k)

