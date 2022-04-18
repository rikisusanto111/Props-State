import React, { Component } from 'react'

export default class App extends Component {

    render(){
        const {Produk, gantiProduk} = this.props
        return(
            <div>
                <h2>ubah state ke props = {Produk}</h2>
                <button onClick={() => this.gantiProduk("Alphard")}>Ganti Mobil</button>
            </div>
        )
    }

}
