import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Cronometro(props) {

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [active, setActive] = useState(false);
    const [history, setHistory] = useState([]);
    // const [off, setOff] = useState(false);

    useEffect(() => {
        let interval;

        if (active) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    let { hours, minutes, seconds } = prevTime;

                    seconds = seconds === 59 ? 0 : seconds + 1;
                    minutes = seconds === 0 ? (minutes === 59 ? 0 : minutes + 1) : minutes;
                    hours = minutes === 0 && seconds === 0 ? (hours === 23 ? 0 : hours + 1) : hours;

                    return { hours, minutes, seconds };
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [active]);

    const controlTimer = () => {
        setActive(!active);
    };

    const resetTimer = () => {
        setHistory([...history, time])
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setActive(false);
    };

    const off = () => {
        setHistory([])
    }

    // const switchOff = () => {
    //     setOff(false)
    // }

    // const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`; ormattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
    const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;

    return (
        <View style={styles.Complete}>
            <View style={styles.T1}>
                <Image source={require('../../assets/Cronometro1.png')} style={styles.Image} />
                <View style={[styles.Timer1, styles.Equal]}>
                    <Text style={styles.textTimer}>{formattedTime}</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={[history.length <= 0 ? styles.ButtonClose : styles.Button, styles.Equal]} onPress={controlTimer}>
                        <Text style={styles.buttonText}>{active ? 'Stop' : 'Start'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[history.length <= 0 ? styles.ButtonClose : styles.Button, styles.Equal]} onPress={resetTimer}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    {history.length <= 0 ? ''
                        : <TouchableOpacity style={[styles.Button, styles.Equal]} onPress={off}>
                            <Text style={styles.buttonText}>Delet</Text>
                        </TouchableOpacity>}
                </View>
            </View>

            <View style={styles.T2}>
                {history.length > 0 ? <>
                    <Text style={styles.buttonText}>History:</Text>
                    <View style={styles.Scroll}>
                        <ScrollView style={[styles.Equal]}>
                            {history.map((record, index) => (
                                <Text key={index} style={[styles.buttonText, styles.Map]}>{`Time: ${String(record.hours).padStart(2, '0')}:${String(record.minutes).padStart(2, '0')}:${String(record.seconds).padStart(2, '0')}`}</Text>
                            ))}
                        </ScrollView>
                    </View>
                </> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Complete: {
        justifyContent: 'center', alignItems: 'center', gap: 50,
        marginVertical: 70
    },

    T1: {
        justifyContent: 'center', alignItems: 'center', gap: 30,
        backgroundColor: 'black',
    },

    Image: {
        width: 260, height: 230, resizeMode: 'stretch'
    },

    Timer1: {
        alignItems: 'center',
        paddingVertical: 5,
        width: 260,
    },

    textTimer: {
        fontSize: 40, color: 'white',
    },

    viewButton: {
        flexDirection: 'row', gap: 20
    },

    Button: {
        alignItems: "center", justifyContent: 'center',
        padding: 5,
        width: 75, height: 50,
    },

    ButtonClose: {
        alignItems: "center", justifyContent: 'center',
        padding: 5,
        width: 120, height: 50,
    },

    buttonText: {
        fontSize: 22, textAlign: 'center', color: 'white'
    },

    Equal: {
        borderRadius: 10, borderWidth: 2, borderColor: 'yellow'
    },

    T2: {
        flex: 1,
        backgroundColor: 'black',
    },

    Scroll: {
        padding: 10,
        width: 280, maxHeight: 200
    },

    Map: {
        marginVertical: 5, paddingVertical: 2
    }

})