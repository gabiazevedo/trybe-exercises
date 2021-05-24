let angle1 = 45;

let angle2 = 90;

let angle3 = 45;

let sumOfAngles = angle1 + angle2 + angle3;
let allAnglesArePositives = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (sumOfAngles === 180){
    console.log('true');

} else if (sumOfAngles > 180) {
    console.log('false');

} else {
    console.log('error: angle invalid');
}


