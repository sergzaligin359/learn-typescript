export default () => {
  console.log('generics');
  type A<T> = T;
  type B = A<string>;
  type C = A<'hello'>;
  type D = A<number>;
  console.log('Generic type B: ');
  type MyArray<T> = T[];
  const arr: MyArray<string> = ['one', 'two', 'tree'];
  console.log('Generic arr: MyArray<string>: ', arr);
  function echo<T>(x: T): T {
    return x;
  }
  const result = echo('Hello world!!!');

  type MyArrayNumbers<T> = T[];
  type MyArrayStrs<T> = T[];

  const arrNums: MyArrayNumbers<number> = [1, 2, 3, 4, 5];
  const arrStrs: MyArrayStrs<string> = ['1', '2', '3', '4', '5'];

  console.log('arrNums', arrNums);
  console.log('arrStrs', arrStrs);

  // Данная функция может работать с массивами содержащими и намбер и стринг значения
  function reverse<T>(arrs: T[]): T[] {
    return arrs.reverse();
  }

  console.log('REVERSE nums', reverse(arrNums));
  console.log('REVERSE strs', reverse(arrStrs));

  const strArr = ['val', 'val2', 'val3', true];
  type M<T> = { val: T };
  const newArr = strArr.map(
    <T>(item: T): M<T> => {
      return {
        val: item,
      };
    }
  );
  console.log('New arr', newArr[3].val);

  function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
  }
  const user = mergeObjects({ name: 'Sergey' }, { age: 35 });
  console.log('Merge objects', user);
  console.log('Merge objects get user name', user.name);
  // Нужен для проверки наличия свойства length
  interface ILength {
    length: number;
  }
  type G<T> = { value: T; count: string };
  function withCount<T extends ILength>(value: T): G<T> {
    return {
      value,
      count: `Тут ${value.length} символа.`,
    };
  }
  console.log('withCount 1', withCount('weqr'));
  console.log('withCount 2', withCount('how'));
  console.log('withCount 3', withCount('o'));

  function getObjectValueByKey<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
  }

  const person = {
    name: 'Ivan',
    age: 33,
  };

  console.log('getObjectValueByKey', getObjectValueByKey(person, 'name'));
  // console.log('getObjectValueByKey', getObjectValueByKey(person, 'none'));

  class Collection<T> {
    private list: T[] = [];

    add(item: T) {
      this.list.push(item);
    }

    get all(): T[] {
      return this.list;
    }
  }
  const collect = new Collection();
  collect.add('Item');
  collect.add(99);
  collect.add(false);
  console.log('collect all', collect.all);
};
