import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import Historico from './components/historico';
import db from './db';








class App extends Component{
    
	constructor(props){
        super(props);

        
        this.state = {
            linhas: []
        }
        
		
    }
	adicionarLinha(valor){
		if (valor == '') return;

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
	render(){
		this.refresh();
		return (
		<div className="section">
			<SearchBar action={(i)=>this.adicionarLinha(i)}/>
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

