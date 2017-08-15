import React, {Component} from 'react';

class SearchBar extends Component{

	render(){
		return (
			<div className="field has-addons">
                <div className="control">
                    <input className="input" placeholder="Número do convite" type="number" />
                </div>
                <div className="control">
                    <a className="button is-info" id="adicionar">Adicionar</a>
                </div>
            </div>
		);
		
	}

}
 
export default SearchBar;