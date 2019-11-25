// const a = 100;
// console.log(a);
// let b = 1000;
// console.log(b);
//
//
// {
//     var x=0;
//     console.log(x)
// }
// console.log(x);

// let x = prompt('Введите Х: ');
// if (x < 5)
// {
//     console.log('small size');
// }
// else if (x < 10)
// {
//     console.log('right size')
// }
// else
// {
//     console.log('big size');
// }
//
// if (x % 2 === 0 && x < 10 && x >= 5)
// {
//     console.log('even and right size');
// }
//
// if (x % 2 != 0 && (x < 5 || x >= 10))
// {
//     console.log('odd and wrong size');
// }

//
// color = prompt('Input color:')
// switch (color) {
//     case 'red':
//         console.log('#FFF000')
//         break;
//     case 'blue':
//         console.log('#FFF111')
//         break;
//     case 'green':
//         console.log('#GGG111')
//         break;
//     default:
//         console.log('unknown color');
// }
array = [];
for (let i = 0; i <= 10; i++)
{
    console.log(i);
    array[i] = 10 - i;
}
console.log(array)

let j = 0;
while (j<10){
    console.log(array[j] + '-'+ j);
    j++;
}