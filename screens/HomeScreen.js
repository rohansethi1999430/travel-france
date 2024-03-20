import { View, Text, SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
 import  {HeroImage}  from '../assets/index';


const HomeScreen = () => {
  
const navigation = useNavigation();

useLayoutEffect(() =>{
  navigation.setOptions({
    headerShown:false,
  })
},[])

  return (

    <SafeAreaView className = "bg-white flex-1 relative">

      {/* First Section */}

        <View className = "flex-row px-8 mt-8 items-center space-x-2">
          <View className = "w-18 h-18 bg-black  rounded-full items-center justify-center ">
            <Text className = "text-[#00BCC9] text-3xl">
              Go
            </Text>
          </View>
          <Text className = "text-[#2A2B4B] text-3xl font-semibold">
            Travel
          </Text>
        </View>

      <View className = "mt-8 space-y-1 px-8">
        <Text className = "text-[#3C8072] text-[42px]">
          Enjoy the Trip with
        </Text>

        <Text className = "text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>

        <Text className = "text-[#3C8072] text-base ">
        Explore France: Where Every Corner Tells a Story
        </Text>
      </View>
{/* Circle Section */}
      <View className = "w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-38 -right-40"></View>
      <View className = "w-[400px] h-[400px] bg-[#E99285] rounded-full absolute -bottom-38 -left-38"></View>

      <View className = "flex-1 relative items-center justify-center">

        <Animatable.Image
        animation="fadeIn"
        easing="ease-in-out"
        source={HeroImage}
        className = "w-full h-[55%] -bottom-20 object-cover"
        />

        {/* <Image source = {HeroImage} className = "w-full h-[80%] -bottom-20 object-cover" /> */}
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Discover")}
        className = "absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center ">
       
        <Animatable.View 
        animation={"pulse"}
        easing={'ease-in-out'}
        iterationCount={"infinite"}
        className = "w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
          <Text className = "text-gray-50 text-[38px] font-semibold">
            Go
          </Text>
        </Animatable.View>
        
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default HomeScreen