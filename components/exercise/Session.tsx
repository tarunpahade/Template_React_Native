import React from 'react'
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import * as Icon from 'react-feather';

 const Session = () => {
    const tailwind = useTailwind()
    return (

        <View  style={tailwind('h-full absolute  items-center bg-gray-500 p-12 pt-40')}>
            <View style={tailwind('bg-white w-full p-6 rounded-lg items-center')}>
                <Text style={tailwind('text-gray-800 text-xl font-medium mt-4')}>Payment successful</Text>
                <Text style={tailwind('text-gray-600 text-center mt-2 w-56')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <View style={tailwind('bg-indigo-600 w-full py-2 items-center rounded-md mt-6')}>
                    <Text style={tailwind('text-white font-medium')}>
                        Go back to dashboard
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default Session