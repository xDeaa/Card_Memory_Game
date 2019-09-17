import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, FlatList, Text } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import Card from './src/components/Card';
import Row from './src/components/Row';


export default function App() {
  const [data, setData] = useState({ score: 0, list: [] });
  const [selection, setSelection] = useState(null);
  const [timer, setTimer] = useState({
    isStart: false,
  })

  useEffect(() => {
    let items = [
      { id: 0, name: 'bingo', hidden: true, done: false },
      { id: 1, name: 'bingo', hidden: true, done: false },
      { id: 2, name: 'camera', hidden: true, done: false },
      { id: 3, name: 'camera', hidden: true, done: false },
      { id: 4, name: 'carreau', hidden: true, done: false },
      { id: 5, name: 'carreau', hidden: true, done: false },
      { id: 6, name: 'cherry', hidden: true, done: false },
      { id: 7, name: 'cherry', hidden: true, done: false },
      { id: 8, name: 'clover', hidden: true, done: false },
      { id: 9, name: 'clover', hidden: true, done: false },
      { id: 10, name: 'diamond', hidden: true, done: false },
      { id: 11, name: 'diamond', hidden: true, done: false },
      { id: 12, name: 'grappe', hidden: true, done: false },
      { id: 13, name: 'grappe', hidden: true, done: false },
      { id: 14, name: 'heart', hidden: true, done: false },
      { id: 15, name: 'heart', hidden: true, done: false },
      { id: 16, name: 'spade', hidden: true, done: false },
      { id: 17, name: 'spade', hidden: true, done: false },
      { id: 18, name: 'seven', hidden: true, done: false },
      { id: 19, name: 'seven', hidden: true, done: false },
    ]
    setData({ score: 0, list: items });
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

  const hideCards = (firstId, secondId) => {
    const updateList = data.list.map((v, i) => {
      if (v.id === firstId || v.id === secondId) {
        return { ...v, hidden: true }
      }
      return v
    })

    setData({ ...data, list: updateList });
  }

  const doneCards = (firstId, secondId) => {
    const updateList = data.list.map((v, i) => {
      if (v.id === firstId || v.id === secondId) {
        return { ...v, onDone: true }
      }
      return v
    })

    setData({ ...data, list: updateList });
  }

  const updateSelection = async (id) => {
    if (selection === null) {
      setSelection(data.list[id])
      return;
    }

    const secondCard = data.list[id];

    if (secondCard.name === selection.name) {
      console.log("pareil");
      if (data.score === 0)
        setData({ ...data, score: 10 });
      else
        setData({ ...data, score: data.score * 2 })

      doneCards(selection.id, id);
      setSelection(null)
      return;
    }
    else {
      console.log("dommage");
      hideCards(selection.id, id)
      setSelection(null);
      return;
    }
  }

  return (
    <View style={styles.MainContainer}>
      <Row style={{ margin: 10, marginBottom: 10 }} justifyContent='space-between'>
        <Text>Score : {data.score}</Text>
        <Stopwatch
          laps
          start={timer.isStart}
          options={styles.timer}
          getTime={getFormattedTime}
        />
      </Row>
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
  timer: {
    height: 150,
  },
});