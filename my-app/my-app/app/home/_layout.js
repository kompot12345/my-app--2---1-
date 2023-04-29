import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default () => {
    return(
        <Tabs screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: "#037D2B"}}>
            <Tabs.Screen
                name="character"
                options={{
                    headerShown:false,
                    tabBarIcon: ({color}) =>(
                     <AntDesign name="user" size={24} color={color} /> 
                    )
                }}
            />
            {/* <Tabs.Screen
                name="game"
                options={{
                    tabBarIcon: ({color}) =>(
                        <FontAwesome name="gamepad" size={24} color={color} />
                    )
                }}
            /> */}
            <Tabs.Screen 
                name="cards" 
                options={{
                    headerShown:false,
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="cards" size={24} color={color} />
                    )
                }}
            />
            
                <Tabs.Screen
                name="search" 
                options={{ 
                    title: 'Search',
                headerTitleAlign: 'center',
                headerTintColor: "#037D2B",
                    tabBarIcon: ({color}) =>(
                    <AntDesign name="search1" size={24} color={color} />
                        )
                    }}
                />

                <Tabs.Screen
                name="settings" 
                options={{
                    title: 'Settings',
                    headerTitleAlign: 'center',
                    headerTintColor: "#037D2B",
                    tabBarIcon: ({color}) =>(
                        <AntDesign name="setting" size={24} color={color} /> 
                        )
                    }}
                />
        </Tabs>
    
    )
}