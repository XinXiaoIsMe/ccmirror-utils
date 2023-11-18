interface TreeNode {
    [key: string]: any;
}

type TravelCallback<T> = (node: T) => void;

function travel<T extends TreeNode> (tree: T[], cb: TravelCallback<T>, children = 'children') {
    const set = new Set<T>();
    const _travel = (tree: T[], cb: TravelCallback<T>, children: string) => {
        tree.forEach(node => {
            if (set.has(node)) return;
            cb(node);
            set.add(node);
            Array.isArray(node[children]) && _travel(node[children], cb, children);
        });
    }

    _travel(tree, cb, children);
}

export default travel;
