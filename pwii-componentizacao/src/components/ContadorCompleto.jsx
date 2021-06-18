import './ContadorCompleto.css'
import React, { Component } from 'react'
class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 5,

    }

    inc= () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
     setPasso= (event) => {
         this.setState({
             passo: event.target.value
         })
     }
     render (){
         return(
             <div className="Contador">
                 <h2> {this.state.numero} </h2>
        <div>
             <label htmlFor="passoInput">Passo: </label>
            <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
            />
            </div>
            <button onClick={this.inc}> + </button>
            <button onClick={this.inc}> - </button>
         </div>
         )
     }

}
export default Contador