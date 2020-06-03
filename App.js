import { createAppContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator, reactNavigationStack } from 'react-navigation';
import PeoplePage from  './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDatailPage';

import { capitalizeFirstLetter } from './src/util';

//qualquer coisa substituir o por (AppNavigator)
const AppNavigator = createStackNavigator({
    'Main': {
      screen: PeoplePage
    },
    'PeopleDetail': {
      screen: PeopleDetailPage,
        navigationOptions: ({navigation}) => {
            const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);

            return ({
              title: peopleName,
              headerTitleStyle: {
                color: 'white',
                fontSize: 30,
              }
            });
        }  
    }   
}, {
    defaultNavigationOptions: {
        title: 'Pessoas!',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#a742f5',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
          flexGrow: 1,
          textAlign: 'center',

        },

    }  

});
// tentar substituir por (StackNavigator)
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
