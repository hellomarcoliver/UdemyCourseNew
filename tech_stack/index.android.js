import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

// Enable animations for android.
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('tech_stack', () => App);
