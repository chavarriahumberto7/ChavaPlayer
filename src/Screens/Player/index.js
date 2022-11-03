//Player screen
//[x]Header section
//[x]Music details section
//[x]Slider section  [Rect native-community slider]
//[x]Control button section
//[x]Lyrics section



import { View, Text, FlatList, TouchableOpacity,ScrollView,StatusBar

} from 'react-native'
import React, {useState,useEffect}from 'react'
import styled from 'styled-components/native'
import {Colors,Images,Metrics} from 'Constants'
import {McText, McImage, PlayButton} from 'Components'
import Slider from '@react-native-community/slider'





const Player = ({route,navigation}) => {
  

 const [selected,setSelected]=useState(null);

useEffect(()=>{

  let {selectedMusic}=route.params;

  setSelected(selectedMusic);


},[])

  return (
   <Container>
    <StatusBar barStyle='light-content'/>

    {/* Header section */}
    <HeaderSection>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <McImage source={Images.left}/>
      </TouchableOpacity>
       <McImage source={Images.menu}/>

    </HeaderSection>

    {/* Music Detail section */}

    <MusicDetailSection>

      
      <McImage 
      style={{
        borderRadius:214,
        height:214,
        width:214,
        marginHorizontal:81,
        marginVertical:60,
      }}
      source={selected?.thumbnail} />

      <View
      style={{
        marginTop:16,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <McText semi size={24} color={Colors.grey5}>{selected?.title}</McText>
        <McText medium size={14} color={Colors.grey3}
        style={{
          marginTop:8,
        }}
        >{selected?.artist}</McText>
      </View>

    </MusicDetailSection>

    {/* Slider section */}
    <SlicerSection
    >

      <Slider
      minimumValue={0}
      maximumValue={1}
      value={0.7}
      minimumTrackTintColor={Colors.primary}
      maximumTrackTintColor={Colors.grey3}
      thumbImage={Images.thumb}
      >

      </Slider>

      <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
      }}>

        <McText size={12} color={Colors.grey4}>0:17</McText>
        <McText size={12} color={Colors.grey4}>2:37</McText>
      </View>

    </SlicerSection>

    {/* Control button section */}

    <ControlSection>
      {/* Buttons */}

      <TouchableOpacity activeOpacity={0.7}  
      onPress={()=>{console.log('refresh')}}
      >
        <McImage source={Images.refresh}></McImage>
      </TouchableOpacity>

      

      {/* Action Buttons bar */}
      <View style={{
        width:231,
        height:70,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <View style={{
          width:231,
          height:54,
          borderRadius:54,
          backgroundColor:Colors.secondary,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}>

          <TouchableOpacity activeOpacity={0.5} 
          onPress={()=>{console.log('previous')}}
          >
          <McImage source={Images.back} style={{
            marginLeft:24}}/>
          </TouchableOpacity>

          <View style={{
            width:88,
            height:88,
            borderRadius:88,
            backgroundColor:Colors.background,
            alignItems:'center',
            justifyContent:'center'
          }}
          
          >
            <TouchableOpacity activeOpacity={0.5}>

              <PlayButton size={70} circle={62.82} icon={Images.stop} onPress={()=>console.log('toggle play-pause')}>
                
              </PlayButton>

            </TouchableOpacity>

          </View>


          <TouchableOpacity activeOpacity={0.5} 
          onPress={()=>{console.log('next')}}
          >
          <McImage source={Images.next} style={{
            marginRight:24}}/>
          </TouchableOpacity>
          
        </View>

      </View>


      <TouchableOpacity activeOpacity={0.7} 
      onPress={()=>{console.log('toglle Mute')}}
      >
        <McImage source={Images.sound}></McImage>
      </TouchableOpacity>

    </ControlSection>

    {/* Lirycs section */}
    <TouchableOpacity activeOpacity={0.7} onPress={()=>{
      console.log('ShowLirycs')
    }}>
    <LyricsSection>

      <McImage source={Images.up}/>
      <McText medium size={14} color={Colors.accent}>Lyrics</McText>

</LyricsSection>
    </TouchableOpacity>

   </Container>
  )
}

const Container=styled.SafeAreaView`
flex:1;
background-color: ${Colors.background};
`;
const HeaderSection=styled.View`
margin:12px 24px;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-top:26px;
margin-left:24px;
margin-right:24px;


`;

const MusicDetailSection=styled.View`
margin:0px 24px;
justify-content:center;
align-items:center;

`

const SlicerSection=styled.View`
margin: 0px 24px
`
const ControlSection=styled.View`
margin:32px 24px;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;

const LyricsSection=styled.View`
margin:14px 0px;
align-items:center;
justify-content:center;
`
export default Player