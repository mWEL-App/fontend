import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import icons from '@/constants/icons';
export default function Layout(){
    return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen  
            name='(tabs)'
            options={{
                drawerLabel: 'Home',
                title: '',
            }}
        />
        <Drawer.Screen  
            name='home'
            options={{
                drawerLabel: 'Homeofva',
                title: 'Home of nav',
            }}
        />
        <Drawer.Screen  
            name='settings'
            options={{
                drawerLabel: 'settings',
                title: 'settings',
            }}
        />
      </Drawer>
    </GestureHandlerRootView>
    )
}