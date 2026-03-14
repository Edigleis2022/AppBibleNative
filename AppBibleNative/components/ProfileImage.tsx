import { View, Image } from "react-native";



export default function ProfileImage (props) {

    const minhaImagemLocal = props.image;

    return(
        
        <View>
           <Image 
            source={minhaImagemLocal}
           
           />
        </View>

    );
}