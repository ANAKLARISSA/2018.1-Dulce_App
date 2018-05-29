import React from 'react';
import ListElements from '../Components/ListElements';
class HospitalsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Hospitals: ['Hospital de Base','Hospital Regional de Taguatinga','Hospital da Ceilandia','Clínica']
    };
  }

  onPressItem() {
    this.props.navigation.navigate('sectors');
  }

  render() {
    return (
      <ListElements
      list = {this.state.Hospitals}
      title='Hospitais'
      onPress={this.onPressItem.bind(this)}
      />
    );
  }
}

export default HospitalsScreen;
