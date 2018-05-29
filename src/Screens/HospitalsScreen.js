import React from 'react';
import {Container, Content, List, ListItem, Text} from 'native-base';
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
      <ScreenHeader
        title='Hospitais'
      />
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
