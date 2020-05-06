import { View, Text } from '@tarojs/components'

function Child (props) {
    return (
        <View>
            <Text>my name is {props.username} </Text>
        </View>
    )
}
export default Child