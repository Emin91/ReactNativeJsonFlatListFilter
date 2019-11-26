import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  } from 'react-native';
import search from './search.json';

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
      data: search,
      serachKey: '',
    };
  }

  
  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = search.filter(item => {
      console.log(item.type)
      const itemData = `${item.country.toUpperCase()} ${item.city.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    
    this.setState({
      data: newData
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  render() {

    const filteredData = data.filter((item) => {
      return item.name.indexOf(this.state.serachKey) >= 0
    })
  

    return(
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Country or capital name..."
            onChangeText={text => this.searchFilterFunction(text)}>
          </TextInput>
        </View>
        {filteredData.map((item) => {
          return <View style={styles.listViewMain}>
            <FlatList style={styles.flatView}
              keyExtractor={(item, index) => `${index}`}
              extraData={this.state}
              data={this.state.data}
              renderItem={({ item }) => (
              <Text style={styles.listText}>{item.country}</Text>
              )}
              ItemSeparatorComponent={this.renderSeparator}
          
            />
          </View>
        })}

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
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 30,
  },
  listViewMain: {
    backgroundColor: '#141414',
  },
  flatView: {
    //marginLeft: 20,
  },
  listText: {
    marginTop: 20,
    padding: 15,
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#2980b9',
  }
});

export default App;
