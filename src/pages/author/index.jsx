import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import Navbar from "../components/navbar";
function Author() {
    return (
      <View>
        <Navbar title={"帅气的木木"}></Navbar>
        <Image
          style="width:100%;height: 200px;"
          src="http://cdn.irlin.cn/xmj1.jpg"
        />
      </View>
    );
}
Author.config = {
  navigationBarTitleText: "帅气的木木",
};
export default Author;  
