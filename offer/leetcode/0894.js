// 满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。

// 返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。

// 答案中每个树的每个结点都必须有 node.val=0。

// 你可以按任何顺序返回树的最终列表。


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    let res = [];
    res.push(new TreeNode(0));
    let len = (N - 1) /2
    for (let i = 0; i < len; i++) {
        let temp = [];
        res.forEach(v => {
            temp.push()
        })
    }
};

console.log(allPossibleFBT(5))