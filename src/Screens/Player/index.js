//Player screen
//[x]Header section
//[x]Music details section
//[x]Slider section  [Rect native-community slider]
//[x]Control button section
//[x]Lyrics section



import { View, TouchableOpacity,StatusBar

} from 'react-native'
import React, {useState,useEffect}from 'react'
import styled from 'styled-components/native'
import {Colors,Images,Metrics} from 'Constants'
import {McText, McImage,} from 'Components'
import SelectedPlayList from '../../Components/SelectedPlayList'

const Player = ({route,navigation}) => {
  
 const [selected,setSelected]=useState(null);
 const [selectedPlayList,setSelectedPlaylist]=useState(null);

useEffect(()=>{

  let {selectedMusic,playList}=route.params;

  setSelected(selectedMusic);
  setSelectedPlaylist(playList);
  
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

        <SelectedPlayList
        selected={selected}
        selectedPlayList={selectedPlayList}    
        />
    
 

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

const LyricsSection=styled.View`
margin:14px 0px;
align-items:center;
justify-content:center;
`;


export default Player