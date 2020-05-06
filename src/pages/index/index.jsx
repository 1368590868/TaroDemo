import Taro, { useState ,useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child'

function Index () {
  const [username, setUsername] = useState('irlin')
  const [blogTitle, setBlogTitle] = useState('')
  const [blogDesc, setBlogDesc] = useState('')
  useEffect(() => {
    setBlogTitle(this.$router.params.blogTitle)
    setBlogDesc(this.$router.params.blogDesc)
  },[])

  return (
    <View>
      <Text>{username}</Text>
      <Child username={username}></Child>
      <View>blogTitle : {blogTitle}</View>
      <View>blogDesc : {blogDesc}</View>
    </View>
  )
}
export default Index
