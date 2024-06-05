const obj = {
    id: 'pp',
    children: [
        {
            id: "456",
            name: 'Trump'
        },
        {
            id: "789",
            name: 'modi',
            children: [
                {
                    id: "pqr",
                    name: 'gg',
                    children: [
                        {
                            id: '923',
                            name: 'What'
                        }
                    ]
                }
            ]
        },
        {}
    ]
};

function findObjectById(obj, id) {
    // Check if the current object has the matching id
    if (obj.id === id) {
        return obj;
    }
    // If the object has children, recursively search them
    if (obj.children && Array.isArray(obj.children)) {
        for (const child of obj.children) {
            const result = findObjectById(child, id);
            if (result) {
                return result;
            }
        }
    }
    // If the object was not found, return null
    return null;
}

// Example usage:
const idToFind = 'pqr';
const foundObject = findObjectById(obj, idToFind);
console.log(foundObject);
