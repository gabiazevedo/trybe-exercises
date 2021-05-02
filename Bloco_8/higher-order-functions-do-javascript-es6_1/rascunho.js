const formalGreeting = () => {
    console.log('Como vai você?');
}

const casualGreeting = () => {
    console.log('O que foi?');
}

function greet (type, greetFormal, greetCasual) {
    if (type === 'formal') {
        greetFormal();
    } else if (type === 'casual') {
        greetCasual();
    }
    }
greet('formal', formalGreeting, casualGreeting);
