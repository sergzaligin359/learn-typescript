export default () => {
  //   function Log(constructor: Function) {
  //     console.log('constructor', constructor);
  //   }
  //   function Log2(target: any, propName: string | symbol) {
  //     console.log('target', target);
  //     console.log('propName', propName);
  //   }
  //   function Log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
  //     console.log('target', target);
  //     console.log('propName', propName);
  //     console.log('descriptor', descriptor);
  //   }
  //   @Log
  //   class ComponentLog {
  //     @Log2
  //     name: string;
  //     constructor(name: string) {
  //       this.name = name;
  //     }
  //     @Log3
  //     get componentName() {
  //       return this.name;
  //     }
  //     @Log3
  //     logName(): void {
  //       console.log('Log name prop', this.name);
  //     }
  //   }
  interface IComponentDecorator {
    selector: string;
    template: string;
  }
  function Component(config: IComponentDecorator) {
    return <T extends new (...args: any[]) => object>(Constructor: T) => {
      // tslint:disable-next-line: new-parens
      return new (class extends Constructor {
        constructor(...args: any[]) {
          super(...args);
          const card = document.querySelector(config.selector) as HTMLElement;
          card.innerHTML = config.template;
        }
      })();
    };
  }
  // tslint:disable-next-line: max-classes-per-file
  @Component({
    selector: '#card',
    template: `
      <div class="card">
        <div class="card-content">
          <span class="card-title"> Title component </span>
        </div>
      </div>
    `,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  class CardComponent {
    constructor(public name: string) {}

    logName(): void {
      console.log('Log name prop');
    }
  }
};
