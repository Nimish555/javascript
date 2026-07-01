
// 
// function count(word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// count("hello");


// arrow function
const f = (word) => {
    let count = 0;
    for (const ch of word) {
        if (
            ch == "a" ||
            ch == "e" ||
            ch == "i" ||
            ch == "o" ||
            ch == "u"
        ){
            count++;
        }

       }
       console.log(count);
};

f("nimish");




