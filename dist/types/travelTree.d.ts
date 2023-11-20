interface TreeNode {
    [key: string]: any;
}
type TravelCallback<T> = (node: T) => void;
declare function travel<T extends TreeNode>(tree: T[], cb: TravelCallback<T>, children?: string): void;
export default travel;
