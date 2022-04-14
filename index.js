// code your solution here
function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
}

function wrapAdjective(arg = "*") {
    return function(adj = "special") {
        return `You are ${arg}${adj}${arg}!`;
    }
}

// console.log(wrapAdjective()("a hard worker"));

const mondayWork = function(action = "go to the office") {
    return `This Monday, I will ${action}.`
};