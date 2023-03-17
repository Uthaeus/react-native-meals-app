import { View, Text } from "react-native";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    
    return (
        <View>
            <Text>meal detail screen</Text>
        </View>
    );
}

export default MealDetailScreen;