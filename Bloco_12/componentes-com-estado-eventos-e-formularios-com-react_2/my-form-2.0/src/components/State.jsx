import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

class State extends  React.Component {
  render() {

    const { state, handlerGenerico } = this.props;
    return(
      <DropdownButton 
        id="dropdown-basic-button" 
        title="ESTADO"
        type='dropdown'
        name='state'
        value={ state }
        onChange={ handlerGenerico }
        maxLength='28'
        isRequire 
      >
      <Dropdown.Item>Acre</Dropdown.Item>
      <Dropdown.Item>Alagoas</Dropdown.Item>
      <Dropdown.Item>Amapá</Dropdown.Item>
      <Dropdown.Item>Amazonas</Dropdown.Item>
      <Dropdown.Item>Bahia</Dropdown.Item>
      <Dropdown.Item>Ceará</Dropdown.Item>
      <Dropdown.Item>Espírito Santo</Dropdown.Item>
      <Dropdown.Item>Goiás</Dropdown.Item>
      <Dropdown.Item>Maranhão</Dropdown.Item>
      <Dropdown.Item>Mato Grosso</Dropdown.Item>
      <Dropdown.Item>Mato Grosso do Sul</Dropdown.Item>
      <Dropdown.Item>Minas Gerais</Dropdown.Item>
      <Dropdown.Item>Pará</Dropdown.Item>
      <Dropdown.Item>Paraíba</Dropdown.Item>
      <Dropdown.Item>Paraná</Dropdown.Item>
      <Dropdown.Item>Pernambuco</Dropdown.Item>
      <Dropdown.Item>Piauí</Dropdown.Item>
      <Dropdown.Item>Rio de Janeiro</Dropdown.Item>
      <Dropdown.Item>Rio Grande do Norte</Dropdown.Item>
      <Dropdown.Item>Rio Grande do Sul</Dropdown.Item>
      <Dropdown.Item>Rondônia</Dropdown.Item>
      <Dropdown.Item>Roraima</Dropdown.Item>
      <Dropdown.Item>Santa Catarina</Dropdown.Item>
      <Dropdown.Item>São Paulo</Dropdown.Item>
      <Dropdown.Item>Sergipe</Dropdown.Item>
      <Dropdown.Item>Tocantins</Dropdown.Item>
      <Dropdown.Item>Distrito Federal</Dropdown.Item>
    </DropdownButton>
    )
  }
}

export default State;
