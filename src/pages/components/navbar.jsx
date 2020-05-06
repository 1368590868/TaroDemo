import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtNavBar, AtMessage } from "taro-ui";
export default function NavBar (props) {
    function clickLeft () {
        if (Taro.getCurrentPages().length === 1) {
             Taro.atMessage({
               message: "当前为首页，可以使用底下菜单",
               type: "info",
                 duration: '2000',
               fontSize:'20px'
             });
        } else {
            Taro.navigateBack({ delta: 1 });
        }
        
    }
    return (
        <View>
            <AtMessage />
        <AtNavBar
          onClickLeftIcon={clickLeft}
          color="#1989fa"
          title={props.title}
          leftIconType={"chevron-left"}
        />
      </View>
    );
}