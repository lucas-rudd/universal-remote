import { AppNavigator } from './App';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Home');
const initialNavState = router.getStateForAction(mainNavAction);

const NavigationReducer = (state = initialNavState, action) =>
    router.getStateForAction(action, state);

export default NavigationReducer;
