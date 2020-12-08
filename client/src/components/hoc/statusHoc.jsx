import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {playSong, pauseSong, playTracks} from '../../dataHandler/store/actions/spotify';
import {containsSong} from '../../dataHandler/store/actions/libraryActions';

export default function(ComposedComponent) {
  class StatusHoc extends Component {
    render = () => <ComposedComponent {...this.props} />;
  }

  const mapStateToProps = state => {
    return {
      currentUri: state.playerReducer.status
        ? state.playerReducer.status.context.uri
        : null,
      currentSong: state.playerReducer.status
        ? state.playerReducer.status.track_window.current_track.linked_from
            .id || state.playerReducer.status.track_window.current_track.id
        : null,
      playing: state.playerReducer.status
        ? !state.playerReducer.status.paused
        : false
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        pauseSong,
        playSong,
        playTracks,
        containsSong,
          },
      dispatch
    );
  };

  return connect(mapStateToProps,mapDispatchToProps)(StatusHoc);
}