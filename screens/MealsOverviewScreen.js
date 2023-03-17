import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
    const catId = route.params.categorId;

    return (
        <View style={styles.container}>
            <Text>Meals overview screen - {catId}</Text>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});