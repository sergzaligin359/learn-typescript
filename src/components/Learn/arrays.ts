export default () => {
  // Массив
  type A = (number | string)[];
  const arr: A = [1, 2, 'hi'];
  console.log('arr', arr);

  // Кортеж
  // Может содержать необязательный элемент [number, string?]
  const cortege: [number, string] = [1, 'string'];
  console.log('cortege', cortege);

  // Перечисления
  enum G {
    A,
    B,
  }
  console.log('enum, G.A, G.B, G[0], G[1]', G.A, G.B, G[0], G[1]);
};
