import { View, Image, StyleSheet } from "react-native";



export default function ProfileImage (props) {

    const minhaImagemLocal = props.image;

    return(
        
        <View style={styles.container} >
           <Image 
            source={minhaImagemLocal}
           style={styles.image}
           />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 200
    },
    image: {
        width: 500,
        height: 500,
        borderRadius: 15
    }
});