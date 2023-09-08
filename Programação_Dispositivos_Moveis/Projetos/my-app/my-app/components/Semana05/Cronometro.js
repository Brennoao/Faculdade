import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Cronometro(props) {

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [active, setActive] = useState(false);

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
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        setActive(false);
    };

    const formattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`; ormattedTime = `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;

    return (
        <View style={styles.Complete}>
            <Image source={require('../../assets/Cronometro1.png')} style={styles.Image} />
            <View style={[styles.Timer1, styles.Equal]}>
                <Text style={styles.textTimer}>{formattedTime}</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={[styles.Button, styles.Equal]} onPress={controlTimer}>
                    <Text style={styles.buttonText}>{active ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.Button, styles.Equal]} onPress={resetTimer}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Complete: {
        justifyContent: 'center', alignItems: 'center', gap: 20
    },

    Image: {
        width: 200, height: 200
    },
    
    Timer1: {
        alignItems: 'center',
        paddingVertical: 5,
        width: 220,
    },

    textTimer: {
        fontSize: 30,
        color: 'white',
    },

    viewButton: {
        flexDirection: 'row', gap: 20
    },

    Button: {
        alignItems: "center", justifyContent: 'center',
        padding: 5,
        width: 100, height: 40,
    },

    buttonText: {
        fontSize: 22,
        color: 'white'
    },

    Equal: {
        borderRadius: 10,
        borderWidth: 2, borderColor: 'yellow'
    }
})