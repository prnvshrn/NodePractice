LinkedList = (val) => {
    this.val = val;
    this.next = null;
} 

dfs = (node) => {
    if(!(node)) return;
    console.log(node.val);
    dfs(node.left);
    dfs(node.right);
}

var root = LinkedList(3);
var head = root;
/*root.next = LinkedList(5);
root = root.next;
root.next = LinkedList(1);*/

console.log(dfs(root));