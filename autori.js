const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    let abbr = ''
    while(input.length){
        let i = input.search(/[A-Z]/)
        if(i === -1){
            input = ''
        }else{
            abbr += input.charAt(i)
            input = input.substr(i + 1)
        }
    }
    console.log(abbr)
    rl.close()
})