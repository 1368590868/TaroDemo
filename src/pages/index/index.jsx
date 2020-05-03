import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

function Index () {
  const [username, setUsername] = useState('irlin')
  
  return (
    <View>
      <Text>{username}</Text>
    </View>
  )
}
export default Index
