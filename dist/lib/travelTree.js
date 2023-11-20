"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function travel(tree, cb, children = "children") {
  const set = /* @__PURE__ */ new Set();
  const _travel = (tree2, cb2, children2) => {
    tree2.forEach((node) => {
      if (set.has(node))
        return;
      cb2(node);
      set.add(node);
      Array.isArray(node[children2]) && _travel(node[children2], cb2, children2);
    });
  };
  _travel(tree, cb, children);
}
exports.default = travel;
//# sourceMappingURL=travelTree.js.map
