const x = 4;
const y = 11;


if(x  > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10')
    
    
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
}else {
    console.log('x is less than 10');
}

//   || - or; && - and ; ? - than; : - else//

const z = 9;

const color = 'green'
console.log(color);

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');
            break;

}