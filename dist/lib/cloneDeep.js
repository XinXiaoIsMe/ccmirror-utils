"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function cloneDeep(arg) {
  const map = /* @__PURE__ */ new Map();
  return _cloneDeep(arg, map);
}
function _cloneDeep(arg, map) {
  if (map.has(arg))
    return map.get(arg);
  if (isArray(arg)) {
    const arr = [];
    map.set(arg, arr);
    arg.forEach((item) => {
      arr.push(_cloneDeep(item, map));
    });
    return arr;
  } else if (isObject(arg)) {
    const obj = {};
    map.set(arg, obj);
    for (const key in arg) {
      if (arg.hasOwnProperty(key)) {
        obj[key] = _cloneDeep(arg[key], map);
      }
    }
    return obj;
  } else {
    return arg;
  }
}
const toStr = Object.prototype.toString;
function isObject(arg) {
  return toStr.call(arg) === "[object Object]";
}
function isArray(arg) {
  return Array.isArray(arg);
}
exports.default = cloneDeep;
//# sourceMappingURL=cloneDeep.js.map
