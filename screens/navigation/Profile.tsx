

import { View, StyleSheet, ScrollView, ScrollViewProps } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { logout } from '../../store/authentication';
import { useSelector } from 'react-redux';



export const Content = (props: any) => {

  const paperTheme = useTheme();
  const profileData = useSelector((state:any) => state.account);
const email=  profileData.account.email
const emailText = profileData.account.email;
  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: '0%',backgroundColor:'#fff' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 19,marginBottom:10, justifyContent: 'flex-start', alignContent: 'flex-start' }}>
          
              <Avatar.Icon
style={{ padding:0,margin:0,backgroundColor:'#fff'}}
icon={({ color, size }) => (
                  <Icon
                    name="account-outline"
                    color={color}
                    size={18}
                    
                  />)}
       />

              
              <View style={{ marginLeft: 14,marginTop:16, flexDirection: 'column' }}>
                <Title style={styles.title}>{emailText}</Title>
                
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Exercise"
              onPress={() => { props.navigation.navigate('Exercise') }}
            />
            {/* <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => { props.navigation.navigate('Exercise')  }}
        /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      
      <DrawerItem
      style={{marginLeft:15,paddingLeft:15}}
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => { props.navigation.navigate('Exercise')  }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop:15
  },
  title: {
    fontSize: 12,

    marginTop: 2,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 10,
    lineHeight: 10,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    paddingLeft:18,
    alignContent:'center',
    justifyContent: 'center',
    display:'flex',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});