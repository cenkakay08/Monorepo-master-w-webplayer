/**
 * @format
 */

import 'react-native';
import React from 'react';

import {App} from 'components/src/App';

jest.mock("react-native-video", () => "Video");

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
