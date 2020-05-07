import { View, Image,Text } from "@tarojs/components";
function Author() {
  return (
    <View
      style={
        "height:100vh;background-image:url(http://cdn.irlin.cn/1e65d8c0-9061-11ea-9262-231f28fe50e4.jpg);background-size:cover;display:flex;justify-content:center;align-items:center;flex-flow:column nowrap;"
      }
    >
      <Image
        src="http://cdn.irlin.cn/header.png"
        style={
          "height:134px;width:75px;display:block;margin:0 auto;padding-top:30px"
        }
      ></Image>
      <View
        style={
          "width:230px;height:100px;margin:30px auto;background-color:rgba(0,0,0,.3);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;"
        }
      >
        {/* <View style={"margin-top:20px;"}>喜欢唱、跳、Rap、敲代码</View> */}
        <Text>QQ:1368590868</Text>
        <Text>WeChat:ranlin_520</Text>
      </View>
    </View>
  );
}
Author.config = {
  navigationBarTitleText: "帅气的木木"
};
export default Author;
