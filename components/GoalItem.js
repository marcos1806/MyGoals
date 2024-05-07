import {StyleSheet, Pressable} from "react-native"

function GoalItem({itemData, OnDeLeteItem}){
    return(
        <Pressable onPress={OnDeLeteItem}>
            <view style={styles.goalsItem}>
                <text style={styles.goalText}>{itemData.item.text}</text>
            </view>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#FF6B4C',
        color: 'black'
    },
    goalText: {
        color: 'white'
    }
})