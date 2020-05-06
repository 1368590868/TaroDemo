import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Navbar from "../components/navbar";
function Article() {
 return (
   <View>
     <Navbar title={"文章列表"}></Navbar>
   </View>
 );
}
Article.config = {
  navigationBarTitleText: "文章列表",
};
export default Article;
