import { test, expect } from 'vitest';
import travelTree from '../src/travelTree';

test('travel tree', () => {
    function testTravelTree () {
        const tree = [
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
    
        const result: number[] = [];
        travelTree(tree, node => {
            result.push(node.label);
        });
        return result;
    }

    expect(testTravelTree()).toEqual([
        1, 2, 3, 4, 5, 6
    ]);
});
