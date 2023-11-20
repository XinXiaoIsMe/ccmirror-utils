import cloneDeep from "./cloneDeep.mjs";
import travel from "./travelTree.mjs";
function copyTree(tree, children = "children", cb) {
  const newTree = cloneDeep(tree);
  cb && travel(newTree, (node) => {
    cb(node);
  });
  return newTree;
}
export {
  copyTree as default
};
//# sourceMappingURL=copyTree.mjs.map
