import React, { Component } from 'react'
import Ubah from './Ubah'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      produk:'INOVA'
    })
  }

  gantiProduk = (produk_baru) => {
    this.setState({
      produk: produk_baru
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.produk}</h1>
        <button onClick={() => this.gantiProduk("Alphard")}>Ganti Mobil</button>
        <h3>Ahmad Riki Susanto</h3>
        <h3>Nim : 1120101842</h3>
      </div>
    )
  }
}
