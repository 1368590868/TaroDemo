import { View, Image } from "@tarojs/components";
import Taro from '@tarojs/taro';
import "../../assets/comcss/article.less";
import { AtCard } from "taro-ui";
export default function HomeArticle (props) {
    HomeArticle.defaultProps = {
      article: "5e9d977caeebc2229aabd59a"
    };
    const { article } = props;
    // 跳转详情页
  return (
    <View className="aritcle-wrap">
      {article.map((v, i) => {
          return (
              <View style={"margin-top:5px"} key={i + v.view} onClick={() => {
        Taro.navigateTo({ url: `/pages/detail/index?id=${v._id}`})
    }}>
          <AtCard
            note={`浏览：${v.view}`}
           
            title={v.title}
            thumb={v.imgurl}
           
          >
            <View
              style={"width:100px;margin:0 auto;font-size:12px;color:#616367"}
            >
              日期:{v.createAt.split("T")[0]}
            </View>
            {v.desc}
            <Image
              style="display:block;width:70px;height:62.5px;margin:0 auto;"
              src={v.imgurl}
            />
                  </AtCard>
              </View>
        );
      })}
    </View>
  );
}
