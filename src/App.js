import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import Image from 'rax-image';
import Link from 'rax-link';
import Button from 'rax-button';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Image
            style={styles.icon}
            source={require("./assets/icon.png")}
            resizeMode="cover"
          />
          <Text style={[styles.fontSize, styles.purple]}>华师匣子 1.0</Text>
          <Text style={[styles.fontSize, styles.black]}>木犀团队 出品</Text>
          <Button style={[styles.button]}>
            <Link href="http://www.muxixyz.com" style={[styles.white, styles.fontSize]}>访问官网</Link>
          </Button>
      </View>
    );
  }
}

export default App;
