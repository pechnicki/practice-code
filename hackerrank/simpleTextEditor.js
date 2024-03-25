function processData(input) {
    let commands = input.split("\n").splice(1)
    let text = ""
    let commandsStack = []
    commands.forEach((element) => {
        let e = element.split(" ")
        //console.log("------------")
        switch(e[0]){
            case("1"):
                // append
                text += e[1].toString()
                commandsStack.push(e)
                break;
            case("2"):
                // delete last N characters
                e[2] = text.substring(text.length-parseInt(e[1]),text.length)
                text = text.substring(0,text.length-parseInt(e[1]))
                commandsStack.push(e)
                break;
            case("3"):
                // print the specified char
                console.log(text[parseInt(e[1]-1)])
                break;
            case("4"):
                // undo operation 1 or 2
                let lastUsedCommand = commandsStack.pop()
                //console.log(lastUsedCommand)
                if (lastUsedCommand[0] == "1"){
                    // delete lastUsedCommand[1]
                    text = text.substring(0,text.length-lastUsedCommand[1].length)
                } else if (lastUsedCommand[0] == "2"){
                    // append
                    text += lastUsedCommand[2]
                }
                break
            default:
                break;
        }
        //console.log(e)
        //console.log(text)
    })
} 

//processData("8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1")
processData("50\n1 zsfncpxdzl\n3 4\n3 6\n2 1\n3 7\n3 2\n4\n2 4\n2 6\n4\n4\n1 l\n1 hpe\n3 6\n2 7\n4\n3 6\n4\n3 6\n1 zipsqagri\n1 vuqxstnj\n4\n3 13\n4\n3 10\n3 6\n1 uzdpy\n1 bupqp\n1 kn\n2 6\n3 8\n1 iiuvfbn\n4\n2 1\n2 12\n4\n3 7\n4\n2 9\n3 1\n1 axbhx\n1 wovbfyvt\n3 11\n3 7\n3 2\n4\n1 tjmqp\n4\n2 6\n3 4\n")