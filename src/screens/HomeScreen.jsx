import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container_inner}
      >
        <Text variant="titleLarge"> Tela inicial</Text>
        <Text>

        </Text>
   
         
      </ScrollView>
    </View>
  );
}
