import React from "react";
import withUiActions from "../../../hoc/uiHoc";

const msToMinutesAndSeconds = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const song = props => {
  const active = props.id === props.current && props.playing;
  const buttonClass = active ? "fa-pause-circle-o" : "fa-play-circle-o";

  const artists = props.item.artists ? props.item.artists.length : 0;

  const event = active
    ? props.pauseSong
    : () => props.playSong(props.uri, props.offset);

  return (
    <li className={"user-song-item" + (active ? " active" : "")}>
      {props.isAlbum ? (
        <div className="r-song" onClick={event}>
          <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
        </div>
      ) : (
        <div className="play-song" onClick={event}>
          <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
        </div>
      )}
      <div className="song-title">
        <p>{props.item.name}</p>
      </div>
      <div className="song-artist">
        <p>
          {props.item.artists
            ? props.item.artists.map((a, i) => (
                <span key={i}>
                  <span
                    className="artist"
                  >
                    {a.name}
                  </span>
                  {artists !== i + 1 ? <span>, </span> : null}
                </span>
              ))
            : ""}
        </p>
      </div>
      {!props.isAlbum && (
        <div className="song-album">
          <p
            className="album"
          >
            {props.item.album.name}
          </p>
        </div>
      )}
      <div className="song-length">
        <p>{msToMinutesAndSeconds(props.item.duration_ms)}</p>
      </div>
    </li>
  );
};

export default withUiActions(song);