import Masonry from 'react-masonry-component/lib';

SearchResultsList = React.createClass({

	propTypes: {
		works: React.PropTypes.array.isRequired,
		loadMore: React.PropTypes.func.isRequired,
		hasMoreWorks: React.PropTypes.bool,
	},

	loadMore() {

	},

	renderWorks() {
		return this.props.works.map((work) => (
			<WorkTeaser
				key={work._id}
				work={work}
			/>
		));
	},


	render() {
		const masonryOptions = {
			// columnWidth : "400px",
			isFitWidth: true,
			transitionDuration: 300,
		};

		const works = this.props.works;


		return (
			<div className="works-list search-results-list">
				{works.length ?
					<Masonry
						options={masonryOptions}
						className="works-container works-container--grid row"
					>

						{this.renderWorks()}
					</Masonry>
				:
					<div className="works-container works-container--no-results">
						<p className="no-results">
							No results found for your query.
						</p>
					</div>
				}

				{this.props.hasMoreWorks ?
					<a
						className="waves-effect waves-light btn-large"
						aria-label="View more"
						onClick={this.loadMore}
					>
						Load more
					</a>
				: '' }

			</div>
		);
	},
});
