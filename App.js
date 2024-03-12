import { useState } from 'react';
import { WorkoutContext, UnitsContext } from './components/Contexts';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon,PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkoutList from './components/WorkoutList';
import AddWorkout from './components/AddWorkout';
import Settings from './components/Settings';
import Styles, { MyTheme } from './styles/Styles';

export default function App() {

  const [workout, setWorkout] = useState([]);
  const [units, setUnits] = useState('km');

  console.log(workout, units);
  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      <UnitsContext.Provider value={{ units, setUnits }}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </UnitsContext.Provider>
    </WorkoutContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition='bottom'
        style={Styles.container}
        screenOptions={{
          tabBarActiveTintColor: MyTheme.colors.primary,
          tabBarInactiveTintColor: 'black',
          tabBarStyle: { backgroundColor: MyTheme.colors.surfaceVariant }
        }}>
        <Tab.Screen
          name='AddWorkout'
          options={{
            title: 'New workout', tabBarIcon: ({ color }) => <Icon color={color}
              source='dumbbell'
              size={24}></Icon>
          }}
          component={AddWorkout}>
        </Tab.Screen>
        <Tab.Screen
          name='WorkoutList'
          options={{
            title: 'My workouts', tabBarIcon: ({ color }) => <Icon color={color}
              source='clipboard-list-outline'
              size={24}></Icon>
          }}
          component={WorkoutList}>
        </Tab.Screen>
        <Tab.Screen
          name='set'
          options={{
            title: 'Settings', tabBarIcon: ({ color }) => <Icon color={color}
              source='cog-outline'
              size={24}></Icon>
          }}
          component={Settings}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}