import React, { Component } from 'react';
import { StyleSheet, Vibration, View, Platform } from 'react-native';

import { Icon } from 'react-native-elements';
import { GiftedChat, Bubble, Send, MessageText, SystemMessage, Day } from 'react-native-gifted-chat';
import { withTheme } from 'react-native-paper';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import 'moment/locale/pt-br';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSend = this.renderSend.bind(this);
    this.sendPushNotification = this.sendPushNotification.bind(this);
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderDay = this.renderDay.bind(this);
    this._handleNotification = this._handleNotification.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Canal Aberto',
  });

  state = {
    messages: [],
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Tivemos um problema para conseguir a permissão para notificações.');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Não é possível utilizar notificações em emuladores.');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };


  componentDidMount() {
    this.registerForPushNotificationsAsync();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Olá, como posso ajudá-lo?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg',
          },
        }, {
          _id: 3,
          text: 'Bem-vindo ao canal aberto',
          createdAt: new Date(),
          system: true,
        }
      ],
    })
  }

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async (mensagemRecebida) => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Canal Aberto',
      body: mensagemRecebida,
      data: { data: 'goes here' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };

  onSend(newMessage) {
    newMessage[0].sent = true;
    newMessage[0].received = true;
    this.sendPushNotification(newMessage[0].text)
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, newMessage),
    }));

    /* Mocando mensagem vinda do outro usuário */
    const previousMessages = [{
      _id: `${Math.random()}`,
      createdAt: new Date(new Date(newMessage[newMessage.length - 1].createdAt)
        .setSeconds(
          new Date(newMessage[newMessage.length - 1].createdAt)
          .getSeconds() + 10 
        )
      ),
      text: newMessage[newMessage.length - 1].text,
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://image.freepik.com/free-vector/doctor-background-design_1270-62.jpg',
      },
    }];
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, previousMessages),
    }));
  }

  renderDay(props) {
    return <Day {...props} textStyle={{ fontSize: this.props.theme.fontSize.medium }}/>
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: this.props.theme.fontSize.medium,
        }}
      />
    );
  }

  renderBubble(props) {
    console.log(props.currentMessage);
    if (props.currentMessage.system) {
      return (
        <View>
          <Text style={{ fontSize: this.props.theme.fontSize.medium }}>
            {'oi' + systemMessage}
          </Text>
        </View>
      );
    }
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: this.props.theme.colors.primary
          }
        }}
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props} containerStyle={{ borderWidth: 0}}>
        <View style={{ marginRight: 5, marginBottom: 12.5 }}>
          <Icon
            name='paper-plane'
            type='font-awesome'
            color={this.props.theme.colors.primary}
            style={styles.sendIcon}
          />
        </View>
      </Send>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          locale="pt-br"
          onSend={messages => this.onSend(messages)}
          messages={this.state.messages}
          renderBubble={this.renderBubble}
          renderSend={this.renderSend}
          renderSystemMessage={this.renderSystemMessage}
          renderDay={this.renderDay}
          renderMessageText={ ({currentMessage, ...args}) => {
                return (
                <MessageText
                  currentMessage={currentMessage}
                  customTextStyle={{fontSize: this.props.theme.fontSize.medium, lineHeight: this.props.theme.fontSize.medium }}
                  {...args}
                />
              );
            }
          }
          timeTextStyle={{
            right: {
              fontSize: this.props.theme.fontSize.medium,
              color: "white"
            },
            left: {
              color: "black",
              fontSize: this.props.theme.fontSize.medium,
            }
          }}
          placeholder="Digite uma mensagem..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sendIcon: {
    color: '#3A97F9'
  }
})

export default withTheme(Chat);
