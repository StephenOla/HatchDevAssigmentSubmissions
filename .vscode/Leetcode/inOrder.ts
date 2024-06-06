/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const traverse = (root: TreeNode | null) => {
      if (root === null) {
          return;
      }
      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
  };

  traverse(root); 
  return result;
};