function passwordCreator(length, upper, number, simbol){
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const simbols = '\!|"@·#$~%€&()=?[]{}`+^*¨,.-;:_><';

    let base = 'abcdefghijklmnopqrstuvwxyz';

    if(upper) base += upperCase;
    if(number) base += numbers;
    if(simbol) base += simbols;

    if (length < 8) length = 8;
    if (length > 16) length = 16;

    let res = '';

    for(let i = 0; i <length; i++)
        res += base.charAt(Math.floor(Math.random() * base.length));

    return res;
}

const password = passwordCreator(27, true, true, true)
console.log(password);
console.log(password.length);