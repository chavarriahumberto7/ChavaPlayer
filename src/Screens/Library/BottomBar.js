import { View, Text } from 'react-native'
import React from 'react'
import {McText, McImage, PlayButton} from 'Components'

import { LinearGradient } from 'expo-linear-gradient'

import Svg, {Circle,G, Path} from 'react-native-svg'
import {Colors,Images,Metrics} from 'Constants'
import styled from 'styled-components'

const BottomBar = ({
    children
}) => {
  return (
    <Container>
        <View style={{
            width:42,
            height:84,
        }}></View>
        <View style={{
            height:84,
            justifyContent:'space-between'

        }}>

   

            <LinearGradient
            colors={Colors.linearGradient2}
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            style={{
                width:321 -84,
                height:3,
                flexDirection:'row',
                justifyContent:'flex-start',
            }}
            />
            <LinearGradient
            colors={Colors.linearGradient2}
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            style={{
                width:321 -84,
                height:3,
                flexDirection:'row',
                justifyContent:'flex-start',
            }}
            />

            <View style={{
                flexDirection:'row',
                justifyContent:'flex-end',
            }}>
                <View
                style={{
                    width:6,
                    height:6,
                    borderRadius:6,
                    backgroundColor:'#6A8CCC',
                    position:'relative',
                    bottom:-1.5,

                }}></View>
                <View style={{
                    width:321-84-150,
                    height:3,
                    borderRadius:3,
                    alignSelf:'flex-end',
                    backgroundColor:`#ED1BA3`,
                }}>

                </View>
            </View>
            




        </View>

        <Svg height={84} width={84}>
            <Circle
            cx={0}
            cy={42}
            r={40}
            stroke="#ED1BA3"
            strokeWidth={3}
            fill="transparent"
            >

            </Circle>

        </Svg>


        <View style={{
            marginVertical:7,
            marginHorizontal:7,
            width:321-84+70,
            height:70,
            borderRadius:70,
            backgroundColor:Colors.secondary,
            position:'absolute',
            top:0,
            left:0.

        }}>
            {children}
        </View>
    </Container>
  )
}

const Container=styled.View`
width:321px;
height:84px;
border-radius:84px;
background-color:transparent;
flex-direction:row;
justify-content:space-between;
align-items:flex-start;


`;

export default BottomBar