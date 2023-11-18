function cloneDeep (arg: any) {
  const map = new Map();
  return _cloneDeep(arg, map);
}

function _cloneDeep (arg: any, map: Map<any, any>) {
  if (map.has(arg)) return map.get(arg);

  if (isArray(arg)) {
    const arr: any[] = [];
    map.set(arg, arr);
    arg.forEach(item => {
      arr.push(_cloneDeep(item, map));
    });
    return arr;
  } else if (isObject(arg)) {
    const obj: object = {};
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
function isObject (arg: any): arg is object {
  return toStr.call(arg) === '[object Object]';
}

function isArray (arg: any): arg is any[] {
  return Array.isArray(arg);
}

export default cloneDeep;
