import { View, Text, button } from '@tarojs/components'
import Taro,{useState} from '@tarojs/taro'
import '../index.less'
function Blog () {
    const [blogTitle, setBlogTitle] = useState('blogTitle')
    const [blogDesc,setBlogDesc] = useState('blog Description')
    const goIndex = () => {
        Taro.navigateTo({ url:`/pages/index/index?blogTitle=${blogTitle}&blogDesc=${blogDesc}`})
    }
    return (
        <View>
            <Text className={' red '}>this is Blog pages</Text>
            <button onClick={goIndex}>go to Index</button>
        </View>
    )
}
export default Blog