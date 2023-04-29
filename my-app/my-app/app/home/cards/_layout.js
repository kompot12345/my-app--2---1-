import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
        <Stack.Screen name ="index" options={
            { 
            //     headerStyle: {
            //     backgroundColor: "#037D2B"
            //   },
            title: 'PECS Cards',
            headerTitleAlign: 'center',
            headerTintColor: "#037D2B"
            }
        }
        />
        <Stack.Screen name ="communication" options={
            { 
            title: 'Communications',
            headerTintColor: "#037D2B",
            headerTitleAlign: 'center',
            }
        }
        />
        <Stack.Screen name ="emotions" options={
            { 
            title: 'Emotions',
            headerTintColor: "#037D2B",
            headerTitleAlign: 'center',
            }
        }
        />
        <Stack.Screen name ="behaviour" options={
            { 
            title: 'Behaviour',
            headerTintColor: "#037D2B",
            headerTitleAlign: 'center',
            }
        }
        />
        <Stack.Screen name ="senses" options={
            { 
            title: 'Senses',
            headerTintColor: "#037D2B",
            headerTitleAlign: 'center',
            }
        }
        />
        
        </Stack>
    )
}