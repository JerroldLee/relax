import * as fontsActions from 'actions/fonts';

import bind from 'decorators/bind';
import Component from 'components/component';
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {dataConnect} from 'relate-js';

import Fonts from './components/fonts.jsx';

@dataConnect(
  (state) => ({
    fonts: state.fonts.data
  }),
  (dispatch) => ({
    fontsActions: bindActionCreators(fontsActions, dispatch)
  }),
  () => ({
    fragments: {
      settings: {
        _id: 1,
        value: 1
      }
    },
    variablesTypes: {
      settings: {
        ids: '[String]!'
      }
    },
    initialVariables: {
      settings: {
        ids: ['fonts']
      }
    }
  })
)
export default class FontsContainer extends Component {
  static propTypes = {
    fonts: PropTypes.object.isRequired
  };

  getInitState () {
    return {
      previewText: '',
      display: 'grid',
      manage: false
    };
  }

  @bind
  changeDisplay (display) {
    this.setState({
      display
    });
  }

  @bind
  changePreviewText (value) {
    this.setState({
      previewText: value
    });
  }

  @bind
  openManage () {
    this.setState({
      manage: true
    });
  }

  @bind
  closeManage () {
    this.setState({
      manage: false
    });
  }

  render () {
    return (
      <Fonts
        {...this.props}
        {...this.state}
        changePreviewText={this.changePreviewText}
        changeDisplay={this.changeDisplay}
        openManage={this.openManage}
        closeManage={this.closeManage}
      />
    );
  }
}
