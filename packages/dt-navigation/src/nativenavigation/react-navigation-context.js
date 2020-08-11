import * as React from 'react';

export const navigationRef = React.createRef();
/**
 * Navigate current screem with given @param {Routes} to and pass @param {JSON} params
 */
export function navigate(to, params) {
  navigationRef.current?.navigate(to, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}
/**
 * Replace current screen with @param {Routes} to
 */
export function replace(to) {
  navigationRef.current?.replace(to);
}
