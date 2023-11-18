import cloneDeep from './cloneDeep';
import travelTree from './travelTree';

type CopyTreeCallback<T extends object> = (node: T) => void;

function copyTree<T extends object> (tree: T[], children = 'children', cb?: CopyTreeCallback<T>) {
  const newTree: T[] = cloneDeep(tree);
  cb && travelTree(newTree, node => {
    cb(node);
  });
  return newTree;
}

export default copyTree;
