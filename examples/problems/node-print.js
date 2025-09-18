// node 1 => node 1 child, node 1 child 2
const orignodes = [
    {
         name:'node-1',
         children: [
             {
                 name:'node-1-1',
                 children: [{
                     name:'node-1-1-1',
                     children: []
                 }]
             },
             {
                 name:'node-1-2',
                 children: [{
                     name:'node-1-2-1',
                     children: []
                 }]
             }
         ]
     },
     {
         name: 'node-2',
         children:[{
             name:'node-2-1',
             children: []
         }]
     },
     {
         name: 'node-3',
         children:[]
     }
 ]
 // [{name: 'node-1', children: ['node-1-1', 'node-1-2']}, {name: 'node-1-1', children: ['node-1-1-1']},
 //  {name: 'node-1-1-1'}, {name: 'node-1-2'}]
 
 // output: [{'node-1': {}}]
 
 function flatnodes(nodes, arr = []){
 nodes.forEach(node => {
     if(Array.isArray(node.children) && node.children.length > 0){
        
         let children = node.children?.map(item => item.name);
         arr.push({name:node.name, children });
         
         flatnodes(node.children, arr);
     }else{
         arr.push({name:node.name, children: []})
     }
 });
 
     return arr;
 
 }
 
 console.log(flatnodes(orignodes))