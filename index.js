function saturdayFun (action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`;
}

function mondayWork (workThing = 'go to the office') {
    return  `This Monday, I will ${workThing}.`;
}

/*function wrapAdjective () {
    return function inner(specialParam = 'special', flairParam = '*') {
        return `You are ${specialParam}!`;
        };
    }*/

let wrapAdjective = function (flair = '*') {
    return function (single='special') {
        return `You are ${flair}${single}${flair}!`;
    }
}