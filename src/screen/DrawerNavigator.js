import React from 'react';  
import {createDrawerNavigator} from 'react-navigation';  
import {Dimensions,StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons,Feather,SimpleLineIcons,Entypo,FontAwesome } from '@expo/vector-icons';

import Inspiration from './Inspiration';
import Bag from './Bag';
import Favorites from './Favorites';
import UnderDevelopment from './UnderDevelopment';
import SignIn from './SignIn';
import BottomTabNavigator from './BottomTabNavigator';  
import More from './More';
import CustomerSupport from './CustomerSupport';
import i18n from 'i18n-js';

// import en from '../Language/en';
// import ar from '../Language/ar';  

 
//   i18n.fallbacks = true;
//   i18n.translations = {
//    en,
//    ar
// };
// i18n.locale ="en";

const WIDTH = Dimensions.get('window').width 

const DrawerConfig = {
    drawerWidth: WIDTH*0.73,
    contentComponent: ({ navigation }) => {
       return(<MenuDrawer navigation={navigation}/>)
   }
}

export default createDrawerNavigator({

Shop: { 
        screen: BottomTabNavigator
    },
           
Inspiration: {
        screen: Inspiration
    },
Bag: {
        screen: Bag     
    },
Favorites: {
        screen: Favorites     
    },    
My_Account: {
        screen: More     
    },
Customer_Support: {
        screen: CustomerSupport  
    },
Logout: {
        screen: SignIn
    },
},
    DrawerConfig
);

class MenuDrawer extends React.Component {
	render() {
		return(
			<View style={styles.container}>
                
                <View style={{flexDirection:"row",height:130,width:"100%",borderBottomWidth:0.7,borderColor:"#424242"}}  >
{/* SHOP */}
                
                    <TouchableOpacity style={{width:"50%",borderRightWidth:0.7,alignItems:"center",justifyContent:"center",borderColor:"#424242"}} onPress={() => this.props.navigation.navigate("Shop")}>
                        <MaterialCommunityIcons name="hexagon-outline" color="white" size={24} />
                        <Text style={{color:"white"}}>{i18n.t('shop')}</Text>
                    </TouchableOpacity>
{/* BAG */}
                    <TouchableOpacity style={{width:"50%",alignItems:"center",justifyContent:"center"}} onPress={() => this.props.navigation.navigate("Bag")}>
                        <SimpleLineIcons name="handbag" color="white" size={24} />
                        <Text style={{color:"white"}}>{i18n.t('bag')}</Text>
                    </TouchableOpacity>
				</View>

                <View style={{flexDirection:"row",height:130,width:"100%",borderBottomWidth:0.7,borderColor:"#424242"}}  >
{/* Inspiration */}
                    <TouchableOpacity style={{width:"50%",borderRightWidth:0.7,alignItems:"center",justifyContent:"center",borderColor:"#424242"}} onPress={() => this.props.navigation.navigate("Inspiration")}>
                        <Feather name="sun" color="white" size={24} />
                        <Text style={{color:"white"}}>{i18n.t('inspiration')}</Text>
                    </TouchableOpacity>
{/* Favorites */}
                    <TouchableOpacity style={{width:"50%",alignItems:"center",justifyContent:"center"}} onPress={() => this.props.navigation.navigate("Favorites")}>
                        <Entypo name="heart-outlined" color="white" size={24} />
                        <Text style={{color:"white"}}>{i18n.t('favorites')}</Text>
                    </TouchableOpacity>
				</View>
{/* My account */}
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",height:50,width:"100%",borderBottomWidth:0.7,borderColor:"#424242"}} onPress={() => this.props.navigation.navigate("My_Account")}>
                    <Text style={{color:"white"}}>{i18n.t('my_account')}</Text>
                </TouchableOpacity>
{/* Customer Support */}
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",height:50,width:"100%",borderBottomWidth:0.7,borderColor:"#424242"}} onPress={() => this.props.navigation.navigate("Customer_Support")}>
                    <Text style={{color:"white"}}>{i18n.t('customer_support')}</Text>
                </TouchableOpacity>
{/* Logout */}
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",height:50,width:"100%",borderBottomWidth:0.7,borderColor:"#424242"}} onPress={() => this.props.navigation.navigate("Logout")}>
                    <Text style={{color:"#cca300"}}>{i18n.t('logout')}</Text>
                </TouchableOpacity>
{/* ICON AREA */}
                <View style={{paddingTop:"25%",justifyContent:"center",height:"100%",flexDirection:"row"}}>
                  <TouchableOpacity style={{marginRight:8}}>
                    <FontAwesome name="facebook-square" color="white" size={50}  />
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginRight:8}}>
                    <FontAwesome name="twitter-square" color="white" size={50} />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome name="snapchat-square" color="white" size={50} />
                  </TouchableOpacity>
                </View>
                
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#212121',
        marginTop:24,      
	},
})