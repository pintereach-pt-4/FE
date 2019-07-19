import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoards } from '../../actions';
import { Link } from 'react-router-dom';
import Layout from '../layout';
import BoardCard from './BoardCard';
import './board.css';
import Pagination from '../Pagination';

class BoardList extends Component {
	state = { perPage: 6, currentPage: 1 };
	componentDidMount() {
		this.props.getBoards();
	}
	page = number => {
		this.setState({ currentPage: number });
	};
	render() {
		const last = this.state.currentPage * this.state.perPage;
		const first = last - this.state.perPage;
		const currentBoards = this.props.boards.slice(first, last);
		if (this.props.loading) {
			return (
				<Layout>
					<h1>Loading...</h1>
				</Layout>
			);
		}
		if (this.props.filter === 'All') {
			return (
				<Layout>
					<div className="card-grid">
						{currentBoards.map(board => (
							<BoardCard
								key={board.id}
								title={board.title}
								url={board.url}
								category={board.category}
								description={board.description}
								createdBy={board.created_by_id}
								userID={this.props.userID}
								boardID={board.id}
							/>
						))}
					</div>
					<Pagination
						total={this.props.boards.length}
						perPage={this.state.perPage}
						page={this.page}
						selected={this.state.currentPage}
					/>
				</Layout>
			);
		} else {
			const filteredBoards = this.props.boards.filter(
				board => board.category === this.props.filter
			);
			return (
				<Layout>
					<div className="card-grid">
						{filteredBoards.map(board => (
							<BoardCard
								key={board.id}
								title={board.title}
								url={board.url}
								category={board.category}
								description={board.description}
								createdBy={board.created_by_id}
								userID={this.props.userID}
								boardID={board.id}
							/>
						))}
					</div>
					{/* <Pagination
						total={this.props.boards.length}
						perPage={this.state.perPage}
						page={this.page}
						selected={this.state.currentPage}
					/> */}
				</Layout>
			);
		}
	}
}

const mapState = state => {
	return {
		boards: state.boards,
		userID: state.user.id,
		filter: state.filter,
		loading: state.loading
	};
};

export default connect(
	mapState,
	{ getBoards }
)(BoardList);
