import axios from 'axios';

import {
  unsetLoading,
  setLoading
} from './isLoading';

import {
  GET_SINGLE_RECIPE,
  GET_SINGLE_RECIPE_ERROR
} from '../actions/types';

/**
 *
 * @param {Object} recipe
 *
 * @returns {Object} action
 */
export const oneRecipe = recipe => ({
  type: GET_SINGLE_RECIPE,
  recipe
});

/**
 *
 * @param {String} message - Error Message
 *
 * @returns {Object} action
 */
export const oneRecipeError = message => ({
  type: GET_SINGLE_RECIPE_ERROR,
  message
});

/**
 *
 *
 * @param {string} id
 * @returns {Promise} thunk function
 */
const getSingleRecipe = id => (dispatch) => {
  dispatch(setLoading());
  return axios.get(`/api/v1/recipes/${id}`)
    .then((response) => {
      const {
        recipe
      } = response.data;
      dispatch(oneRecipe(recipe));
      dispatch(unsetLoading());
    }).catch((error) => {
      const {
        message
      } = error.response.data;
      dispatch(oneRecipeError(message));
      dispatch(unsetLoading());
    });
};

export default getSingleRecipe;
