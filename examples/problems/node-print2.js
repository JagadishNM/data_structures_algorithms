const data = {
    name: 'Smith',
    offsprings: [{
        name: 'Johnson',
        offsprings: [],
    },{
        name: 'Elizabeth',
        offsprings: [{
          name: 'Rodriguez',
          offsprings: [],
      }],
    },{
        name: 'Dorothy',
        offsprings: [{
          name: 'Lisa',
          offsprings: [],
      }],
    },{
        name: 'Martinez',
        offsprings: [],
    }]
};

const stack = [];

function printHighrachy(obj, parent = '') {
    
    // Add the current person's name with or without parent name
    if (parent) {
        stack.push(obj.name + ' ' + parent);
    } else {
        stack.push(obj.name);
    }
    
    // Recursively process each offspring
    obj.offsprings.forEach((child) => {
        printHighrachy(child, obj.name + (parent ? ' ' + parent : ''));
    });
    
    return stack;
}

console.log(printHighrachy(data));