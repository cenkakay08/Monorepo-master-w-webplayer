/**
 * @file KeyBinder element for catching keys globally
 * or component based from different environments like
 * Andorid TV Remote, Apple TV Remote, 3rd Party Device Remote or Keyboard.
 * @author DIGITURK\DTHSARI - HAMZA SARI (TECHNOLOGY) <hamza.sari@digiturk.com.tr>
 */

/**
 * @import { useEffect } from 'react';
 * @import PropTypes from 'prop-types';
 *
 * @import { useKeyPress } from '../redux/KeyPress';
 * @import { AbstractKeyNames } from '../AbstractKeyNames';
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useKeyPress } from '../redux/KeyPress';
import { AbstractKeyNames } from '../AbstractKeyNames';

/**
 * This function checks if the prop function is defined or not, and calls the prop function if it is defined.
 *
 * @param {*} propFunc This parameter should be prop function, like prop.onLeft, prop.onRight, ...
 * @example
 * callPropFunction(prop.onLeft);
 * callPropFunction(prop.onReft);
 */
const callPropFunction = (propFunc) => {
  if (propFunc !== undefined) {
    propFunc();
  }
};

/**
 * @description KeyBinder component to bind catched keys to prop functions.
 * @param {*} props
 */
const KeyBinder = (props) => {
  // Catch key events and add the pressed key information to global redux state

  // eslint-disable-next-line react/destructuring-assignment
  useKeyPress(props.store);

  // Handle state changes
  const handleChange = () => {
    const abstractKeyName = props.store.getState().keys.pressedKeyAbstractName;

    if (
      abstractKeyName === '' ||
      abstractKeyName === undefined ||
      abstractKeyName === null
    ) {
      return;
    }

    try {
      switch (abstractKeyName) {
        case AbstractKeyNames.LEFT:
          callPropFunction(props.onLeft);
          break;
        case AbstractKeyNames.RIGHT:
          callPropFunction(props.onRight);
          break;
        case AbstractKeyNames.UP:
          callPropFunction(props.onUp);
          break;
        case AbstractKeyNames.DOWN:
          callPropFunction(props.onDown);
          break;
        case AbstractKeyNames.FCT_1:
          callPropFunction(props.onFct1);
          break;
        case AbstractKeyNames.FCT_2:
          callPropFunction(props.onFct2);
          break;
        case AbstractKeyNames.FCT_3:
          callPropFunction(props.onFct3);
          break;
        case AbstractKeyNames.FCT_4:
          callPropFunction(props.onFct4);
          break;
        case AbstractKeyNames.PLAY:
          callPropFunction(props.onPlay);
          break;
        case AbstractKeyNames.PAUSE:
          callPropFunction(props.onPause);
          break;
        case AbstractKeyNames.PLAY_PAUSE:
          callPropFunction(props.onPlayPause);
          break;
        case AbstractKeyNames.STOP:
          callPropFunction(props.onStop);
          break;
        case AbstractKeyNames.FORWARD:
          callPropFunction(props.onForward);
          break;
        case AbstractKeyNames.REWIND:
          callPropFunction(props.onRewind);
          break;
        case AbstractKeyNames.PREV:
          callPropFunction(props.onPrev);
          break;
        case AbstractKeyNames.NEXT:
          callPropFunction(props.onNext);
          break;
        case AbstractKeyNames.NUM_1:
          callPropFunction(props.onNum1);
          break;
        case AbstractKeyNames.NUM_2:
          callPropFunction(props.onNum2);
          break;
        case AbstractKeyNames.NUM_3:
          callPropFunction(props.onNum3);
          break;
        case AbstractKeyNames.NUM_4:
          callPropFunction(props.onNum4);
          break;
        case AbstractKeyNames.NUM_5:
          callPropFunction(props.onNum5);
          break;
        case AbstractKeyNames.NUM_6:
          callPropFunction(props.onNum6);
          break;
        case AbstractKeyNames.NUM_7:
          callPropFunction(props.onNum7);
          break;
        case AbstractKeyNames.NUM_8:
          callPropFunction(props.onNum8);
          break;
        case AbstractKeyNames.NUM_9:
          callPropFunction(props.onNum9);
          break;
        case AbstractKeyNames.NUM_0:
          callPropFunction(props.onNum0);
          break;
        case AbstractKeyNames.MUTE:
          callPropFunction(props.onMute);
          break;
        case AbstractKeyNames.VOL_UP:
          callPropFunction(props.onVolUp);
          break;
        case AbstractKeyNames.VOL_DOWN:
          callPropFunction(props.onVolDown);
          break;
        case AbstractKeyNames.PROG_UP:
          callPropFunction(props.onProgUp);
          break;
        case AbstractKeyNames.PROG_DOWN:
          callPropFunction(props.onProgDown);
          break;
        case AbstractKeyNames.INFO:
          callPropFunction(props.onInfo);
          break;
        case AbstractKeyNames.HOME:
          callPropFunction(props.onHome);
          break;
        case AbstractKeyNames.SETTINGS:
          callPropFunction(props.onSettings);
          break;
        case AbstractKeyNames.VIDEO_SETTINGS:
          callPropFunction(props.onVideoSettings);
          break;
        case AbstractKeyNames.AUDIO_SETTINGS:
          callPropFunction(props.onAudioSettings);
          break;
        case AbstractKeyNames.MODECHANGE:
          callPropFunction(props.onModeChange);
          break;
        case AbstractKeyNames.REC_TIMER:
          callPropFunction(props.onRecTimer);
          break;
        case AbstractKeyNames.TV_RAD:
          callPropFunction(props.onTvRad);
          break;
        case AbstractKeyNames.PVR:
          callPropFunction(props.onPvr);
          break;
        case AbstractKeyNames.REC:
          callPropFunction(props.onRec);
          break;
        case AbstractKeyNames.BACK_SPACE:
          callPropFunction(props.onBackSpace);
          break;
        case AbstractKeyNames.BACK:
          callPropFunction(props.onBack);
          break;
        case AbstractKeyNames.OK:
          callPropFunction(props.onOk);
          break;
        case AbstractKeyNames.SPECIAL:
          callPropFunction(props.onSpecial);
          break;
        case AbstractKeyNames.MENU:
          callPropFunction(props.onMenu);
          break;
        case AbstractKeyNames.POWER:
          callPropFunction(props.onPower);
          break;
        case AbstractKeyNames.GUIDE:
          callPropFunction(props.onGuide);
          break;
        case AbstractKeyNames.EXIT:
          callPropFunction(props.onExit);
          break;
        case AbstractKeyNames.DEL:
          callPropFunction(props.onDel);
          break;
        case AbstractKeyNames.OPTION:
          callPropFunction(props.onOption);
          break;
        case AbstractKeyNames.PIP:
          callPropFunction(props.onPip);
          break;
        case AbstractKeyNames.VOD:
          callPropFunction(props.onVod);
          break;
        case AbstractKeyNames.HELP:
          callPropFunction(props.onHelp);
          break;
        case AbstractKeyNames.AUDIO:
          callPropFunction(props.onAudio);
          break;
        case AbstractKeyNames.SUBTITLES:
          callPropFunction(props.onSubtitles);
          break;
        case AbstractKeyNames.FAVORITES:
          callPropFunction(props.onFavorites);
          break;
        case AbstractKeyNames.SEARCH:
          callPropFunction(props.onSearch);
          break;
        case AbstractKeyNames.VIEW:
          callPropFunction(props.onView);
          break;

        case undefined:
          break;
        case '':
          break;

        default:
          console.log('Key is not handled...');
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Subscribe to state changes
  useEffect(() => {
    const unsubscribe = props.store.subscribe(handleChange);
    return () => {
      unsubscribe();
    };
  }, []);

  return null;
};

/** JsDoc for component props */
KeyBinder.propTypes = {
  /**
   * This prop will be triggered when Left key is pressed.
   * @example onLeft={() => { console.log('Left key is pressed...'); }}
   * */
  onLeft: PropTypes.func,
  /**
   * This prop will be triggered when Right key is pressed.
   * @example onRight={() => { console.log('Right key is pressed...'); }}
   * */
  onRight: PropTypes.func,
  /**
   * This prop will be triggered when Up key is pressed.
   * @example onUp={() => { console.log('Up key is pressed...'); }}
   * */
  onUp: PropTypes.func,
  /**
   * This prop will be triggered when Down key is pressed.
   * @example onDown={() => { console.log('Down key is pressed...'); }}
   * */
  onDown: PropTypes.func,
  /**
   * This prop will be triggered when Fct1 key is pressed.
   * @example onFct1={() => { console.log('Fct1 key is pressed...'); }}
   * */
  onFct1: PropTypes.func,
  /**
   * This prop will be triggered when Fct2 key is pressed.
   * @example onFct2={() => { console.log('Fct2 key is pressed...'); }}
   * */
  onFct2: PropTypes.func,
  /**
   * This prop will be triggered when Fct3 key is pressed.
   * @example onFct3={() => { console.log('Fct3 key is pressed...'); }}
   * */
  onFct3: PropTypes.func,
  /**
   * This prop will be triggered when Fct4 key is pressed.
   * @example onFct4={() => { console.log('Fct4 key is pressed...'); }}
   * */
  onFct4: PropTypes.func,
  /**
   * This prop will be triggered when Play key is pressed.
   * @example onPlay={() => { console.log('Play key is pressed...'); }}
   * */
  onPlay: PropTypes.func,
  /**
   * This prop will be triggered when Pause key is pressed.
   * @example onPause={() => { console.log('Pause key is pressed...'); }}
   * */
  onPause: PropTypes.func,
  /**
   * This prop will be triggered when PlayPause key is pressed.
   * @example onPlayPause={() => { console.log('PlayPause key is pressed...'); }}
   * */
  onPlayPause: PropTypes.func,
  /**
   * This prop will be triggered when Stop key is pressed.
   * @example onStop={() => { console.log('Stop key is pressed...'); }}
   * */
  onStop: PropTypes.func,
  /**
   * This prop will be triggered when Forward key is pressed.
   * @example onForward={() => { console.log('Forward key is pressed...'); }}
   * */
  onForward: PropTypes.func,
  /**
   * This prop will be triggered when Rewind key is pressed.
   * @example onRewind={() => { console.log('Rewind key is pressed...'); }}
   * */
  onRewind: PropTypes.func,
  /**
   * This prop will be triggered when Prev key is pressed.
   * @example onPrev={() => { console.log('Prev key is pressed...'); }}
   * */
  onPrev: PropTypes.func,
  /**
   * This prop will be triggered when Next key is pressed.
   * @example onNext={() => { console.log('Next key is pressed...'); }}
   * */
  onNext: PropTypes.func,
  /**
   * This prop will be triggered when Num1 key is pressed.
   * @example onNum1={() => { console.log('Num1 key is pressed...'); }}
   * */
  onNum1: PropTypes.func,
  /**
   * This prop will be triggered when Num2 key is pressed.
   * @example onNum2={() => { console.log('Num2 key is pressed...'); }}
   * */
  onNum2: PropTypes.func,
  /**
   * This prop will be triggered when Num3 key is pressed.
   * @example onNum3={() => { console.log('Num3 key is pressed...'); }}
   * */
  onNum3: PropTypes.func,
  /**
   * This prop will be triggered when Num4 key is pressed.
   * @example onNum4={() => { console.log('Num4 key is pressed...'); }}
   * */
  onNum4: PropTypes.func,
  /**
   * This prop will be triggered when Num5 key is pressed.
   * @example onNum5={() => { console.log('Num5 key is pressed...'); }}
   * */
  onNum5: PropTypes.func,
  /**
   * This prop will be triggered when Num6 key is pressed.
   * @example onNum6={() => { console.log('Num6 key is pressed...'); }}
   * */
  onNum6: PropTypes.func,
  /**
   * This prop will be triggered when Num7 key is pressed.
   * @example onNum7={() => { console.log('Num7 key is pressed...'); }}
   * */
  onNum7: PropTypes.func,
  /**
   * This prop will be triggered when Num8 key is pressed.
   * @example onNum8={() => { console.log('Num8 key is pressed...'); }}
   * */
  onNum8: PropTypes.func,
  /**
   * This prop will be triggered when Num9 key is pressed.
   * @example onNum9={() => { console.log('Num9 key is pressed...'); }}
   * */
  onNum9: PropTypes.func,
  /**
   * This prop will be triggered when Num0 key is pressed.
   * @example onNum0={() => { console.log('Num0 key is pressed...'); }}
   * */
  onNum0: PropTypes.func,
  /**
   * This prop will be triggered when Mute key is pressed.
   * @example onMute={() => { console.log('Mute key is pressed...'); }}
   * */
  onMute: PropTypes.func,
  /**
   * This prop will be triggered when VolUp key is pressed.
   * @example onVolUp={() => { console.log('VolUp key is pressed...'); }}
   * */
  onVolUp: PropTypes.func,
  /**
   * This prop will be triggered when VolDown key is pressed.
   * @example onVolDown={() => { console.log('VolDown key is pressed...'); }}
   * */
  onVolDown: PropTypes.func,
  /**
   * This prop will be triggered when ProgUp key is pressed.
   * @example onProgUp={() => { console.log('ProgUp key is pressed...'); }}
   * */
  onProgUp: PropTypes.func,
  /**
   * This prop will be triggered when ProgDown key is pressed.
   * @example onProgDown={() => { console.log('ProgDown key is pressed...'); }}
   * */
  onProgDown: PropTypes.func,
  /**
   * This prop will be triggered when Info key is pressed.
   * @example onInfo={() => { console.log('Info key is pressed...'); }}
   * */
  onInfo: PropTypes.func,
  /**
   * This prop will be triggered when Home key is pressed.
   * @example onHome={() => { console.log('Home key is pressed...'); }}
   * */
  onHome: PropTypes.func,
  /**
   * This prop will be triggered when Settings key is pressed.
   * @example onSettings={() => { console.log('Settings key is pressed...'); }}
   * */
  onSettings: PropTypes.func,
  /**
   * This prop will be triggered when VideoSettings key is pressed.
   * @example onVideoSettings={() => { console.log('VideoSettings key is pressed...'); }}
   * */
  onVideoSettings: PropTypes.func,
  /**
   * This prop will be triggered when AudioSettings key is pressed.
   * @example onAudioSettings={() => { console.log('AudioSettings key is pressed...'); }}
   * */
  onAudioSettings: PropTypes.func,
  /**
   * This prop will be triggered when ModeChange key is pressed.
   * @example onModeChange={() => { console.log('ModeChange key is pressed...'); }}
   * */
  onModeChange: PropTypes.func,
  /**
   * This prop will be triggered when RecTimer key is pressed.
   * @example onRecTimer={() => { console.log('RecTimer key is pressed...'); }}
   * */
  onRecTimer: PropTypes.func,
  /**
   * This prop will be triggered when TvRad key is pressed.
   * @example onTvRad={() => { console.log('TvRad key is pressed...'); }}
   * */
  onTvRad: PropTypes.func,
  /**
   * This prop will be triggered when Pvr key is pressed.
   * @example onPvr={() => { console.log('Pvr key is pressed...'); }}
   * */
  onPvr: PropTypes.func,
  /**
   * This prop will be triggered when Rec key is pressed.
   * @example onRec={() => { console.log('Rec key is pressed...'); }}
   * */
  onRec: PropTypes.func,
  /**
   * This prop will be triggered when BackSpace key is pressed.
   * @example onBackSpace={() => { console.log('BackSpace key is pressed...'); }}
   * */
  onBackSpace: PropTypes.func,
  /**
   * This prop will be triggered when Back key is pressed.
   * @example onBack={() => { console.log('Back key is pressed...'); }}
   * */
  onBack: PropTypes.func,
  /**
   * This prop will be triggered when Ok key is pressed.
   * @example onOk={() => { console.log('Ok key is pressed...'); }}
   * */
  onOk: PropTypes.func,
  /**
   * This prop will be triggered when Special key is pressed.
   * @example onSpecial={() => { console.log('Special key is pressed...'); }}
   * */
  onSpecial: PropTypes.func,
  /**
   * This prop will be triggered when Menu key is pressed.
   * @example onMenu={() => { console.log('Menu key is pressed...'); }}
   * */
  onMenu: PropTypes.func,
  /**
   * This prop will be triggered when Power key is pressed.
   * @example onPower={() => { console.log('Power key is pressed...'); }}
   * */
  onPower: PropTypes.func,
  /**
   * This prop will be triggered when Guide key is pressed.
   * @example onGuide={() => { console.log('Guide key is pressed...'); }}
   * */
  onGuide: PropTypes.func,
  /**
   * This prop will be triggered when Exit key is pressed.
   * @example onExit={() => { console.log('Exit key is pressed...'); }}
   * */
  onExit: PropTypes.func,
  /**
   * This prop will be triggered when Del key is pressed.
   * @example onDel={() => { console.log('Del key is pressed...'); }}
   * */
  onDel: PropTypes.func,
  /**
   * This prop will be triggered when Option key is pressed.
   * @example onOption={() => { console.log('Option key is pressed...'); }}
   * */
  onOption: PropTypes.func,
  /**
   * This prop will be triggered when Pip key is pressed.
   * @example onPip={() => { console.log('Pip key is pressed...'); }}
   * */
  onPip: PropTypes.func,
  /**
   * This prop will be triggered when Vode key is pressed.
   * @example onVode={() => { console.log('Vode key is pressed...'); }}
   * */
  onVode: PropTypes.func,
  /**
   * This prop will be triggered when Help key is pressed.
   * @example onHelp={() => { console.log('Help key is pressed...'); }}
   * */
  onHelp: PropTypes.func,
  /**
   * This prop will be triggered when Audio key is pressed.
   * @example onAudio={() => { console.log('Audio key is pressed...'); }}
   * */
  onAudio: PropTypes.func,
  /**
   * This prop will be triggered when Subtitles key is pressed.
   * @example onSubtitles={() => { console.log('Subtitles key is pressed...'); }}
   * */
  onSubtitles: PropTypes.func,
  /**
   * This prop will be triggered when Favorites key is pressed.
   * @example onFavorites={() => { console.log('Favorites key is pressed...'); }}
   * */
  onFavorites: PropTypes.func,
  /**
   * This prop will be triggered when Search key is pressed.
   * @example onSearch={() => { console.log('Search key is pressed...'); }}
   * */
  onSearch: PropTypes.func,
  /**
   * This prop will be triggered when View key is pressed.
   * @example onView={() => { console.log('View key is pressed...'); }}
   * */
  onView: PropTypes.func,
  /**
   * Pass the keybinding store with this prop.
   * This prop is required to catch and bind keys.
   * */
  store: PropTypes.object,
  /**
   * This prop will be used to determine which child component is active or not active.
   * This prop is required.
   * */
  componentId: PropTypes.string,
  /**
   * Use this prop to catch key events globally or only for active component.
   * For example, power, volume up, volume down buttons should be global, but maybe arrow keys should be component specific.
   * If you want to catch and use keys globally, then set this prop to true or define property only (that means also true).
   * @default false
   * */
  global: PropTypes.bool,
};

/** Export component */
export { KeyBinder };
