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
};
