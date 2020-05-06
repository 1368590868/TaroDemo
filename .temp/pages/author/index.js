import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from "@tarojs/components";
import Navbar from "../components/navbar";

class Author extends Taro.Component {
  config = {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTitleText: "帅气的木木",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light"
  };

  render() {
    return <View>
        <Navbar title={'帅气的木木'}></Navbar>
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

Author.config = { navigationBarBackgroundColor: "#ffffff", navigationBarTitleText: "帅气的木木", backgroundColor: "#eeeeee", backgroundTextStyle: "light" };
export default Author;