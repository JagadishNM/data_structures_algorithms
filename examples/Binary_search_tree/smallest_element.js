// find kth smallest element in Binary Search Tree
// https://www.youtube.com/watch?v=za9OrjpbaCs

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = (root, k) => {
    const stack = [];
    
    const dfs = (node) => {
        if(!node) return;
        
        dfs(node.left);
        stack.push(node.val);
        dfs(node.right);
    }
    
    dfs(root)
    return stack[k - 1];
};