'use strict';

import React, {
    Image,
    Text,
    ScrollView,
    View
} from 'react-native';

const Info = React.createClass({
  render() {
    const {styles} = this.props;
    return (
        <View key="Info" style={styles.Container}>
            <View style={styles.ContainerImageWrap}>
                <Image source={require('../../../images/gaocegege.jpg')} style={styles.ContainerImage}/>
            </View>
            <View key="list-item-content" style={styles.ContainerContent}>
                <View key="list-item-title" style={styles.ContainerContentTitle}>
                  <View key="list-item-title-text" style={{flex: 1}}>
                    <Text style={{color: '#fff', fontSize: 12}}>gaocegege</Text>
                  </View>
                </View>
                <View key="list-item-desc" style={styles.ContainerContentDesc}>
                  <Text style={{color: '#fff', fontSize: 12}}>上次登录：57 分钟前</Text>
                </View>
              </View>
        </View>
    );
  }
});

export default Info;
