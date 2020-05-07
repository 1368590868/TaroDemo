import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
// taro ui style
import "taro-ui/dist/style/index.scss";
// diy style
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}
  // 页面路由
  config = {
    pages: [
      "pages/index/index",
      "pages/article/index",
      "pages/author/index",
      "pages/detail/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    // 小程序
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./assets/img/home.png",
          selectedIconPath: "./assets/img/selectHome.png"
        },
        {
          pagePath: "pages/article/index",
          text: "文章",
          iconPath: "./assets/img/article.png",
          selectedIconPath: "./assets/img/selectArticle.png"
        },
        {
          pagePath: "pages/author/index",
          text: "木木",
          iconPath: "./assets/img/author.png",
          selectedIconPath: "./assets/img/selectAuthor.png"
        }
      ]
    },
    plugins: {
      wxparserPlugin: {
        version: "0.3.0",
        provider: "wx9d4d4ffa781ff3ac"
      }
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'))
