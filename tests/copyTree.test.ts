import { beforeEach, describe, expect, test } from 'vitest';
import copyTree from '../src/copyTree';

describe('copy tree', () => {
  let tree: Record<string, any>[];

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

  test('should copy tree', () => {
    expect(copyTree(tree)).toEqual(tree);
  })
})
