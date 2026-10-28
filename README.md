# Profile Page

A small single-screen profile app built with **React Native** and **Expo**, made as a practice project while learning mobile development.

![React Native](https://img.shields.io/badge/React_Native-0.86-61DAFB?logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-SDK_57-000020?logo=expo&logoColor=white)

## What it does

- Shows a profile card with an avatar, name and email
- Keeps a **points** counter in component state (`useState`)
- A floating **+** button adds a point each time it's tapped
- Uses safe-area handling so it looks right on notched phones

## What I practised

- Building a layout with `View`, `Text` and `StyleSheet`
- Using `@expo/vector-icons` (Material Icons)
- Managing simple state with React hooks
- `Pressable` with a pressed-state style for touch feedback

## Run it

```sh
npm install
npx expo start
```

Then scan the QR code with **Expo Go** (Android / iOS), or press `a` to open an Android emulator.

## Project structure

```
App.js        # the whole screen: layout, state and styles
index.js      # registers the root component
app.json      # Expo config (name, icons, splash)
assets/       # app icons and splash image
```
