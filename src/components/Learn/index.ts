import reloadFunc from './reloadfunc';
import types from './types';

export default (): void => {
  console.log('Learn...');
  console.log('Reload func', reloadFunc(1, 99));
  types();
};
