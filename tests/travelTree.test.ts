import { describe, test, expect, beforeEach } from 'vitest';
import travelTree from '../src/travelTree';

describe('travel tree', () => {
    let tree: any;
    const result: number[] = [ 1, 2, 3, 4, 5, 6 ];
    beforeEach(() => {
        tree = [
            {
                label: 1,
                children: [
                    {
                        label: 2
                    }
                ]
            },
            {
                label: 3,
                children: [
                    {
                        label: 4
                    },
                    {
                        label: 5,
                        children: [
                            {
                                label: 6
                            }
                        ]
                    }
                ]
            }
        ];
    });
    
    test('travel tree', () => {
        function testTravelTree () {
            const result: number[] = [];
            travelTree(tree, node => {
                result.push(node.label);
            });
            return result;
        }
    
        expect(testTravelTree()).toEqual(result);
    });

    test('travel circular tree', () => {
        function testTravelTree () {
            // set circular
            tree[0].children[0].children = tree;
        
            const result: number[] = [];
            travelTree(tree, node => {
                result.push(node.label);
            });
            return result;
        }
    
        expect(testTravelTree()).toEqual(result);
    });
});
