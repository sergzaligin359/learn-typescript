import reloadFunc from './reloadfunc';
import types from './types';
import arrays from './arrays';
import classes from './classes';

export default (): void => {
  console.log('Learn...');
  console.log('Reload func', reloadFunc(1, 99));
  types();
  classes();
  arrays();
};
