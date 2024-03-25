function noPrefix(words) {
    // Write your code here
    for (let i = 0; i < words.length; i++){
        let filteredWords = words.filter((e) => e.length < words[i].length)
        for (let j = 0; j < filteredWords.length; j++){
            if (words[i] != filteredWords[j]){
                if (words[i].substring(0,filteredWords[j].length) == filteredWords[j]){
                    console.log(filteredWords)
                    console.log(words[i].substring(0,filteredWords[j].length))
                    console.log("BAD SET")
                    console.log(words[i])
                    return
                } 
            }
        }
    }
    console.log("GOOD SET")
}

//noPrefix(['aab','defgab','abcde','aabcde','cedaaa','bbbbbbbbbb','jabjjjad'])

noPrefix(['hgiiccfchbeadgebc','biiga','edchgb','ccfdbeajaeid','ijgbeecjbj','bcfbbacfbfcfbhcbfjafibfhffac','ebechbfhfcijcjbcehbgbdgbh','ijbfifdbfifaidje','acgffegiihcddcdfjhhgadfjb','ggbdfdhaffhghbdh','dcjaichjejgheiaie','d','jeedfch','ahabicdffbedcbdeceed','fehgdfhdiffhegafaaaiijceijdgbb','beieebbjdgdhfjhj','ehg','fdhiibhcbecddgijdb','jgcgafgjjbg','c','fiedahb','bhfhjgcdbjdcjjhaebejaecdheh','gbfbbhdaecdjaebadcggbhbchfjg','jdjejjg','dbeedfdjaghbhgdhcedcj','decjacchhaciafafdgha','a','hcfibighgfggefghjh','ccgcgjgaghj','bfhjgehecgjchcgj','bjbhcjcbbhf','daheaggjgfdcjehidfaedjfccdafg','efejicdecgfieef','ciidfbibegfca','jfhcdhbagchjdadcfahdii','i','abjfjgaghbc','bddeejeeedjdcfcjcieceieaei','cijdgbddbceheaeececeeiebafgi','haejgebjfcfgjfifhihdbddbacefd','bhhjbhchdiffb','jbbdhcbgdefifhafhf','ajhdeahcjjfie','idjajdjaebfhhaacecb','bhiehhcggjai','bjjfjhiice','aif','gbbfjedbhhhjfegeeieig','fefdhdaiadefifjhedaieaefc','hgaejbhdebaacbgbgfbbcad','heghcb','eggadagajjgjgaihjdigihfhfbijbh','jadeehcciedcbjhdeca','ghgbhhjjgghgie','ibhihfaeeihdffjgddcj','hiedaegjcdai','bjcdcafgfjdejgiafdhfed','fgdgjaihdjaeefejbbijdbfabeie','aeefgiehgjbfgidcedjhfdaaeigj','bhbiaeihhdafgaciecb','igicjdajjdegbceibgebedghihihh','baeeeehcbffd','ajfbfhhecgaghgfdadbfbb','ahgaccehbgajcdfjihicihhc','bbjhih','a','cdfcdejacaicgibghgddd','afeffehfcfiefhcagg','ajhebffeh','e','hhahehjfgcj','ageaccdcbbcfidjfc','gfcjahbbhcbggadcaebae','gi','edheggceegiedghhdfgabgcd','hejdjjbfacggdccgahiai','ffgeiadgjfgecdbaebagij','dgaiahge','hdbaifh','gbhccajcdebcig','ejdcbbeiiebjcagfhjfdahbif','g','ededbjaaigdhb','ahhhcibdjhidbgefggdjebfcf','bdigjaehfchebiedajcjdh','fjehjgbdbaiifi','fbgigbdcbcgffdicfcidfdafghajc','ccajeeijhhb','gaaagfacgiddfahejhbgdfcfbfeedh','gdajaigfbjcdegeidgaccjfi','fghechfchjbaebcghfcfbdicgaic','cfhigaciaehacdjhfcgajgbhhgj','edhjdbdjccbfihiaddij','cbbhagjbcadegicgifgghai','hgdcdhieji','fbifgbhdhagch','cbgcdjea','dggjafcajhbbbaja','bejihed','eeahhcggaaidifdigcfjbficcfhjj'])
//d