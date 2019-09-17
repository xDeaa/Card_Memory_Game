import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, FlatList, Image } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

export default function App() {
  const [data, setData] = useState({});
  const [timer, setTimer] = useState({
    isStart: false,
  })

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1), hidden: true };
    });
    setData(items);
  }, []);

  const startStopTimer = () => {
    setTimer({ isStart: !timer.isStart });
  }

  const getFormattedTime = (time) => {
    this.currentTime = time;
  }

  return (
    <View style={styles.MainContainer}>
      <Stopwatch
        laps
        start={timer.isStart}
        getTime={getFormattedTime}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 2 }}>
            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
          </View>
        )}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title='Start' onPress={startStopTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 60,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
