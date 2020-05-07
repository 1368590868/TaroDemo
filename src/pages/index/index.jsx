import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import Taro, { useState,useEffect} from "@tarojs/taro";
import Navbar from "../components/navbar";
import { AtDivider } from "taro-ui";
import HomeArticle from '../components/article'
import './index.less'
function Index () {
  const [article, setArticle] = useState([])
  
  useEffect(() => {
    Taro.request({ url: 'https://irlin.cn/api/homeArticle'}).then(res => {
        setArticle(res.data.data);
     })
   
  },[])
  /**
   * 轮播图片
   */
  const swiperItem = [
    "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%80.jpg",
    "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%89.jpg",
    "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%8C.jpg",
    "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%94.jpg",
    "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%9B.jpg"
  ];
  return (
    <View>
      <Navbar title="首页"></Navbar>
      {/*轮播图*/}
      <Swiper
        className="home"
        // indicatorColor="#fff"
        // indicatorActiveColor="#1989fa"
        vertical={false}
        circular
        // indicatorDots
        autoplay
      >
        {swiperItem.map((v, i) => {
          return (
            <SwiperItem key={i + v}>
              <View className="home-swiper">
                <Image
                  className="home-swiper-img"
                  style={"height:200px;width:100%;"}
                  src={v}
                />
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
      {/* 文章标题 */}
      <View className="home-article-title">
        <AtDivider content="推荐文章" fontColor="#2d8cf0" lineColor="#2d8cf0" />
      </View>
      <HomeArticle article={article}/>
    </View>
  );
}
Index.config = {
  navigationBarTitleText: "首页",
};
export default Index
