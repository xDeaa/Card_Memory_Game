import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, FlatList,} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import Card from './src/components/Card';

export default function App() {
  const [data, setData] = useState([{ score: 0, list: []}]);
  const [selection, setSelection] = useState(null);
  const [timer, setTimer] = useState({
    isStart: false,
  })

  useEffect(() => {
    let items = [
      {id:1 , name:'a', hidden: true, done: false},
      {id:2 , name:'a', hidden: true, done: false},
      {id:3 , name:'b', hidden: true, done: false},
      {id:4 , name:'b', hidden: true, done: false},
      {id:5 , name:'c', hidden: true, done: false},
      {id:6 , name:'c', hidden: true, done: false},
      {id:7 , name:'d', hidden: true, done: false},
      {id:8 , name:'d', hidden: true, done: false},
      {id:9 , name:'e', hidden: true, done: false},
      {id:10 , name:'e', hidden: true, done: false},
      {id:11 , name:'f', hidden: true, done: false},
      {id:12 , name:'f', hidden: true, done: false},
    ]
    setData({ ...data, list: items });
  }, []);

  const startStopTimer = () => {
    setTimer({ isStart: !timer.isStart });
  }

  const getFormattedTime = (time) => {
    this.currentTime = time;
  }

  const showCard = (id) => {
    const updateList = data.list.map((v, i) => {
      if (v.id === id) {
        return { ...v, hidden: false }
      }
      return v
    })

    setData({ ...data, list: updateList });
  }

  const updateSelection = (id) => {
    if (selection === null) {
      setSelection(data.list[id])
      return;
    }
  
    const secondCard = data.list[id];
    
    // (secondCard === selection) {
    //   true !!
    // } else {
    //   false !!
    // }
  }

  // console.log(data.list);
  

  return (
    <View style={styles.MainContainer}>
      <Stopwatch
        laps
        start={timer.isStart}
        getTime={getFormattedTime}
      />
      <FlatList
        data={data.list}
        renderItem={({ item }) => (
          <Card data={item} onClick={(value) => showCard(value)} onSelect={(value) => updateSelection(value)} selection={selection} />
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
