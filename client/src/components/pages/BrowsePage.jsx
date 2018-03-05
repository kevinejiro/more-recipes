import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Jumbotron from '../common/Jumbotron';
import RecipeCard from '../common/RecipeCard';

import { topRecipes } from '../../actions/loadRecipes';

/**
 * @class BrowsePage
 */
class BrowsePage extends React.Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      fetching: false,
      fetched: false,
      message: '',
      error: {},
    };
  }
  /**
   * @returns {void} void
   */
  componentDidMount() {
    this.props.topRecipes();
  }
  /**
   *
   * @param {object} nextProps
   *
   * @returns {void} void
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      recipes: nextProps.recipes,
      fetching: nextProps.fetching,
      fetched: nextProps.fetched,
      message: nextProps.message,
      error: nextProps.error
    });
  }
  /**
   * @returns {JSX} JSX element
   */
  render() {
    const {
      recipes,
      fetching,
      fetched,
      message,
      error
    } = this.state;
    return (
      <div>
        <Jumbotron
          heading="Top Recipes"
          jumbotronText="Here is a list of the weeks
          top recipes. Happy Experimenting!!!"
        />
        <div className="album text-muted">
          <div className="container">
            <div className="row">
              <RecipeCard
                description="Some description"
                id={1}
                imgUrl="https://res.cloudinary.com/dhgq8vcwi/image/upload/v1519918536/Indomielette.jpg"
                title="Some Title"
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
BrowsePage.propTypes = {
  topRecipes: PropTypes.func.isRequired
};
/**
 *
 * @param {object} state
 *
 * @returns {object} props
 *
 */
const mapStateToProps = state => ({
  recipes: state.topRecipesReducer.recipes,
  fetching: state.topRecipesReducer.fetching,
  fetched: state.topRecipesReducer.fetched,
  message: state.topRecipesReducer.message,
  error: state.topRecipesReducer.error,
});
export default connect(
  mapStateToProps,
  { topRecipes }
)(BrowsePage);