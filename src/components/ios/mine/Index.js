'use strict';

import React, {
    Component,
    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import assign from 'object-assign';
import NavBar from './../common/NavBar';

import Info from './Info';
import AppList from '../alipay/AppList';

// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';
import MineStyles from "../../../styles/mine";
import AppListStyles from '../../../styles/appList';
import BannerStyles from '../../../styles/banner';

// 字体
const Icon = require('react-native-vector-icons/FontAwesome');
const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);

// 九宫格配置对象
const appListData = [
    [
      {
        title: '账户',
        icon: {
          name: 'credit-card-alt',
          size: 20,
          color: '#FFB44F',
        }
      },
      {
        title: '余额',
        icon: {
          name: 'envelope',
          size: 20,
          color: '#FC6165',
        },
        options: {
          RightButton: <Text style={{color: '#fff', fontSize: 14, marginTop: 5}}>我的红包</Text>
        }
      },
      {
        title: '转账',
        image: {
          source: require('../../../images/iconfont-zhuanzhang.png'),
        }
      },
      {
        isMore: true
      },
    ]
];

class MineView extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Info styles={styles} />
          <View key="app" style={styles.app}>
              <AppList styles={styles}
                      data={appListData.slice(0, 3)}
                      topBorder={false}
                      onMorePress={this.onMorePress}
                      onAppPress={this.handleAppClick} />
          </View>

          <View key="banner" style={styles.banner}>
            <View style={{marginTop: 24, backgroundColor: '#fff', padding: 10}}>
                <Text style={{fontSize: 15}}>账户总览</Text>
                <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
                    <View key="list-item-title-text" style={{flex: 1, flexDirection: 'row'}}>
                        <Text>总资产   </Text><Text style={{fontSize: 16, fontWeight: 'bold'}}>￥541.23</Text>
                    </View>
                    <View key="list-it" style={{flex: 1, flexDirection: 'row'}}>
                        <Text>余额      </Text><Text style={{fontSize: 16, fontWeight: 'bold'}}>￥121.58</Text>
                    </View>
                </View>
            </View>
          </View>
        </View>
    );
  }
}

// 导航条路由配置
const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (route.name === 'mine-index') {
      return null;
    }

    return (
        <NavBar.BackButton styles={styles}
                           text={route.backButtonText}
                           onPress={() => navigator.pop()}
                           style={{marginTop: 10}} />
    );
  },

  RightButton(route, navigator, index, navState) {
    // 如果页面自定义了导航的右侧按钮，则用自定义的
    if (route.RightButton) {
      return (
          <NavBar.RightButton styles={styles}>
            {route.RightButton}
          </NavBar.RightButton>
      );
    }

    if (route.name === 'mine-index') {
      return (
          <NavBar.RightButton styles={styles}>
            <Text key="topBarIcon" style={styles.topBarIcon}>{searchIcon}</Text>
          </NavBar.RightButton>
      );
    }

    return null;
  },

  Title(route, navigator, index, navState) {
    return (
        <NavBar.Title styles={styles} title={route.title} />
    );
  }
};

const Main = React.createClass({
  renderScene(route, navigator) {
      if (route.component) {
        return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route } );
    }
  },

  render() {
    return (
        <Navigator initialRoute={{name: 'mine-index', component: MineView}}
                   configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
                   navigationBar={
                      <Navigator.NavigationBar style={{backgroundColor: '#990000', alignItems: 'center'}} routeMapper={NavigationBarRouteMapper} />
                     }
                   renderScene={this.renderScene}></Navigator>
    );
  }
});

const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    TopBarStyles,
    MineStyles,
    AppListStyles
));

export default Main;
