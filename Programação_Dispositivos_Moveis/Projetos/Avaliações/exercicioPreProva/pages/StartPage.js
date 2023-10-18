import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import React, { useState } from 'react'
import Api from '../services/Dummy'

export default function startPage(props) {
    const [posts, setPosts] = useState([])

    Api.get('/posts').then(response => {
        setPosts(response.data.posts)
    })

    function listadUsuarios() {
        props.navigation.navigate('users')
    }

    // console.log(posts)

    return (
        <View style={styles.Back}>
            <Button mode='outlined' onPress={listadUsuarios}>Lista Usuarios</Button>

            <FlatList style={styles.peopleList}
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('usuario', item.userId) }}>
                        <Card mode='contained'style={styles.Test}>
                            <Card.Title title={item.title} />
                            <Card.Content>
                                <Text variant="titleLarge">{item.body}</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Back: {
        flex: 1, gap: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 10,
    },

    peopleList: { width: '100%', },

    Test: {
        marginBottom: 10
    }
})