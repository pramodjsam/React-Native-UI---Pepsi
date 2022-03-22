import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Block = ({...props,children}) => {
    return (
        <View {...props}>
            {children}
        </View>
    )
}

export default Block

const styles = StyleSheet.create({})
