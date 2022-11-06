import { View, Animated, Dimensions,TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import React, { useRef,useState, useEffect} from 'react'
import {McText, McImage,PlayButton} from 'Components'
import {Colors,Images} from 'Constants'
import Slider from '@react-native-community/slider'

const {width, height} = Dimensions.get('window');


const SelectedPlayList = ({selected,selectedPlayList}) => {


    const scrollX=useRef(new Animated.Value(0)).current
    const songSlider=useRef(null);
    

    const track= selectedPlayList?.filter( track => track.id===selected?.id )[0]
    

    const [songIndex, setSongIndex] = useState(track?.id?track?.id:0)


    useEffect(()=>{

        scrollX.addListener(({value})=>{
            
           setSongIndex( Math.round(value/width));
            
        })

        return()=>{
         scrollX.removeAllListeners();
        }

             

    },[])

    const skipToNext=()=>{

        songSlider.current.scrollToOffset(
            {
                offset: (songIndex+1)*width
            }
        )
    }
    const skipToPrevious=()=>{

        songSlider.current.scrollToOffset(
            {
                offset: (songIndex-1)*width
            }
        )
    }
  

    const _renderMusicDetail=(item,index)=>{
         

        
      
        return(
            
                <MusicDetailSection key={index}>
      
                
                    <McImage 
                    style={{
                        borderRadius:width/2,
                        height:width/2,
                        width:width/2,
                        // marginHorizontal:81,
                        marginVertical:60,
                    }}
                    source={item?.artwork} />
    


                </MusicDetailSection>
           
        )
      }


    
     

  return (
    <View >
        

        {/* Flatlist container of songs */}
        <View style={{
        width:width,
        alignContent:'center'
        }}>
        <Animated.FlatList
            ref={songSlider}
            data={selectedPlayList}
            renderItem={({item,index})=> _renderMusicDetail(item,index)}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            // scrollEventThrottle={10}
            onScroll={Animated.event([
                {
                    nativeEvent:{contentOffset: {x:scrollX}}
                }
            ],
            {useNativeDriver:true}
            )}
            />
        </View>
        
        {/*Information song  */}
        <View
            style={{
              marginTop:16,
              justifyContent:'center',
              alignItems:'center',
              height:height*0.1,
            }}
            >
              <McText semi size={24} color={Colors.grey5}>
                {selectedPlayList&&selectedPlayList[songIndex]?.title}
                </McText>
              <McText medium size={14} color={Colors.grey3}
              style={{
                marginTop:8,
              }}
              >
                {selectedPlayList&&selectedPlayList[songIndex]?.artist}
                </McText>
        </View>


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
            onPress={skipToPrevious}
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
            onPress={skipToNext}
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


        </View>

  )
}



const MusicDetailSection=styled.View`
margin:25px 0px;
justify-content:center;
align-items:center;
width:${width}px;
height:${height*0.4}px

`;

const SlicerSection=styled.View`
margin: 10px 24px;
height:${height*0.05}px;
justify-content:center;

`;
const ControlSection=styled.View`
margin:22px 24px;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;





export default SelectedPlayList