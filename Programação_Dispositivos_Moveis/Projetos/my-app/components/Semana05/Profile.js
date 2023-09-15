import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile(props) {

    const itens = ["Nome:", "Genero:", "Telefone:", "Email:"]

    return (
        <View style={styles.Principal}>
            <Image source={{ uri: props.img }} style={styles.Image} />

            <View style={styles.Flex}>
                <View style={[styles.text1]}>
                    <Text style={[styles.Font, styles.Color]}>Nome:</Text>
                    <Text style={[styles.Font, styles.Color]}>Genero:</Text>
                    <Text style={[styles.Font, styles.Color]}>Telefone:</Text>
                    <Text style={[styles.Font, styles.Color]}>Email:</Text>
                </View>
                <View style={styles.text1}>
                    <Text style={styles.Font}>{props.Nome}</Text>
                    <Text style={styles.Font}>{props.Genero}</Text>
                    <Text style={styles.Font}>{props.Cell}</Text>
                    <Text style={styles.Font}>{props.Email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Principal: {
        alignItems: "center",
        gap: 30
    },

    Flex: {
        flexDirection: "row",
        gap: 30
    },

    Image: {
        width: 170,
        height: 170,
        borderRadius: 100,
        borderColor: "red", borderWidth: 4
    },

    text1: {
        gap: 10
    },

    Font: {
        fontSize: 20
    },

    Color: {
        color: "red"
    }
})