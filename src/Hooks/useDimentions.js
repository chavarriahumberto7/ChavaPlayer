import { View, Dimensions } from 'react-native'
import React from 'react'

const useDimentions = () => {

const {width,top}=Dimensions.get('window');


  return {width,top}
}

export default useDimentions