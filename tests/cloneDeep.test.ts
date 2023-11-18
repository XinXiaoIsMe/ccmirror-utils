import { test, expect, describe } from 'vitest';
import cloneDeep from '../src/cloneDeep';

describe('test cloneDeep', () => {
  const obj: object = {
    a: 1,
    b: {
      c: 3,
      d: 4
    },
    e: [ 1, 2 ],
    f: [
      { g: 7 }
    ]
  };

  const arr: any[] = [
    1,
    '2',
    function () {},
    /a/,
    {
      a: 1,
      b: [
        {
          c: 5
        }
      ]
    }
  ];

  const circularReferObj: Record<string, any> = {
    a: 1,
    b: 2,
    d: {
      e: 5
    }
  };
  circularReferObj.c = circularReferObj;
  circularReferObj.d.f = circularReferObj.d;

  test('clone primitive value', () => {
    expect(cloneDeep(1)).toBe(1);
  });

  test('clone object', () => {
    const newObj = cloneDeep(obj);
    expect(newObj).not.toBe(obj);
    expect(newObj).toEqual(obj);
  });

  test('clone array', () => {
    const newArr = cloneDeep(arr);
    expect(newArr).not.toBe(arr);
    expect(newArr).toEqual(arr);
  });

  test('clone circular reference object', () => {
    const newObj = cloneDeep(circularReferObj);
    expect(newObj).not.toBe(circularReferObj);
    expect(newObj).toEqual(circularReferObj);
  })
})
