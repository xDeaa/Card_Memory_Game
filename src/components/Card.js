import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Animated, Text } from 'react-native';
import CardFlip from 'react-native-card-flip';

const Card = ({ data, onClick, onSelect, selection }) => {


    const getImage = (name) => {
        switch(name) {
            case 'bingo': return <Image style={styles.icon} source={require('../../assets/iconCard/bingo.png')}/>
            case 'camera': return <Image style={styles.icon} source={require('../../assets/iconCard/camera.png')}/>
            case 'carreau': return <Image style={styles.icon} source={require('../../assets/iconCard/carreau.png')}/>
            case 'cherry': return <Image style={styles.icon} source={require('../../assets/iconCard/cherry.png')}/>
            case 'clover': return <Image style={styles.icon} source={require('../../assets/iconCard/clover.png')}/>
            case 'diamond': return <Image style={styles.icon} source={require('../../assets/iconCard/diamond.png')}/>
            case 'grappe': return <Image style={styles.icon} source={require('../../assets/iconCard/grappe.png')}/>
            case 'heart': return <Image style={styles.icon} source={require('../../assets/iconCard/heart.png')}/>
            case 'lemon': return <Image style={styles.icon} source={require('../../assets/iconCard/lemon.png')}/>
            case 'seven': return <Image style={styles.icon} source={require('../../assets/iconCard/seven.png')}/>
            case 'slot': return <Image style={styles.icon} source={require('../../assets/iconCard/slot.png')}/>
            case 'spade': return <Image style={styles.icon} source={require('../../assets/iconCard/spade.png')}/>
        }
    }

    const flipCard = async (id) => {
        onClick(id);
        this['card' + id].flip()
        onSelect(id);

        if (selection !== null) {
            const selectedId = selection.id
            if (selection.name !== data.name) {
                this['card' + selectedId].flip()
                this['card' + id].flip()
            }
        }
    }

    return (
        <View style={{ flex: 1,marginTop: 30 }}>
            <CardFlip style={styles.flipCard} ref={(card) => this['card' + data.id] = card} >
                <TouchableOpacity onPress={() => flipCard(data.id)} ><Image style={styles.image} source={require('../../assets/backCard.jpg')} /></TouchableOpacity>
                <TouchableOpacity>{getImage(data.name)}</TouchableOpacity>
            </CardFlip>
        </View>

    );
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    },
    icon: {
        height: '75%',
        width: '100%',
        marginTop: 15
    },
    flipCard: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        width: 80,
        height: 125,
        margin: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Card;