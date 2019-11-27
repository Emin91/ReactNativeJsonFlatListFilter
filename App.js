import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import { styles } from './styles/styles'
import search from './search.json';

const data = [
  {
    name: '',
    subtitle: '',
  },
]

class App extends React.Component {

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
      const itemData = `${item.country.toUpperCase()} ${item.city.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });

    this.setState({
      data: newData
    });
  };

  render() {

    const filteredData = data.filter((item) => {
      console.log("Item  filterdata is " + item)
      return item.name.indexOf(this.state.serachKey) >= 0
    })


    return (

      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Country or capital name..."
            onChangeText={text => this.searchFilterFunction(text)}>
          </TextInput>
        </View>
        {filteredData.map(() => {
          return <View style={styles.listViewMain}>
            <FlatList style={styles.flatView}
              keyExtractor={(item, index) => `${index}`}
              data={this.state.data}
              renderItem={({ item }) => (
                <Text style={styles.listText}>{item.country}</Text>
              )}
            />
          </View>
        })}

      </View>
    )
  }
}

export default App;
