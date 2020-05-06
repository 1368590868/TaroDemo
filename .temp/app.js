import Taro, { Component } from "@tarojs/taro-h5";

// taro ui style
import "taro-ui/dist/style/index.scss";
// diy style
import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: require("././assets/img/home.png"),
        selectedIconPath: require("././assets/img/selectHome.png")
      }, {
        pagePath: "/pages/article/index",
        text: "文章",
        iconPath: require("././assets/img/article.png"),
        selectedIconPath: require("././assets/img/selectArticle.png")
      }, {
        pagePath: "/pages/author/index",
        text: "木木",
        iconPath: require("././assets/img/author.png"),
        selectedIconPath: require("././assets/img/selectAuthor.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}
  // 页面路由
  config = {
    pages: ["/pages/index/index", "/pages/article/index", "/pages/author/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    // 小程序
    tabBar: { color: "#626567", selectedColor: "#2A8CE5", backgroundColor: "#FBFBFB", borderStyle: "white", list: [{ pagePath: "/pages/index/index", text: "首页", iconPath: require("././assets/img/home.png"), selectedIconPath: require("././assets/img/selectHome.png") }, { pagePath: "/pages/article/index", text: "文章", iconPath: require("././assets/img/article.png"), selectedIconPath: require("././assets/img/selectArticle.png") }, { pagePath: "/pages/author/index", text: "木木", iconPath: require("././assets/img/author.png"), selectedIconPath: require("././assets/img/selectAuthor.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/article/index',
          componentLoader: () => import( /* webpackChunkName: "article_index" */'./pages/article/index'),
          isIndex: false
        }, {
          path: '/pages/author/index',
          componentLoader: () => import( /* webpackChunkName: "author_index" */'./pages/author/index'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));