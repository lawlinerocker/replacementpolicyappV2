import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { OptimalScreen } from '../screens/OptimalScreen'
import { FIFOScreen } from '../screens/FIFOScreen'
import { RandomScreen } from '../screens/RandomScreen'
import { LRUScreen } from '../screens/LRUScreen'

const Stack = createNativeStackNavigator()

export const StackNav = () => {
    return (
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={
                 
      { headerShown: false }
            }
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Optimal" component={OptimalScreen} />
            <Stack.Screen name="FIFO" component={FIFOScreen} />
            <Stack.Screen name="Random" component={RandomScreen} />
            <Stack.Screen name="LRU" component={LRUScreen} />
        </Stack.Navigator>
    )
}
