import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
//mport MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    FontAwesome,
    FontAwesome5, Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    Entypo,
    Feather,
    AntDesign,
    EvilIcons,
    FontAwesome6,
    Octicons,
    SimpleLineIcons
} from '@expo/vector-icons';
// interface IconProps {
//     name: string;
//     size: number;
//     color: string;
//     type: string;
// }
const Icon = ({ name, size, color, type }) => {
    return (
        <View>
            {
                type === 'MaterialIcons' ? (
                    <MaterialIcons name={name} size={size} color={color} />
                )
                    : type === 'FontAwesome' ? (
                        <FontAwesome name={name} size={size} color={color} />
                    )
                        : type === 'FontAwesome5' ? (
                            <FontAwesome5 name={name} size={size} color={color} />
                        ) :
                            type === 'Fontisto' ? (
                                <Fontisto name={name} size={size} color={color} />
                            ) :
                                type === 'Ionicons' ? (
                                    <Ionicons name={name} size={size} color={color} />
                                ) :
                                    type === 'Entypo' ? (
                                        <Entypo name={name} size={size} color={color} />
                                    ) :
                                        type === 'Feather' ? (
                                            <Feather name={name} size={size} color={color} />

                                        ) :
                                            type === 'AntDesign' ? (
                                                <AntDesign name={name} size={size} color={color} />
                                            ) :
                                                type === 'EvilIcons' ? (
                                                    <EvilIcons name={name} size={size} color={color} />

                                                ) :
                                                    type === 'FontAwesome6' ? (
                                                        <FontAwesome6 name={name} size={size} color={color} />
                                                    ) :
                                                        type === 'Octicons' ? (
                                                            <Octicons name={name} size={size} color={color} />
                                                        ) :
                                                            type === 'SimpleLineIcons' ? (
                                                                <SimpleLineIcons name={name} size={size} color={color} />
                                                            ) :
                                                                (
                                                                    <MaterialCommunityIcons name={name} size={size} color={color} />
                                                                )}
        </View>
    );
}
export default Icon;