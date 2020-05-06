import Nerv from "nervjs";
import { View, Text, button } from '@tarojs/components';
import Taro from "@tarojs/taro-h5";
import '../index.less';

class Blog extends Taro.Component {
  render() {
    const [blogTitle, setBlogTitle] = Taro.useState('blogTitle');
    const [blogDesc, setBlogDesc] = Taro.useState('blog Description');
    const goIndex = () => {
      Taro.navigateTo({ url: `/pages/index/index?blogTitle=${blogTitle}&blogDesc=${blogDesc}` });
    };
    return <View>
            <Text className={' red '}>this is Blog pages</Text>
            <button onClick={goIndex}>go to Index</button>
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

export default Blog;