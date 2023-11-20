type CopyTreeCallback<T extends object> = (node: T) => void;
declare function copyTree<T extends object>(tree: T[], children?: string, cb?: CopyTreeCallback<T>): T[];
export default copyTree;
