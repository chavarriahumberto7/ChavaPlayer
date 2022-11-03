import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import McImage from '../McImage'
import {Colors} from 'Constants'

const start ={x:0,y:0};
const end={x:1,y:0};

const PlayButton = ({
    size,circle,icon,onPress
}) => {
  return (
    <Container  size={size} onPress={onPress}>
        <McImage source={icon} style={{position:'relative', zIndex:1}} />
      <Circle colors={Colors.linearGradient} size={size} circle={circle}
      start={start}
      end={end}
      style={{
        opacity:0.5,
        position:'absolute',
        left:0,
        bottom:0,
      }}
      />
      <Circle colors={Colors.linearGradient} size={size} circle={circle}
      start={start}
      end={end}
      style={{
        opacity:0.5,
        position:'absolute',
        right:0,
        bottom:0,
      }}
      />
      <Circle colors={Colors.linearGradient} size={size} circle={circle} 
      start={start}
      end={end}
      style={{
        opacity:0.5,
        position:'absolute',
        top:0,
              }}
      />
    </Container>
  )
}

const Container=styled.TouchableOpacity`
width:${props => props.size ||78}px;
height:${props => props.size ||78}px;
justify-content:center;
align-items:center;

`

const Circle=styled(LinearGradient)`
width:${props => props.circle ||70}px;
height:${props => props.circle ||70}px;
border-radius:${props => props.circle/2 ||70/2}px;

`


export default PlayButton