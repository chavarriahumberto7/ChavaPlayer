//Library Screen 

//[x] Header section
//[x] Search section
//[x] Plasylist section Flat List
//[x] Favorite section Scroll View
//[] Bottom bar section react-native-svg
//[] 

import { View, Text,TextInput, FlatList, TouchableWithoutFeedback,ScrollView,StatusBar,TouchableOpacity

} from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import {Colors,Images,Metrics} from 'Constants'
import {McText, McImage, PlayButton} from 'Components'
import {dummyData}  from '../../Mock';
import BottomBar from './BottomBar'
import {useDimentions} from '../../Hooks'

const Library = ({navigation}) => {

  const {width}=useDimentions();




const _renderItem=({item,index})=>{

    return(
    <TouchableOpacity onPress={()=>{ navigation.navigate('Player',{selectedMusic:item})}}>
      <View 
      style={{
        marginTop:16,
        marginLeft: index===0?24:0,
        marginRight: index===dummyData.Playlists.length-1?0:24,
      }}
      >
        <McImage
        style={{
          marginBottom:12,
        }}
        key={index}
        source={item.artwork}
        />
        <McText semi size={16} color={Colors.grey5}>{item.name}</McText>
        <McText medium size={12} color={Colors.grey3}
        style={{
          marginTop:4,
        }}
        >{item.songs} songs</McText>
      </View>
    </TouchableOpacity>
  )

}

  return (
    <Container>

      {/* Header SECTION */}
      <StatusBar barStyle='light-content'/>
      <McText
      bold size={28} color={Colors.primary}
      style={{
        marginLeft:Metrics.padding,
        marginTop:12,
      }}
      >
        Library
      </McText>
{/* Search bar section */}
      <SearchSection>
        <McImage source={Images.find} 
        style={{
          marginLeft:16,
          marginRight:12,
        }}
        />
        
        <TextInput
        placeholder='Song or artist'
        placeholderTextColor={Colors.grey3}
        style={{
          color:Colors.grey4,
        }}
        />

      </SearchSection>

      {/* PlayList section Flat List */}
      <TitleSection>
        <McText medium size={20} color={Colors.grey4} >
          Playlists
        </McText>
       <TouchableWithoutFeedback onPress={
        ()=>{
          console.log('Go to playlist page');
        }
       }>
       <McImage
        source={Images.right}
        
        />
       </TouchableWithoutFeedback>

      </TitleSection>
      

      <View>
        <FlatList
        keyExtractor={(item)=> 'playlist_'+item.id}
        horizontal
        showsHorizontalCrollIndecator='false'
        contentContainerStyle={
          {}
        }
        data={dummyData.Playlists}
        renderItem={_renderItem}
        />
      </View>

      {/* Favorite section */}
      <TitleSection>
        <McText medium size={20} color={Colors.grey4} >
          Favorite
        </McText>
       <TouchableWithoutFeedback onPress={
        ()=>{
          console.log('Go to favorite page');
        }
       }>
       <McImage
        source={Images.right}
        
        />
       </TouchableWithoutFeedback>

      </TitleSection>

      <View style={{
      
      }}>
        <ScrollView
        style={{
            height:Math.floor(width*0.6),
            marginBottom:width/4
            
        }}
        contentContainerStyle={{
          marginTop:14,
          height:200,
          
        }}
        >

          {dummyData.Favorites.map((item,index)=>{

            return(
              <FavoriteItemView key={index}>

                <TouchableWithoutFeedback 
                onPress={()=> navigation.navigate('Player', {selectedMusic:item, playList:dummyData.Favorites})}>
                <View
                style={{
                  flexDirection:'row',
                }}>

                  <MusicCircle>
                    <McImage
                    source={Images.music}
                    />

                  </MusicCircle>

                  <View style={{
                      marginLeft:12,
                    }}>
                    <McText semi size={14} color={Colors.grey5}
                    
                    >{item.title}</McText>
                    <McText medium size={12} color={Colors.grey3}
                    style={{
                      marginTop:4,
                    }}
                    >{item.artist}</McText>
                  </View>

                  

                </View>
                </TouchableWithoutFeedback>
                <McImage source={Images.like}/>
                
              </FavoriteItemView>
            )
          })}

        </ScrollView>
      </View>

      {/* Bottom bar section react-native-svg */}

      <BottomSection>
      <BottomBar style={{
        flex:1,
        alignItems:'center',
        alignSelf:'center'
      }}>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignContent:'center',
            alignItems:'center',
            marginHorizontal:16,
            marginVertical:12,
          }}>

              <View style={{
                flexDirection:'row',
                justifyContent:'center',
                
              }}>
                <McImage source={Images.thumb}
                style={
                  {
                    width:38,
                    height:38,
                  }
                }
                ></McImage>

              <View style={{
                  marginLeft:12,

                  }}>
              <McText medium size={16} color= {Colors.grey5}>Thunder</McText>
              <McText medium size={12} color={Colors.grey3} style={{marginTop:4,}}>Image Dragon</McText>
              
            </View>

            
          </View>

            <PlayButton size={46} circle={41.28} icon={Images.play}>
            </PlayButton>

            

          </View>
        </BottomBar>


      </BottomSection>
      
      
    </Container>
  )
}

const Container=styled.SafeAreaView`
flex:1;
background-color: ${Colors.background};


`;

const SearchSection=styled.View`

height:52px;
border-radius:30px;
background-color:${Colors.secondary};
margin: 20px 24px 0px;
flex-direction:row;
justify-content:flex-start;
align-items:center;
`;

const TitleSection=styled.View`
margin: 20px 24px 0px;
flex-direction:row;
justify-content:space-between;
align-items:center;


`;

const FavoriteItemView=styled.View`
  margin:10px 24px;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;

`;

const MusicCircle=styled.View`
 width:42px;
 height:42px;
 border-radius:42px;
 background-color:${Colors.secondary};
 align-items:center;
 justify-content:center;
`;

const BottomSection=styled.View`
margin:0px 24px;
flex-direction:row;
justify-content:center;
align-items: center;
position:absolute;
bottom:50px;
right:10px;
left:0px;
z-index:1;
background-color:transparent;

`;

export default Library