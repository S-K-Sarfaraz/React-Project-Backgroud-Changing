import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randonBackground, setRandomBackground] = useState('#ffffff')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]     
    }
    setRandomBackground(color)
  }

  return (
    <>
      <StatusBar backgroundColor={randonBackground}/>
      <View style={[styles.container, {backgroundColor: randonBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: '#3177cc',
    paddingHorizontal: 50,
    paddingVertical:10
  },
  actionBtnText:{
    fontSize:24,
    color: 'white',
    textTransform: 'uppercase'
  }
})