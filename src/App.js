import { createElement, Component, setNativeProps } from "rax";
import View from "rax-view";
import Text from "rax-text";
import styles from "./App.css";
import Image from "rax-image";
import Link from "rax-link";
import Button from "rax-button";
const native = require("@weex-module/test");

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Image
          style={styles.icon}
          source={require("./assets/icon.png")}
          resizeMode="cover"
        />
        <Text style={[styles.fontSize, styles.purple]}>华师匣子 2.0</Text>
        <Text style={[styles.fontSize, styles.black]}>木犀团队 出品</Text>
        <Button
          style={[styles.button]}
          onPress={() => {
            native.push("http://www.muxixyz.com");
          }}
        >
          <Text style={[styles.white, styles.fontSize]}>访问官网</Text>
        </Button>
        <Button
          style={[styles.button, styles.button_join]}
          onPress={() => {
            native.joinQQGroup()
          }}
        >
          <Text style={[styles.white, styles.fontSize]}>加入华师匣子交流群</Text>
        </Button>
      </View>
    );
  }
}

export default App;
