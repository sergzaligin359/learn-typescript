import Person from './cls/Person';
import Work from './cls/Work';

export default () => {
  console.log('classes');
  // Методы т конструктор могут иметь перезагрузки
  const sergey: Work = new Work('Sergey', 35);
  const ivan: Work = new Work('Ivan', 32);

  ivan.setPosition = 'Marketing';
  sergey.setPosition = 'Developer';

  console.log('Person Sergey: ', sergey);
  console.log('Person Ivan: ', ivan);
  ivan.setAge = 33;
  ivan.setIsStudy = false;
  sergey.setIsStudy = true;
  console.log('Person Ivan after settings age: ', ivan.getAge);

  ivan.sayHello();
  console.log('Can fly Ivan?', Person.isFly);
  console.log('Person description: ', Person);
};
