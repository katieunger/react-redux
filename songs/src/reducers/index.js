import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Space Oddity', duration: '5:18'},
        { title: 'Life On Mars?', duration: '3:51'},
        { title: 'Heroes', duration: '3:37'},
        { title: 'Let\'s Dance', duration: '4:10'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});