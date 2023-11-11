interface TreeNode {
    [key: string]: any;
}

type TravelCallback<T> = (node: T) => void;

function travel<T extends TreeNode> (tree: T[], cb: TravelCallback<T>, children = 'children') {
    tree.forEach(node => {
        cb(node);
        
        Array.isArray(node[children]) && travel(node[children], cb, children);
    });
}

export default travel;
