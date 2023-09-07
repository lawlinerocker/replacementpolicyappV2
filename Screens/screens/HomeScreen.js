import { View,Text,TouchableOpacity,Image,StyleSheet,ImageBackground } from 'react-native'
import { useState, useEffect } from 'react'

export const HomeScreen = ({navigation}) => {
  const replacement = { uri: "https://i.ibb.co/tz9vQCN/REPLACEMENT.png" }
  const policy = { uri: "https://i.ibb.co/KGKbdQ5/POLICY.png" }
  const simulator = { uri: "https://i.ibb.co/5stjGH7/SIMULATOR.png" }
  const optimal = { uri: "https://i.ibb.co/ckSXPkK/OPTIMAL.png" }
  const fifo = { uri: "https://i.ibb.co/djmj7t5/FIFO.png" }
  const random = { uri: "https://i.ibb.co/9GNvXdM/RANDOM.png" }
  const lru = { uri: "https://i.ibb.co/S3sfvmF/LRU.png" }
  const selectmode = { uri: "https://i.ibb.co/7YJBvSN/SELECT-MODE.png" }
  const [showSelect,setShowSelect] = useState(true)
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowSelect((showSelect) => !showSelect);
    }, 750);
    return () => clearInterval(interval);
  }, []);
  return (
    <ImageBackground source={{uri: "https://s4.gifyu.com/images/WELCOME-TO-THE-WAVE.gif"}} style={{flex:1}}>
    <View style={{flex:1,flexDirection:'column',backgroundColor:''}}>
      <View style={{flex:1,borderWidth:0,borderColor:'red',justifyContent:'center',alignItems:'center',paddingTop:100}}>
        <Image source={replacement} style={{width:300,height:40,}}/>
        <Image source={policy} style={{width:170,height:40}}/>
        <Image source={simulator} style={{width:125,height:16}}/>
        
      </View>
      <View style={{flex:2,flexDirection:'column',borderWidth:0,borderColor:'red',justifyContent:'center',alignItems:'center'}}> 
        <View style={{width:192,height:16,borderWidth:0,borderColor:'red'}}>
          <Image source={selectmode} style={{width:192,height:16,display: showSelect ? 'none' : 'flex'}} />
        </View>
        <TouchableOpacity style={styles.select}
          onPress={()=>{
            let cache = []
            navigation.navigate({name:'Optimal',params:cache})
          }}
        >
          <Image source={optimal} style={{width:200,height:30}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.select}
          onPress={()=>{
            let cache = []
            navigation.navigate({name:'FIFO',params:cache})
          }}
        >
          <Image source={fifo} style={{width:110,height:30}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.select}
          onPress={()=>{
            let cache = []
            navigation.navigate({name:'Random',params:cache})
          }}
        >
          <Image source={random} style={{width:165,height:30}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.select}
          onPress={()=>{
            let cache = []
            navigation.navigate({name:'LRU',params:cache})
          }}
        >
          <Image source={lru} style={{width:83,height:30}}/>
        </TouchableOpacity>

      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  select: {
    borderColor:'red',
    borderWidth:0,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'',
    padding:5,
    margin:20
  },
});
