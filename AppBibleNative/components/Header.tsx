import { Text, View } from "react-native";

interface HeaderProps {
    texto: string;
}

export default function Header ({ texto }: HeaderProps) {
 

    return (
        <View>

            <Text>{texto}</Text>

        </View>
        
    );

}