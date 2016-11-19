import React from 'react';

import { connect } from 'react-redux';

import { Form, Grid, Segment } from 'semantic-ui-react';

import * as types from '../constants/ActionTypes';
import * as actions from '../actions';


const Options = ({dispatch, options}) =>
  <Form className="OptionsForm">
    <Grid columns={1} relaxed>
      <Grid.Column>
        <Segment basic>

          <Form.Checkbox
            label='Source Map'
            checked={options.sourceMap}
            onChange={() => dispatch(actions.toggleOption(types.TOGGLE_SOURCEMAP)) } />

        </Segment>
      </Grid.Column>

    </Grid>
  </Form>


Options.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  options: React.PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
  }
}

export default connect(mapStateToProps)(Options);