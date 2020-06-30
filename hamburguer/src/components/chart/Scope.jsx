import React, { Component } from 'react';
import Bar from './Bar';
import Pie from './Pie';
import Line from './Line';
import Doughnut from './Doughnut';
import '../../global.css'
import 'react-dropdown/style.css';
class Scope extends Component {

  state = {

  }


  render() {

    const { entrada: { preço, mes, colorA } } = this.props;
    const { vendas: { quantidade, nomes, colorB } } = this.props;
    const { velocidade: { media, mes2, colorC } } = this.props;
    const { atendimento: { concluidos, colaborador, colorD } } = this.props;

    return (

      <div style={{ paddingLeft: 250 }}>
        <h1 style={{ color: "#E02041" }}>ENTRADA CAIXA</h1>

        <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '35px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="Ano">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>

        <div style={{ height: 530, width: 1050 }}>
          <Bar data={preço} labels={mes} backgroundColor={colorA} title="CAIXA" />
        </div>
        <div style={{ width: 1075 }}>
          <Line data={media} labels={mes2} backgroundColor={colorC} title="Média Tempo de reposta cozinha" />
        </div>
        <div style={{ display: "flex", height: 100 }}>
          <h1 style={{ paddingTop: 23 }}>Dashboard</h1>
          <div style={{ paddingLeft: 15, display: "flex", paddingTop: 27 }}>

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '35px', padding: '0 24px', fontSize: 17 }} name="Ano">
            <option value="2020">2020</option> <option value="2021">2021</option>
            <option value="2022">2022</option> <option value="2023">2023</option>
            <option value="2024">2024</option> <option value="2025">2025</option>
          </select>

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '35px', padding: '0 24px', fontSize: 17, marginLeft: 5 }} name="Ano">
            <option value="1">Janeiro</option> <option value="2">Fevereiro</option>
            <option value="3">Março</option> <option value="4">Abril</option>
            <option value="5">Maio</option> <option value="6">Junho</option>
            <option value="7">Julho</option> <option value="8">Agosto</option>
            <option value="9">Setembro</option> <option value="10">Outubro</option>
            <option value="11">Novembro</option> <option value="12">Dezembro</option>
          </select>

            </div>
        </div>
        <div  style={{ display: 'flex'}}>
          <div style={{ width: '100%', height:'100%', margin: -8}}>
            <Doughnut data={concluidos} labels={colaborador} backgroundColor={colorD} title="Melhores Atentendes" />
          </div>
          <div style={{ width: '100%', height:'100%', margin: 0}}>
            <Pie data={quantidade} labels={nomes} backgroundColor={colorB} title="Vendas Mes Junho" />
          </div>
        </div>

      </div>
    )
  }
}

export default Scope;