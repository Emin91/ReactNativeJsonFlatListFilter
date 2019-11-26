import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  } from 'react-native';


const data = [
  {
    name: "Azerbaijan",
    subtitle: "Baku",
  },
  {
    name: "Russia",
    subtitle: "Moscow",
  },
]


class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      serachKey: '',
    }
  }

  render() {

    const filteredData = data.filter((item) => {
      return item.name.indexOf(this.state.serachKey) >= 0
    })

    return(
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput 
              style={styles.inputText}
              placeholder="Your Text"
              onChangeText={(value) => this.setState({serachKey : value})}>
          </TextInput>
        </View>
        <ScrollView>
        { filteredData.map((item) => {
          return <View style={styles.listViewMain}>
              <View style={styles.listViewSecond}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textSubtitle}>{item.subtitle}</Text>
              </View>
          </View>
        })}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  inputView: {
    padding: 10,
  },
  inputText: {
    width: '100%',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    fontSize: 20,
  },
  listViewMain: {
    //backgroundColor: 'red',
  },
  listViewSecond: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#c0392b',
  },
  textName: {
    fontSize: 30,
    color: '#fff',
  },
  textSubtitle: {
    fontSize: 22,
    alignSelf: 'flex-end',
    color: '#bdc3c7',
  },
});

export default App;
