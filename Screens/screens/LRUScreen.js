import { View,Text,TouchableOpacity,Image,StyleSheet,ScrollView,SafeAreaView } from 'react-native'
import { useState,useEffect } from 'react'
import Constants from 'expo-constants';

export const LRUScreen = ({navigation,route}) => {
  const pic_header = { uri:  "https://i.ibb.co/M2wvwrB/LRU.png"}
  const pic_access = { uri:  "https://i.ibb.co/MRYSND8/ACCESS.png" }
  const pic_hitmiss = { uri: "https://i.ibb.co/kcKrLZ5/HIT-MISS.png" }
  const pic_evict = { uri:  "https://i.ibb.co/wW7KNwm/EVICT.png"}
  const pic_result = { uri:"https://i.ibb.co/wLNHfSZ/RESULT.png" }
  const pic_hit = { uri: "https://i.ibb.co/NWg04wK/HIT.png" }
  const pic_miss = { uri: "https://i.ibb.co/yXsXcJh/MISS.png" }
  const pic_0 = { uri : "https://i.ibb.co/0n6LN1d/image.png"}
  const pic_1 = { uri : "https://i.ibb.co/3rT1vVZ/1.png" }
  const pic_2 = { uri : "https://i.ibb.co/nLWh2QN/2.png"}
  const pic_3 = { uri : "https://i.ibb.co/h91mxNt/3.png" }
  const pic_hyphen = { uri :"https://i.ibb.co/WpgdnLZ/image.png" }
  const pic_01 = { uri : "https://i.ibb.co/zFsnwM8/0-1.png" }
  const pic_02 = { uri :  "https://i.ibb.co/YbPkhDp/0-2.png"}
  const pic_03 = { uri :  "https://i.ibb.co/QYS8PZr/0-3.png"}
  const pic_10 = { uri :  "https://i.ibb.co/M1rKLwZ/1-0.png"}
  const pic_12 = { uri : "https://i.ibb.co/80FjYKK/1-2.png" }
  const pic_13 = { uri :  "https://i.ibb.co/s6ySxG1/1-3.png"}
  const pic_20 = { uri :  "https://i.ibb.co/BZPzFjB/2-0.png"}
  const pic_21 = { uri : "https://i.ibb.co/H2MJYb7/2-1.png" }
  const pic_23 = { uri :  "https://i.ibb.co/W55s1G0/2-3.png"}
  const pic_30 = { uri : "https://i.ibb.co/bNqT8dP/3-0.png" }
  const pic_31 = { uri :  "https://i.ibb.co/yyk3tbb/3-1.png"}
  const pic_32 = { uri : "https://i.ibb.co/BrpYjHM/3-2.png" }
  const pic_012 = { uri : "https://i.ibb.co/mhzxxbt/0-1-2.png"}
  const pic_013 = { uri :  "https://i.ibb.co/842JT8F/0-1-3.png"}
  const pic_021 = { uri :  "https://i.ibb.co/cwwqkJ7/0-2-1.png"}
  const pic_023 = { uri : "https://i.ibb.co/GVMphwR/0-2-3.png" }
  const pic_031 = { uri :  "https://i.ibb.co/5jgp9r7/0-3-1.png"}
  const pic_032 = { uri : "https://i.ibb.co/MBQzb8m/0-3-2.png" }
  const pic_102 = { uri :  "https://i.ibb.co/K6J9Y26/1-0-2.png"}
  const pic_103 = { uri : "https://i.ibb.co/q9Y8r50/1-0-3.png" }
  const pic_120 = { uri : "https://i.ibb.co/RBD7dFT/1-2-0.png"}
  const pic_123 = { uri : "https://i.ibb.co/59V6G0J/1-2-3.png" }
  const pic_130 = { uri : "https://i.ibb.co/XbVP8yW/1-3-0.png" }
  const pic_132 = { uri : "https://i.ibb.co/yytY5Kt/1-3-2.png" }
  const pic_201 = { uri : "https://i.ibb.co/DwFntTY/2-0-1.png" }
  const pic_203 = { uri : "https://i.ibb.co/FgcwKzV/2-0-3.png"}
  const pic_210 = { uri : "https://i.ibb.co/1mF4C8w/2-1-0.png" }
  const pic_213 = { uri : "https://i.ibb.co/hMtRtLw/2-1-3.png" }
  const pic_230 = { uri : "https://i.ibb.co/QcCDpPB/2-3-0.png"}
  const pic_231 = { uri : "https://i.ibb.co/qD01dBb/2-3-1.png" }
  const pic_301 = { uri : "https://i.ibb.co/1q5MgxM/3-0-1.png" }
  const pic_302 = { uri :  "https://i.ibb.co/FBj5HHP/3-0-2.png"}
  const pic_310 = { uri : "https://i.ibb.co/5T2Dy08/3-1-0.png" }
  const pic_312 = { uri :  "https://i.ibb.co/q5cMj1S/3-1-2.png"}
  const pic_320 = { uri :  "https://i.ibb.co/fdtNcPd/3-2-0.png"}
  const pic_321 = { uri : "https://i.ibb.co/sFbwz5M/3-2-1.png"}
  const pic_back = { uri :  "https://i.ibb.co/HVXG1D9/image.png"}
  let cache = route.params

  const [components,setComponents] = useState([])
  //const [access,setAccess] = useState()
  let access = 0
  let hit_miss ='miss'
  let evict

  const press0Button = () => {
    access=0
    checkHitMiss(cache,access)
    checkCache(cache,access,hit_miss)
    setComponents([...components,<Data/>])
    
  }
  const press1Button = () => {
    access=1
    checkHitMiss(cache,access)
    checkCache(cache,access,hit_miss)
    setComponents([...components,<Data/>])
  }
  const press2Button = () => {
    access=2
    checkHitMiss(cache,access)
    checkCache(cache,access,hit_miss)
    setComponents([...components,<Data/>])
  }
  const press3Button = () => {
    access=3
    checkHitMiss(cache,access)
    checkCache(cache,access,hit_miss)
    setComponents([...components,<Data/>])
  }

  const accessNumber = (num) => {
    if(num==0){return pic_0}
    else if(num==1){return pic_1}
    else if(num==2){return pic_2}
    else if(num==3){return pic_3}
  }
  const accessNumberSize = (num) => {
    if(num==0){return styles.size_pic_0}
    else if(num==1){return styles.size_pic_1}
    else if(num==2){return styles.size_pic_2}
    else if(num==3){return styles.size_pic_3}
  }

  const checkHitMiss = (cache,access) => {
    let found = 0
    cache.map((item)=>{
      if(item==access){
        found=found+1
      }})
    if(found==1){
      hit_miss = 'hit'
    }else{
      hit_miss = 'miss'
    }
  }

  const hitOrMiss = (hit_miss) => {
    if(hit_miss=='hit'){return pic_hit}
    else if(hit_miss=='miss'){return pic_miss}
  }

  const hitOrMissSize = (hit_miss) => {
    if(hit_miss=='hit'){return styles.size_pic_hit}
    else if(hit_miss=='miss'){return styles.size_pic_miss}
  }

  const checkCache = (cache,access,hit_miss) => {

    //============= MISS =============
    if(hit_miss=='miss'){
      let totalNumInCache = 0
      cache.map(()=>
        totalNumInCache=totalNumInCache+1
        )
      if(totalNumInCache==0){
        cache.push(access)
      }else if(totalNumInCache==1){
        cache.push(access)
      }else if(totalNumInCache==2){
        cache.push(access)
      }else if(totalNumInCache==3){
        let index = 0
        cache.map((item)=>{
          if(index==0){
            evict = item
            index=index+1
          }
        })
        cache.splice(0,1)
        cache.push(access)
      }
    }
    

    //============= HIT =============
    else{
      let totalNumInCache = 0
      cache.map(()=>
        totalNumInCache=totalNumInCache+1
        )
      if(totalNumInCache==0){
        //do nothing
      }else if(totalNumInCache==1 ){
        //do nothing
      }else if(totalNumInCache==2 || totalNumInCache==3){
        let forceStop = false
        let index = 0
        cache.map((item)=>{
          if(item==access){
            forceStop=true
          }else{
            if(forceStop!=true){
              index=index+1
            }
          }
        })
        cache.splice(index,1)
        cache.push(access)
      }
    }
  }

  const amountEvict = (evict) => {
    if(evict==undefined){return pic_hyphen}
    else if(evict==0){return pic_0}
    else if(evict==1){return pic_1}
    else if(evict==2){return pic_2}
    else if(evict==3){return pic_3}
  }
  const amountEvictSize = (evict) => {
    if(evict==undefined){return styles.size_pic_hyphen}
    else if(evict==0){return styles.size_pic_0}
    else if(evict==1){return styles.size_pic_1}
    else if(evict==2){return styles.size_pic_2}
    else if(evict==3){return styles.size_pic_3}
  }

  const resultCache = (cache) => {
    let string =''
    cache.map((item)=>{
      string = string + item
    })
    if(string=='0'){return pic_0}
    else if(string=='1'){return pic_1}
    else if(string=='2'){return pic_2}
    else if(string=='3'){return pic_3}
    else if(string=='01'){return pic_01}
    else if(string=='02'){return pic_02}
    else if(string=='03'){return pic_03}
    else if(string=='10'){return pic_10}
    else if(string=='12'){return pic_12}
    else if(string=='13'){return pic_13}
    else if(string=='20'){return pic_20}
    else if(string=='21'){return pic_21}
    else if(string=='23'){return pic_23}
    else if(string=='30'){return pic_30}
    else if(string=='31'){return pic_31}
    else if(string=='32'){return pic_32}
    else if(string=='012'){return pic_012}
    else if(string=='013'){return pic_013}
    else if(string=='021'){return pic_021}
    else if(string=='023'){return pic_023}
    else if(string=='031'){return pic_031}
    else if(string=='032'){return pic_032}
    else if(string=='102'){return pic_102}
    else if(string=='103'){return pic_103}
    else if(string=='120'){return pic_120}
    else if(string=='123'){return pic_123}
    else if(string=='130'){return pic_130}
    else if(string=='132'){return pic_132}
    else if(string=='201'){return pic_201}
    else if(string=='203'){return pic_203}
    else if(string=='210'){return pic_210}
    else if(string=='213'){return pic_213}
    else if(string=='230'){return pic_230}
    else if(string=='231'){return pic_231}
    else if(string=='301'){return pic_301}
    else if(string=='302'){return pic_302}
    else if(string=='310'){return pic_310}
    else if(string=='312'){return pic_312}
    else if(string=='320'){return pic_320}
    else if(string=='321'){return pic_321}
  }
  
  const resultCacheSize = (cache) => {
    let string =''
    cache.map((item)=>{
      string = string + item
    })
    if(string=='0'){return styles.size_pic_0}
    else if(string=='1'){return styles.size_pic_1}
    else if(string=='2'){return styles.size_pic_2}
    else if(string=='3'){return styles.size_pic_3}
    else if(string=='01'){return styles.size_pic_01}
    else if(string=='02'){return styles.size_pic_02}
    else if(string=='03'){return styles.size_pic_03}
    else if(string=='10'){return styles.size_pic_10}
    else if(string=='12'){return styles.size_pic_12}
    else if(string=='13'){return styles.size_pic_13}
    else if(string=='20'){return styles.size_pic_20}
    else if(string=='21'){return styles.size_pic_21}
    else if(string=='23'){return styles.size_pic_23}
    else if(string=='30'){return styles.size_pic_30}
    else if(string=='31'){return styles.size_pic_31}
    else if(string=='32'){return styles.size_pic_32}
    else if(string=='012'){return styles.size_pic_012}
    else if(string=='013'){return styles.size_pic_013}
    else if(string=='021'){return styles.size_pic_021}
    else if(string=='023'){return styles.size_pic_023}
    else if(string=='031'){return styles.size_pic_031}
    else if(string=='032'){return styles.size_pic_032}
    else if(string=='102'){return styles.size_pic_102}
    else if(string=='103'){return styles.size_pic_103}
    else if(string=='120'){return styles.size_pic_120}
    else if(string=='123'){return styles.size_pic_123}
    else if(string=='130'){return styles.size_pic_130}
    else if(string=='132'){return styles.size_pic_132}
    else if(string=='201'){return styles.size_pic_201}
    else if(string=='203'){return styles.size_pic_203}
    else if(string=='210'){return styles.size_pic_210}
    else if(string=='213'){return styles.size_pic_213}
    else if(string=='230'){return styles.size_pic_230}
    else if(string=='231'){return styles.size_pic_231}
    else if(string=='301'){return styles.size_pic_301}
    else if(string=='302'){return styles.size_pic_302}
    else if(string=='310'){return styles.size_pic_310}
    else if(string=='312'){return styles.size_pic_312}
    else if(string=='320'){return styles.size_pic_320}
    else if(string=='321'){return styles.size_pic_321}
  }

  const Data = () => {
    return (
      <View style={{flex:1,borderWidth:0,borderColor:'green',flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignItems:'center',paddingTop:10}}>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={accessNumber(access)} style={accessNumberSize(access)}/>
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={hitOrMiss(hit_miss)} style={hitOrMissSize(hit_miss)}/>
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={amountEvict(evict)} style={amountEvictSize(evict)}/>
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={resultCache(cache)} style={resultCacheSize(cache)}/>
        </View>
      </View>
    )
  }



  return (
    <View style={{flex:1,paddingTop: Constants.statusBarHeight,backgroundColor:'black'}}>
    <View style={{flex:1,backgroundColor:'black'}}>
      <View style={{flex:1,flexDirection:'row',borderWidth:0,borderColor:'red',paddingTop:0}}>
        <View style={{flex:0.1,borderWidth:0,justifyContent:'center',alignItems:'center',paddingLeft:10}}>
          <TouchableOpacity style={{borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}
            onPress={()=>{
              navigation.goBack()
            }}
          >
            <Image source={pic_back} style={styles.size_pic_back}/>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,borderWidth:0,justifyContent:'center',alignItems:'center'}}>
          <Image source={pic_header} style={styles.size_pic_header}/>
        </View>
      </View>
      <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={pic_access} style={styles.size_pic_access} />
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={pic_hitmiss} style={styles.size_pic_hitmiss} />
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={pic_evict} style={styles.size_pic_evict} />
        </View>
        <View style={{flex:1,borderWidth:0,borderColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Image source={pic_result} style={styles.size_pic_result} />
        </View>
        
      </View>

      <View style={{flex:7.5,borderWidth:0,borderColor:'red'}}>
        <ScrollView
            ref={ref => {this.scrollView = ref}}
        onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
          {components}
        </ScrollView>
      </View>

      <View style={{flex:1,borderWidth:0,borderColor:'red',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{borderWidth:0,borderColor:'red',width:80,height:80,borderRadius:0,justifyContent:'center',alignItems:'center'}}
          onPress={()=>{
            press0Button()
          }}
        >
          <Image source={pic_access} style={styles.size_pic_access}/>
          <Image source={pic_0} style={styles.size_pic_0}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,borderColor:'red',width:80,height:80,borderRadius:0,justifyContent:'center',alignItems:'center'}}
          onPress={()=>{
            press1Button()
          }}
        >
          <Image source={pic_access} style={styles.size_pic_access}/>
          <Image source={pic_1} style={styles.size_pic_1}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,borderColor:'red',width:80,height:80,borderRadius:0,justifyContent:'center',alignItems:'center'}}
          onPress={()=>{
            press2Button()
          }}
        >
          <Image source={pic_access} style={styles.size_pic_access}/>
          <Image source={pic_2} style={styles.size_pic_2}/>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0,borderColor:'red',width:80,height:80,borderRadius:0,justifyContent:'center',alignItems:'center'}}
          onPress={()=>{
            press3Button()
          }}
        >
          <Image source={pic_access} style={styles.size_pic_access}/>
          <Image source={pic_3} style={styles.size_pic_3}/>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  size_pic_header:{
    width:83,height:40
  },
  size_pic_access:{
    width:83,height:15
  },
  size_pic_hitmiss:{
    width:124,height:15
  },
  size_pic_evict:{
    width:70,height:15
  },
  size_pic_result:{
    width:83,height:15
  },
  size_pic_hit:{
    //original width:42,height:15
    width:55,height:15
  },
  size_pic_miss:{
    //original width:56,height:15
    width:69,height:15
  },
  size_pic_0:{
    width:20,height:20
  },
  size_pic_1:{
    width:20,height:20
  },
  size_pic_2:{
    width:20,height:20
  },
  size_pic_3:{
    width:20,height:20
  },
  size_pic_hyphen:{
    width:15,height:15
  },
  size_pic_01:{
    width:42,height:15
  },
  size_pic_02:{
    width:42,height:15
  },
  size_pic_03:{
    width:42,height:15
  },
  size_pic_10:{
    width:42,height:15
  },
  size_pic_12:{
    width:42,height:15
  },
  size_pic_13:{
    width:42,height:15
  },
  size_pic_20:{
    width:42,height:15
  },
  size_pic_21:{
    width:42,height:15
  },
  size_pic_23:{
    width:42,height:15
  },
  size_pic_30:{
    width:42,height:15
  },
  size_pic_31:{
    width:42,height:15
  },
  size_pic_32:{
    width:42,height:15
  },
  size_pic_012:{
    width:70,height:15
  },
  size_pic_013:{
    width:70,height:15
  },
  size_pic_021:{
    width:70,height:15
  },
  size_pic_023:{
    width:70,height:15
  },
  size_pic_031:{
    width:70,height:15
  },
  size_pic_032:{
    width:70,height:15
  },
  size_pic_102:{
    width:70,height:15
  },
  size_pic_103:{
    width:70,height:15
  },
  size_pic_120:{
    width:70,height:15
  },
  size_pic_123:{
    width:70,height:15
  },
  size_pic_130:{
    width:70,height:15
  },
  size_pic_132:{
    width:70,height:15
  },
  size_pic_201:{
    width:70,height:15
  },
  size_pic_203:{
    width:70,height:15
  },
  size_pic_210:{
    width:70,height:15
  },
  size_pic_213:{
    width:70,height:15
  },
  size_pic_230:{
    width:70,height:15
  },
  size_pic_231:{
    width:70,height:15
  },
  size_pic_301:{
    width:70,height:15
  },
  size_pic_302:{
    width:70,height:15
  },
  size_pic_310:{
    width:70,height:15
  },
  size_pic_312:{
    width:70,height:15
  },
  size_pic_320:{
    width:70,height:15
  },
  size_pic_321:{
    width:70,height:15
  },
  size_pic_back:{
    width:56,height:30,marginTop:5
  },
});