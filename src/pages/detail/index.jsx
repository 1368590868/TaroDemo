import { View,Button } from '@tarojs/components'
import Taro, { useEffect ,useState} from '@tarojs/taro';
import { TaroRichText } from "taro_rich_text";
function Detail () {
    // 获取文章id
    const id = this.$router.params.id
    const [rich,setRich] = useState('')
    useEffect(() => {
        Taro.request({ url: `https://irlin.cn/api/article/${id}` }).then(res => {
            setRich (res.data.data[0].content)
        })
    },[])

     return (
       <View style={"padding:0 10px"}>
             <TaroRichText raw={false} type="html" richText={rich} />
             
             <Button style={'width: 80%;margin-top: 20px;margin-bottom:20px;background-color: burlywood;color: white;border-radius: 98px;display: flex;flex-direction: row;align-items: center;justify-content: center;'} open-type="share">
           <View >分享</View>
         </Button>
       </View>
     );
}
Detail.config = {
  navigationBarTitleText: "文章详情",
    // wxparser: "plugin://wxparserPlugin/wxparser"
};
export default Detail