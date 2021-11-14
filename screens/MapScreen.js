import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "twrnc";
import Map from '../components/Map'

const MapScreen = () => {
  return (

      <View>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
          <Text>place map top half, info card bottom half</Text>
        </View>
      </View>

  )
}

export default MapScreen

const styles = StyleSheet.create({})
