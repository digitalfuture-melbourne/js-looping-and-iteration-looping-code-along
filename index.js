// Code your solutions in this file
function writeCards(name, text)
{
    let i =0
    let message = []
    for (i ; i < name.length; i++){
        message.push(`Thank you, ${name[i]}, for the wonderful ${text} gift!`)
    }
    
    return message
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}
