# React Native Dimensions API Inconsistency on Android

This repository demonstrates a bug encountered when using the `Dimensions` API in React Native on Android devices. The `Dimensions.get('window')` method sometimes returns `undefined` or incorrect values, leading to layout problems in the application.

## Problem Description

The core issue is that the dimensions (width and height) obtained from `Dimensions.get('window')` are not always accurate, especially during the initial render or when the screen orientation changes. This inconsistency primarily affects Android devices.

## Solution

The solution involves using the `onLayout` prop to ensure the component has accurately measured dimensions before using them in calculations or styling.  This avoids accessing `Dimensions.get('window')` before layout is complete.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install`.
4. Run the app on an Android emulator or device using `npx react-native run-android`

## Related Issues

* [React Native issue tracker](https://github.com/facebook/react-native/issues) (Search for similar reports)