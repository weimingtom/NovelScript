/**
 * Created by yan on 16/2/14.
 */

// TODO for version 0.3 automatic resource collector
ns.media = {
    images: [],
    audios: []
};

/**
 * TODO for version 0.3 modify the condition to pass a state object to program and declination otherwise
 * @param state
 * @returns {boolean}
 */
ns.controls.statePassable = function (state) {
    if(true){

        return state
    }else return false
};


ns.initControls = function (setting) {
    setting = setting || ns.default.setting;
    ns.controls.theme = ns.ui.themes[setting.theme];
    // relation amang scripts paragraphes
    ns.controls.relation = {
        /* TODO for version 0.2
         */
    };
};