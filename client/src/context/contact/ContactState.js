import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types'

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Ola Nordmann',
				email: 'o.nordmann@gmail.com',
				phone: '91111111',
				type: 'personal'
			},
			{
				id: 2,
				name: 'Kari Nordmann',
				email: 'k.nordmann@gmail.com',
				phone: '92222222',
				type: 'personal'
			},
			{
				id: 1,
				name: 'Walter White',
				email: 'heisenberg@gmail.com',
				phone: '93333333',
				type: 'professional'
			}
		]
	}

	const [state, dispatch] = useReducer(ContactReducer, initialState)

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState
