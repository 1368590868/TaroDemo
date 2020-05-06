import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import Navbar from "../components/navbar";
import { AtDivider } from "taro-ui";

import './index.less';

class Index extends Taro.Component {
  config = {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "首页",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light"
  };

  render() {
    /**
     * 轮播图片
     */
    const swiperItem = ["http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%80.jpg", "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%B8%89.jpg", "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%8C.jpg", "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E4%BA%94.jpg", "http://cdn.irlin.cn/%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%9B%9B.jpg"];
    return <View>
      <Navbar title="首页"></Navbar>
  {/*轮播图*/}
      <Swiper className="home"
      // indicatorColor="#fff"
      // indicatorActiveColor="#1989fa"
      vertical={false} circular
      // indicatorDots
      autoplay>
        {swiperItem.map((v, i) => {
          return <SwiperItem key={i + v}>
              <View className="home-swiper">
                <Image className="home-swiper-img" style={"height:auto;width:100%;"} src={v} />
              </View>
            </SwiperItem>;
        })}
      </Swiper>
      {/* 文章标题 */}
      <View>
        <AtDivider content="文章列表" fontColor="#2d8cf0" lineColor="#2d8cf0" />
      </View>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

Index.config = { navigationBarBackgroundColor: "#ffffff", navigationBarTitleText: "首页", backgroundColor: "#eeeeee", backgroundTextStyle: "light" };
export default Index;