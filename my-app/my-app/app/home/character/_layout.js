import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
        <Stack.Screen name ="index" options={
            { 
            title: 'Characters',
            headerTitleAlign: 'center',
            headerTintColor: "#037D2B"
            }
        }
        />
        <Stack.Screen name ="anna" options={
            { 
            title: 'Anna',
            headerTitleAlign: 'center',
            headerTintColor: "#037D2B"
            }
        }
        />
        <Stack.Screen name ="learn" options={
            { 
            title: 'Game: Learn',
            headerTitleAlign: 'center',
            headerTintColor: "#037D2B"
            }
        }
        />
        <Stack.Screen name ="count" options={
            { 
            title: 'Game: Counting',
            headerTintColor: "#037D2B"
            }
        }
        />
        <Stack.Screen name ="twobox" options={
            { 
            title: 'Game: Two Boxes',
            headerTintColor: "#037D2B"
            }
        }
        />
        </Stack>
    )
}