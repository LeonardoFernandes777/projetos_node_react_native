import React, {Component} from 'react';
import Bar from './Bar';
import Pie from './Pie';
import Line from './Line';
import Doughnut from './Doughnut';
import '../../global.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
class Scope extends Component {

  state = {

  }

  
  render() {
    
    const  {entrada:{preço, mes, colorA}} = this.props;
    const  {vendas:{quantidade, nomes, colorB}} = this.props;
    const  {velocidade:{media, mes2, colorC}} = this.props;
    const  {atendimento:{concluidos, colaborador, colorD}} = this.props;
    const anos = [
        '2020', '2021', '2022', '2023', '2024', '2025'
    ];
    
    const defaultOption = mes[0];
    const defaultOption2 = anos[0];
    

    return (
      
      <div style={{paddingLeft: 250}}>
        <h1 style={{color: "#E02041"}}>ENTRADA CAIXA</h1>
        <Dropdown  options={anos} onChange={this._onSelect} value={defaultOption2} placeholder="Ano" />;
          <div style={{height: 530, width: 1050}}>
            <Bar data={preço} labels={mes} backgroundColor={colorA} title="CAIXA"/>
          </div>
          <div style={{width: 1075}}>
          <Line data={media} labels={mes2} backgroundColor={colorC} title="Média Tempo de reposta cozinha"/> 
          </div>
          <div style={{  display: "flex", height: 100}}>
            <h1 style={{paddingTop: 23}}>Dashboard</h1>
            <div style={{paddingLeft: 15, display: "flex", paddingTop:27}}>
            <Dropdown className="" options={anos} onChange={this._onSelect} value={defaultOption2} placeholder="Ano" />;
            <Dropdown  options={mes} onChange={this._onSelect} value={defaultOption} placeholder="Mes" />;
            </div>
          </div>
          <div >
          <div  style={{width: 1055, height:150, paddingLeft: 60}}>
              <Doughnut data={concluidos} labels={colaborador} backgroundColor={colorD} title="Melhores Atentendes"/>
          </div>
          <div style={{display: "flex",  width: 500, paddingRight: 20}}>
              <Pie data={quantidade} labels={nomes} backgroundColor={colorB} title="Vendas Mes Junho"/>
          </div>
          </div>
          
      </div>
    )
  }
}

export default Scope;