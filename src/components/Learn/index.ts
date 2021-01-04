import reloadFunc from './reloadfunc';
import types from './types';
import arrays from './arrays';
import classes from './classes';
import generics from './generics';

export default (): void => {
  console.log('Learn...');
  console.log('Reload func', reloadFunc(1, 99));
  // types();
  // classes();
  // arrays();
  generics();
};
