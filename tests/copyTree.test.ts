import { beforeEach, describe, expect, test } from 'vitest';
import copyTree from '../src/copyTree';
import travelTree from '../src/travelTree';

describe('copy tree', () => {
  let tree: Record<string, any>[];
  let tree2: Record<string, any>[];
  let tree3: Record<string, any>[];
  let tree4: Record<string, any>[];

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

    tree2 = [
      {
        label: 1,
        childNodes: [
          {
            label: 2
          }
        ]
      },
      {
        label: 3,
        childNodes: [
          {
            label: 4
          },
          {
            label: 5,
            childNodes: [
              {
                label: 6
              }
            ]
          }
        ]
      }
    ];

    tree3 = [
      {
        label: 1,
        text: 'test',
        children: [
          {
            label: 2,
            text: 'test',
          }
        ]
      },
      {
        label: 3,
        text: 'test',
        children: [
          {
            label: 4,
            text: 'test',
          },
          {
            label: 5,
            text: 'test',
            children: [
              {
                label: 6,
                text: 'test',
              }
            ]
          }
        ]
      }
    ];

    tree4 = [
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
    travelTree(tree4, node => {
      node.children?.forEach(child => {
        child.parent = node;
      });
    });
  });

  test('copy tree', () => {
    const newTree = copyTree(tree);
    expect(newTree).not.toBe(tree);
    expect(newTree).toEqual(tree);
  });

  test('specify children prop', () => {
    const newTree = copyTree(tree2, 'childNodes');
    expect(newTree).not.toBe(tree2);
    expect(newTree).toEqual(tree2);
  });

  test('specify callback', () => {
    const newTree = copyTree(tree, 'children', node => {
      node.text = 'test';
    });
    expect(newTree).not.toBe(tree3);
    expect(newTree).toEqual(tree3);
  });

  test('circular reference', () => {
    const newTree = copyTree(tree4);
    expect(newTree).not.toBe(tree4);
    expect(newTree).toEqual(tree4);
  });
})
