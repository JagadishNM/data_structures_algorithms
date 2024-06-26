class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  }
  
  const data = {
    name: 'Node0',
    children: [
      {
        name: 'Node0.1',
        children: [
          {
            name: 'Node0.1.1',
            children: [
              {
                name: 'Node0.1.1.1'
              }
            ]
          },
          {
            name: 'Node0.1.2'
          }
        ]
      }
    ]
  };
  
  function process(data) {
    if (!data) {
        return null;
      }
      
      const node = new Node(data.name);
      
      if (data.children && data.children.length > 0) {
        data.children.forEach(childData => {
          const childNode = process(childData);
          if (childNode) {
            node.children.push(childNode);
          }
        });
      }
      
      return node;
  }
  
  const rootNode = process(data);
  console.log('rootNode is Node', rootNode instanceof Node);
  
  const node0 = rootNode;
  console.log('node0 is Node', node0 instanceof Node);
  
  const node0_1 = rootNode.children[0];
  console.log('node0_1 is Node', node0_1 instanceof Node);
  
  const node0_1_1 = node0_1.children[0];
  console.log('node0_1_1 is Node', node0_1_1 instanceof Node);
  