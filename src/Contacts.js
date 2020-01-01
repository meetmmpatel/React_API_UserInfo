import React from "react";

const Contacts = ({ contacts }) => {
	return (
		<div>
			<center>
				<h1>Contact List</h1>
			</center>
			{contacts.map(contact => (
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">ID:  {contact.id}</h5>
						<h5 className="card-title">Name: {contact.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">Email: {contact.email}</h6>
						<p className="card-text">{contact.company.catchPhrase}</p>
						<p className="card-text">{contact.address.street}</p>
						<p className="card-text">{contact.address.suite}</p>
						<p className="card-text">{contact.address.city}</p>
						<p className="card-text">{contact.address.zipcode}</p>
						<p className="card-text">{contact.address.geo.lat}</p>
						<p className="card-text">{contact.address.geo.lng}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Contacts;
