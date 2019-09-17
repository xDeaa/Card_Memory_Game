import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Animated, Text } from 'react-native';
import CardFlip from 'react-native-card-flip';

const Card = ({ data, onClick, onSelect, selection }) => {


    const flipCard = async (id) => {
        onClick(id);
        this['card' + id].flip()
        onSelect(id);

        // if (selection !== null) {
        //     const selectedId = selection.id
        //     if (selection.name !== data.name) {
        //         this['card' + selectedId].jiggle()
        //         this['card' + id].flip()
        //     }
        // }
    }

    return (
        <CardFlip style={styles.flipCard} ref={(card) => this['card' + data.id] = card} >
            <TouchableOpacity onPress={() => flipCard(data.id)} ><Image style={styles.image} source={require('../../assets/backCard.jpg')} /></TouchableOpacity>
            <TouchableOpacity><Text>{data.name}</Text></TouchableOpacity>
        </CardFlip>
    );
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    flipCard: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        width: 75,
        height: 125,
        margin: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Card;