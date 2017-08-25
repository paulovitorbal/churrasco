import React, {Component} from 'react';

class SearchBar extends Component{
    
    
	render(){
		return (
            <div className="box">
    			<div className="field">
                    <div className="control">
                        <input 
                            className="input" 
                            placeholder="Número do convite" 
                            type="number" 
                            id="entrada"
                        />
                    </div>
                </div>
                <div className="field has-addons">
                    <div className="control">
                        <a className="button is-info" id="adicionar"
                            onClick={() => this.props.action(document.getElementById('entrada').value)}
                        >Adicionar</a>
                    </div>
                    <div className="control">
                        <a className="button is-success" id="sincronizar"
                        >Sincronizar</a>
                    </div>
                    
                </div>
            </div>
		);
		
	}

}
 
export default SearchBar;