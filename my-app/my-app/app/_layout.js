import { Stack } from "expo-router"
import { useRouter } from "expo-router"


export default () => {
    return (
        <Stack 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#037D2B',
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontWeight: 'bold',
            },
        }}
        >
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="registration"></Stack.Screen>
        <Stack.Screen name="login" options={{presentation: 'modal'}} />
        <Stack.Screen name="home" options={{headerShown: false}}/>
        </Stack>
    )
}