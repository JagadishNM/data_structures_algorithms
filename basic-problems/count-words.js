// D:\Jagadish\problem-images

function howMany(sentence){
    const words = sentence.split(/\s+/);

    const validWords = words.filter(word =>{
        word = word.replace(/[.?,!]$/, '');
        return /^[a-zA-Z-]+$/.test(word);
    });
    
    return validWords.length;
}

console.log(howMany('b? Dl )B 4(V! A. MK, YtG ](f 1m )CNxuNUR {PG?')); // 5