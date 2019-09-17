import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Animated, Text } from 'react-native';
import CardFlip from 'react-native-card-flip';

const Card = ({ data, onClick, onSelect, selection }) => {

    const flipCard = (id) => {
        this['card' + data.id].flip()
        onClick(id);
        onSelect(id);   
    }

    return (
        <View style={{ flex: 1, margin: 2, }}>
            <CardFlip style={styles.flipCard} ref={(card) => this['card' + data.id] = card} >
                <TouchableOpacity onPress={() => flipCard(data.id)} ><Image style={styles.image} source={require('../../assets/backCard.jpg')} /></TouchableOpacity>
                <TouchableOpacity><Text>{data.name}</Text></TouchableOpacity>
            </CardFlip>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 60,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    flipCard: {
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