import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
// TODO: Prevent these imports from showing up in the declaration (index.d.ts) file
import '@fontsource/bungee';
import '@fontsource/bungee-shade';
import '@fontsource/roboto-slab';
import '@fontsource/roboto-slab/700.css';
import '@fontsource/roboto-mono';

import './styles/global.css';

library.add(
  faTimesCircle,
);

export { Button } from './components/Button/Button';
export { Alert } from './components/Alert/Alert';
export { Input } from './components/Input/Input';