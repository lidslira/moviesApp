import {combineReducers} from 'redux';

import font from './font';
import theme from './theme';
import user from '~/modules/User/store/ducks';
import movies from '~/modules/Movies/store/ducks';

export default combineReducers({font, theme, user, movies});
