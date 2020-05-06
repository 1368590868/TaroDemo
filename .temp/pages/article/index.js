import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
import Navbar from "../components/navbar";

class Article extends Taro.Component {
  config = {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "文章列表",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light"
  };

  render() {
    return <View>
     <Navbar title={"文章列表"}></Navbar>
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

Article.config = { navigationBarBackgroundColor: "#ffffff", navigationBarTitleText: "文章列表", backgroundColor: "#eeeeee", backgroundTextStyle: "light" };
export default Article;