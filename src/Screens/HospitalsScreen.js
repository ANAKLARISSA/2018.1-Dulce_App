import React from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
import {View} from 'react-native';
import ScreenHeader from '../Components/ScreenHeader';
class HospitalsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Hospitals: ['Hospital de Base','Hospital Regional de Taguatinga','Hospital da Ceilandia','Clínica']
    };
  }

  render() {
    return (
      <Container>
      <View>
      <ScreenHeader
        title='Hospitais'
      />
      </View>
        <Content>
          <List dataArray={this.state.Hospitals}
            renderRow={(item) =>
              (<ListItem onPress={() => this.props.navigation.navigate('sectors')}>
                <Text>{item}</Text>
              </ListItem>)
            } />
        </Content>
      </Container>
    );
  }
}

export default HospitalsScreen;
