import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, Searchbar, Text } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select';
import HomeStyle from '../styles/HomeStyle'
import DummyApi from '../services/DummyApi'
import { FlatList } from 'react-native-gesture-handler'
import GlobalValues from '../styles/Global'
import Card from '../components/Card/Card'

export default function Home(props) {
    const [produtos, setProdutos] = useState([])
    const [category, setCategory] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        try {
            DummyApi.get('/products?limit=100').then(response => {
                setProdutos(response.data.products)
            })
            DummyApi.get('products/categories').then(response => {
                setCategory(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleChange = (value) => {
        setSelectedValue(value);
    };

    useEffect(() => {
        try {
            if (selectedValue == null) {
                DummyApi.get('/products?limit=100').then(response => {
                    setProdutos(response.data.products)
                })
            } else {
                DummyApi.get('/products/category/' + selectedValue).then(response => {
                    setProdutos(response.data.products)
                })
            }
        } catch (error) {
            console.log(error)
        }

    }, [selectedValue])
    
    return (
        <View style={HomeStyle.container}>
            <View style={{ flexDirection: 'row', width: 370, gap: 10 }}>
                <Searchbar
                    style={{ marginBottom: 10, borderRadius: 15, maxHeight: 40, width: '50%' }}
                    inputStyle={{ textAlignVertical: 'center', }}
                    placeholder="Search product"
                    mode='view'
                    showDivider={false}
                    // onChangeText={onChangeSearch}
                    value={searchQuery}
                />

                <RNPickerSelect
                    darkTheme={true}
                    style={{
                        inputIOS: { // estilos para iOS
                            backgroundColor: GlobalValues.mainColor,
                            height: 40, width: 175,
                            borderRadius: GlobalValues.mainRadius,
                            textAlign: 'center', fontSize: 18
                        },
                        inputAndroid: { // estilos para Android
                            backgroundColor: GlobalValues.mainColor,
                            height: 40, width: '50%'
                        },
                    }}

                    Icon={() => {
                        return <Icon name="ios-arrow-down" size={24} color="gray" />;
                    }}

                    onValueChange={handleChange}
                    items={category.map(item => ({ label: item, value: item }))}
                />
            </View>

            <FlatList
                data={produtos}
                // scrollEnabled={false}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ gap: GlobalValues.mainSpacing }}
                renderItem={({ item }) => (
                    <Card Image={item.thumbnail} Name={item.title} Valor={item.price} changePage={() => props.navigation.push('productPage', item.id)} />
                )}
            />

        </View>
    )
}
