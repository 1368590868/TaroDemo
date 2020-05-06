import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import './index.less';
import Child from './child';

class Index extends Taro.Component {
  render() {
    const [username, setUsername] = Taro.useState('irlin');
    const [blogTitle, setBlogTitle] = Taro.useState('');
    const [blogDesc, setBlogDesc] = Taro.useState('');
    Taro.useEffect(() => {
      setBlogTitle(this.$router.params.blogTitle);
      setBlogDesc(this.$router.params.blogDesc);
    }, []);

    return <View>
      <Text>{username}</Text>
      <Child username={username}></Child>
      <View>blogTitle : {blogTitle}</View>
      <View>blogDesc : {blogDesc}</View>
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

export default Index;