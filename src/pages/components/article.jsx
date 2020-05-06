import { View, Button } from '@tarojs/components'
import '../../assets/comcss/article.less'
export default function HomeArticle(props){
    return (
        <View className="aritcle-wrap">

            <View className={'article'}>{props.article[0].articleType}</View>
    </View>);
}