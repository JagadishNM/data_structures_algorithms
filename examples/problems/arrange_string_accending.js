//Sort an array by string length within a function

function arrange(sentence) {
    let flag = false;
    if(sentence.includes('.')){
        sentence = sentence.slice(0, sentence.length -1);
        flag = true;
    }
    const arr = sentence.split(' ');
    arr.sort((a, b) => a.length - b.length);
    return flag? arr.join(' ') + '.' : arr.join(' ');

}

console.log(arrange('Cats and Hats.'))