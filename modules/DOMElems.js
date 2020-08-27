import { select, selectAll } from './manipFuncs.js';
const DOMElems = {
    settingsBtn: select('.settings'),
    gameContainer: select('.game-container'),
    settingsContainer: select('.settings-div'),
    sizeOptions: selectAll('.size-option'),
    checkBoxSize: selectAll('.check-box-size'),
    checkBoxTheme: selectAll('.check-box-theme'),
    checkBoxSize4: select('#size-4'),
    checkBoxThemeNeon: select('#theme-neon'),
    saveSettingsBtn: select('.save-settings'),
    tileBoard: select('.tile-board'),
    scoreValue: select('#score-value'),
    highScoreValue: select('#high-score-value'),
};

export default DOMElems;