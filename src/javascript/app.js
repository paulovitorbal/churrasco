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
            linhas: [],
			user: null
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
        document.getElementById('entrada').value = '';
        this.sync();

    }
    refresh(){
		db.table('convites')
		      .toArray()
		      .then((convites) => {
		        this.setState({ linhas:convites });
		});
		
    }
    change(valor){
		if (valor.toString().length > 8){
			this.adicionarLinha(valor);
		}
	}
    sync(){
		let usuario = null;
    	if ($('#user').val() == null || $('#user').val() == ""){
            usuario = prompt("Informe seu nome:");
            if (usuario == null || usuario == "")
                return;
            $('#user').val(usuario);
            console.log('setting user with jquery');

        }

    	db.table('convites')
		      .toArray()
		      .then((convites) => {
		      	let c = convites.map(function(element){
		      		element.usuario = $('#user').val();
				  	element.time = element.time.valueOf();
				  	element.chave = $('#chave').val();
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
						element.sync = true;
					else
						element.sync = false;
					element.id = parseInt(element.id,10);
					db.table('convites').where('id').equals(element.id).delete();
					db.table('convites').add(element);
				});
				this.refresh();
    	});
    }
	render(){
		this.refresh();
		return (
		<div className="section">
			<SearchBar
				action={(i)=>this.adicionarLinha(i)}
				change={(i)=>this.change(i)}
				sync={(i)=>this.sync(i)}
				closeModal={(i)=>this.closeModal(i)}
			/>
			<h2 className="subtitle">Histórico</h2>
			<Historico linhas={this.state.linhas} user={this.state.user} />
		</div>
	)	;
	}
} 

ReactDOM.render(
  <App />,
  document.getElementById('inputBox')
); 

