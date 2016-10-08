import { connect } from 'react-redux';
import { requestCalculations, receiveCalculations, createCalculation } from '../../actions/calculation_actions';
import Calculation from './calculation';


const mapStateToProps = (state) => {
  return {
    calculations: state.calculations,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  createCalculation: (calculation) => {dispatch(createCalculation(calculation))},
  destroyCalculation: (calculation) => {dispatch(destroyCalculation(calculation))},
  requestCalculations: () => {dispatch(requestCalculations())}
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Calculation);