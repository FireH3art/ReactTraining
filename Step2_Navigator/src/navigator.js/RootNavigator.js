import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetail from '../screens/MovieDetail';
import MovieList from '../screens/MovieList';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MovieList'>
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{ title: 'Movie List' }}
        />
          <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};