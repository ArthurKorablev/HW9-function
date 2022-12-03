 const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(num, str) {
    const arr = str.split('');
    const randomStr = [];

    for (let i = 0; i < num; i++){
        let ind = Math.floor(Math.random() * arr.length);
        randomStr.push(arr[ind]);
    }

    return randomStr.join('');
}

console.log(generateKey(16, characters));