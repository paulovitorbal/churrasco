import React, {Component} from 'react';

class Historico extends Component{
    render(){
        let rows = [];
        this.props.linhas.reverse().forEach(function(val, index){
            rows.push(
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.time.toLocaleTimeString()}</td>
                    <td>{val.convite}</td>
                    <td>{val.sync?'sim':'não'}</td>
                </tr>
            );
        });
		return (
            <div className="box">
            <div className="content">
                <table className="table">
                    <thead>
                        <tr>
                            <th><abbr title="Sequencial">Seq</abbr></th>
                            <th><abbr title="Hora">Hr</abbr></th>
                            <th><abbr title="Código">Cod</abbr></th>
                            <th><abbr title="Sincronizado">Sinc</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>

            </div>
        </div>
		);
		
	}

}
 
export default Historico;