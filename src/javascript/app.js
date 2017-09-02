import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dexie from 'dexie';
import SearchBar from './components/search';
import Historico from './components/historico';
import db from './db';
import $ from 'jquery';






class App extends Component{
    
	constructor(props){
        super(props);

        
        this.state = {
            linhas: []
        }
        
		
    }
	adicionarLinha(valor){
		if (valor == '') return;
		let date = new Date();
		let timestamp = date
		let row = {
            convite: valor,
            time: new Date(),
            sync: false
        };
        db.table("convites").add(row);
        
        this.refresh();

    }
    refresh(){
		db.table('convites')
		      .toArray()
		      .then((convites) => {
		        this.setState({ linhas:convites });
		});
		
    }
    sync(){
    	
    	let usuario = prompt("Informe seu nome:");
    	if (usuario == null || usuario == "")
    		return;
    	
    	db.table('convites')
		      .toArray()
		      .then((convites) => {
		      	let c = convites.map(function(element){
		      		element.usuario = usuario;
				  	element.time = element.time.valueOf();
				  	if (element.sync == false) //filter
				  		return element;
				  });
		      	var retorno;
		        $.ajax({
				  method: "POST",
				  async: false,  
				  url: "/api/sync",
				  data: {convites: c}
				})
				  .done(function( msg ) {
				  	retorno = $.parseJSON(msg);
				  });
				retorno = retorno.map(function(element){
					element.time = new Date(element.time);
					if (element.sync == 1)
						element.sync = ture;
					else
						element.sync = false;
					console.log(element);
					return element;
				});
				this.setState({ linhas:retorno });
				});
    }
	render(){
		this.refresh();
		return (
		<div className="section">
			<SearchBar action={(i)=>this.adicionarLinha(i)} sync={(i)=>this.sync(i)} closeModal={(i)=>this.closeModal(i)}/>
			<h2 className="subtitle">Histórico</h2>
			<Historico linhas={this.state.linhas} />
		</div>
	)	;
	}
} 

ReactDOM.render(
  <App />,
  document.getElementById('inputBox')
); 

