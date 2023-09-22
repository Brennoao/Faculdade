import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

export default function Pessoa({ pessoa }) {


    const avatar = () => {
        return <Avatar.Image size={48} source={{ uri: pessoa.image }} />
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card} >
                <Card.Title title={pessoa.username} left={avatar} />
                <Card.Content>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={styles.Text}>Name:</Text>
                        <Text variant='bodyLarge' style={styles.Text} >{pessoa.firstName} {pessoa.lastName}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={styles.Text}>Age:</Text>
                        <Text variant='bodyLarge' style={styles.Text} >{pessoa.age}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text variant='bodyLarge' style={styles.Text}>E-mail:</Text>
                        <Text variant='bodyLarge' style={styles.Text} >{pessoa.email}</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },

    card: {
        backgroundColor: 'black'
    },

    label: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Text: {
        fontStyle: 'bold',
        color: 'white'
    }

})