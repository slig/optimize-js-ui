import React, { Component } from 'react';

import { connect } from 'react-redux';

import { downloadFile } from '../util/downloadFile';

import * as actions from '../actions';

import CodeContainer from './CodeContainer';
import OptionsContainer from './OptionsContainer';


class App extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    code: React.PropTypes.string,
    optimizedCode: React.PropTypes.string,
    optimizing: React.PropTypes.bool,
    optimized: React.PropTypes.bool,
    error: React.PropTypes.bool,
    options: React.PropTypes.object,
  }

  optimize() {
    const { dispatch } = this.props;
    const { code, options } = this.props;
    dispatch(actions.optimizeCode(code, options));
  }

  downloadCode() {
    const data = {
      mime: 'application/javascript',
      filename: 'optimized.js',
      contents: this.props.optimizedCode,
    }
    downloadFile(data);
  }

  render() {

    const { dispatch } = this.props;

    const {
      code,
      optimizedCode,
      optimizing,
      optimized,
      error,
    } = this.props;

    const hasOptimizedCode = optimizedCode.length !== 0;

    return (
      <div>

        <CodeContainer
          code={code}
          optimizedCode={optimizedCode}
          pending={optimizing}
          hasResults={optimized || error }
          onCodeChange={(code) => dispatch(actions.updateCode(code))}
          onOptimizeClick={::this.optimize}
          onDownloadCodeClick={::this.downloadCode}
          hasOptimizedCode={hasOptimizedCode}
         />

        <div className="ui grid">
          <div className="column">
            <OptionsContainer />
          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const code = state.code;
  return {
    code: code.code,
    optimizedCode: code.optimizedCode,
    sourceMap: code.sourceMap,
    optimizing: code.optimizing,
    optimized: code.optimized,
    error: code.error,
    options: state.options,
  }
}

export default connect(mapStateToProps)(App);