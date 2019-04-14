// Action creator
// Note: Here we are using a named export, rather than 'export default'
// A named export allows us to export many different functions
// from a single file
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};