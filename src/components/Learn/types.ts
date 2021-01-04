export default () => {
  let varNum: null | number = null;
  varNum = 222;
  console.log('varNum null | number', varNum);

  // Приведение типов
  const a: unknown = 333;
  let b: string = a as string;
  console.log('a-b', a, b);
  b = 'hi';
  console.log('a-b', typeof a, typeof b);

  // Псевдонимы типов для того чтобы избавится от грамоздкого обьявления let varNum: null | number = null
  type getDragData = null | string;
  let varStr: getDragData = null;
  varStr = 'Hello world!!!';
  console.log('varStr null | string', varStr);

  // Псевдонимы типов для указания допустимых значений  type statusUser = 0 | 1 | 2;
  type statusUser = 0 | 1 | 2;
  let varStatusUser: statusUser = 0;
  varStatusUser = 2;
  console.log('varStatusUser 0 | 1 | 2', varStatusUser);

  // Пересечение свойств обьекта:
  // | - одно из свойств должно быть или оба
  // & - оба своства должны быть
  type M = { a: string } | { b: number };
  const obj: M = { b: 23 };
  const obj2: M = { a: 'hi', b: 23 };
  // const obj3: M = { a: 'hi', b: 23, c: 11 }; FAILED
  console.log('Obj obj: ', obj);
  console.log('Obj obj2: ', obj2);
  // console.log('Obj obj3: ', obj3); FAILED
};
