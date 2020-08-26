import React from 'react';
import {StatusBar, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SetingsScreen from './screens/SettingsScreen';
import contacts, {compareNames} from './contacts';
import ContactsListScreen from './screens/ContactsListScreen';
import AddContactScreen from './screens/AddContactScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import LoginScreen from './screens/LoginScreen';

const MainStack = createStackNavigator(
  {
    ContactsList: ContactsListScreen,
    ContactDetail: ContactDetailScreen,
    AddContact: AddContactScreen
  },
  {
    initialRouteName: 'ContactsList',
    navigationOptions: {
      headerTintColor: '#a411034',
      headerStyle: {
        backgroundColor: '#fff'
      }
    }
  }
  
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor}) => (
    <Ionicons
    name={`ios-contacts${focused ? '' : '-putline'}`}
    size={25}
    color={tintColor}
    />
  )
};


const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SetingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034'
    }
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Main: MainTabs
  }
)

const AppContainer = createAppContainer(AppNavigator)


export default class App extends React.Component{
  state = {
    contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...preveState.contacts, newContact]
    }));
  }

  render() {
    return (
      <AppContainer
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact}}
      />
    )
  }
}
