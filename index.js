const shout = (string) => {
    return string.toUpperCase()
}

const whisper = (string) => {
    return string.toLowerCase()
}

const logShout = (string) => {
    console.log(string.toUpperCase())
}

const logWhisper = (string) => {
    console.log(string.toLowerCase())
}

const sayHiToHeadphonedRoommate = (string) => {
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }

    if(string === string.toUpperCase()){
        return "YES INDEED!"
    }

    return "I would love to!"
}
// sayHiToHeadphonedRoommate(string)
// 4) returns "I can't hear you!" if `string` is lowercase
// 5) returns "YES INDEED!" if `string` is uppercase
// 6) returns "I would love to!" if `string` is "Let's have dinner together!"`

