import { Text, View } from "react-native";


export default function Header (props) {

    const { texto } = props;

    return (
        <View>

            <Text>{texto}</Text>

        </View>
        
    );

}