import React, { Component } from 'react';
import ReactTable from 'react-table';
import data from '../../data.js';

export default class Table extends Component {
	render() {
		const columns = [
			{
				Header: '',
				columns: [
					{
						accessor: 'eyeColor',
						width: 30,
						resizable: false
					},
					{
						Header: 'Name',
						width: 170,
						Aggregated: row => <span>{row.row.eyeColor}</span>,
						accessor: 'name'
					}
				]
			},
			{
				Header: 'Geogrphic',
				columns: [
					{
						Header: 'latitude',
						accessor: 'latitude',
						Aggregated: () => <span />
					},
					{
						Header: 'longitude',
						accessor: 'latitude',
						Aggregated: () => <span />
					}
				]
			},
			{
				Header: 'Contacts',
				columns: [
					{
						Header: 'email',
						accessor: 'email',
						Aggregated: () => <span />
					},
					{
						Header: 'phone',
						accessor: 'phone',
						Aggregated: () => <span />
					},
					{
						Header: 'address',
						accessor: 'address',
						Aggregated: () => <span />
					}
				]
			},
			{
				Header: 'Material things',
				columns: [
					{
						Header: 'balance',
						accessor: 'balance',
						Aggregated: () => <span />
					},
					{
						Header: 'company',
						accessor: 'company',
						Aggregated: () => <span />
					}
				]
			},
			{
				Header: 'Age',
				columns: [
					{
						Header: 'Age',
						width: 60,
						accessor: 'age',
						Aggregated: () => <span />
					}
				]
			}
		];

		return (
			<ReactTable
				pivotBy={['eyeColor']}
				data={data}
				columns={columns}
				resizable
				className="-striped -highlight"
				style={{ height: '600px' }}
			/>
		);
	}
}
