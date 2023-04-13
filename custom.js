const allReversedArray = (strArr) => {
    let revArr = '';
    const strArr = strArr.split(' ');
    strArr.map((sepStr) => {
        const arrayRev = sepStr.split('').reverse().join('');
        revArr += arrayRev + ' ';
    });

    return revArr.trim();
}

console.log(allReversedArray('Hola Mundo!'));