import React, { memo } from "react";
import Contact from './Contact';

function Contacts(props) {
	return (
		<div className="container">
			<section className="contacts">
				<article className="contact">
					<span className="contact__avatar" />
					<span className="contact__data">Nome</span>
					<span className="contact__data">Telefone</span>
					<span className="contact__data">País</span>
					<span className="contact__data">Admissão</span>
					<span className="contact__data">Empresa</span>
					<span className="contact__data">Departamento</span>
				</article>

				{props.data.map((contacts, index) => 
					<Contact key={index} data={contacts} />
				)}
			</section>
		</div>
	)
}

export default memo(Contacts);
