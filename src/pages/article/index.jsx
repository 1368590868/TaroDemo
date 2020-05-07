import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import HomeArticle from "../components/article";
function Article() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    Taro.request({ url: "https://irlin.cn/api/article" }).then(res => {
      setArticle(res.data.data);
    });
  }, []);
  return (
    <View>
      <HomeArticle article={article}></HomeArticle>
    </View>
  );
}
Article.config = {
  navigationBarTitleText: "全部文章"
};
export default Article;
