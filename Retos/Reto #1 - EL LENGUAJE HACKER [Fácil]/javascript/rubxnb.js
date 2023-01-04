const dic = {
    a: "4",
    b: "I3",
    c: "[",
    d: ")",
    e: "3",
    f: "|=",
    g: "&",
    h: "#",
    i: "1",
    j: ",_|",
    k: ">|",
    l: "1",
    m: "/\\/\\",
    n: "^/",
    o: "0",
    p: "|*",
    q: "(_,)",
    r: "I2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "/",
    w: "//",
    x: "><",
    y: "`j",
    z: "2",
    1: "L",
    2: "R",
    3: "E",
    4: "A",
    5: "S",
    6: "b",
    7: "T",
    8: "B",
    9: "g",
    0: "o",
};

console.log(leet('If you can read this you really need to get a life!'));

function leet(sentence){

    let sentenceLower = sentence.toLowerCase();
    let res = '';

    for(let i = 0; i<sentenceLower.length; i++) {

        let char = sentenceLower[i];
        
        if(dic.hasOwnProperty(char)){
            res += dic[char];
        } else {
            res += char;
        }
    }
    return res;
}
