"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const cloneDeep = require("./cloneDeep.js");
const travelTree = require("./travelTree.js");
function copyTree(tree, children = "children", cb) {
  const newTree = cloneDeep.default(tree);
  cb && travelTree.default(newTree, (node) => {
    cb(node);
  });
  return newTree;
}
exports.default = copyTree;
//# sourceMappingURL=copyTree.js.map
