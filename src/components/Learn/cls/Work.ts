import Person from './Person';
interface IWork {
  position: string;
  wage: number;
}
interface IStudent {
  isStudy?: boolean;
}
export default class Work extends Person implements IWork, IStudent {
  position: string;
  isStudy: boolean;
  wage = 90000;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  set setPosition(position: string) {
    this.position = position;
  }

  set setIsStudy(study: boolean) {
    this.isStudy = study;
  }

  public description(): { type: string } | { alive: boolean } {
    return {
      type: '',
      alive: true,
    };
  }
}
