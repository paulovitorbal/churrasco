import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            linhas: []
        }
    }
    adicionarLinha(valor){
        var t = this.state.linhas;
        t.push({
            convite: valor
        });
        this.setState({
            linhas: t
        });
    }
	render(){
		return (
            <div className="box">
    			<div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            placeholder="Número do convite" 
                            type="number" 
                            id="entrada"
                        />
                    </div>
                    <div className="control">
                        <a className="button is-info" id="adicionar"
                            onClick={event => {this.adicionarLinha(document.getElementById('entrada').value)}}
                        >Adicionar</a>
                    </div>
                    
                </div>
            </div>
		);
		
	}

}
 
export default SearchBar;