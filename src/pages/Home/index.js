import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';

class Home extends Component {
	texto = ''

	handleSubmit = async formValues => {
		const response = await axios.post('http://localhost:8000/text', { text: formValues.text });
		this.texto = response.data.text;
	};
	render() {
		return(
			<form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="card m-md-5">
				<div className="card card-header">
					<div className="col text-center"><h4>Ingrese el texto que quiera procesar:</h4></div>
				</div>
				<div className="card card-body">
					<div className="row mt-3">
						<div className="col-md-6 offset-md-3 justify-content-md-center">
							<Field name="text" type="text" component="input" className="form-control" placeholder="Ingrese un texto"/>
						</div>
					</div>
					<div className="row mt-2">
						<div className="col justify-content-md-center text-center">
							<button className="btn btn-primary pl-5 pr-5" type="submit">Enviar</button>
						</div>
					</div>
				</div>
				<div className="card card-footer">
					<div className="row justify-content-md-center mt-5">
						<div className="col text-center"><h4>Respuesta:</h4></div>
					</div>

					<div className="row justify-content-md-center mt-2">
						<div className="col text-center alert-success"><h3>{this.texto}</h3></div>
					</div>
				</div>
			</form>
		);
	}
}


export default reduxForm({ form: 'testForm'})(Home);
