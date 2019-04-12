# react-use-clock-hook

> React Hook for sharing clock logic

## Install

```bash
with npm
npm install react-use-clock-hook --save 
```

```bash
with yarn
yarn add react-use-clock-hook
```

## Usage

```jsx
import React from 'react';
import useClock from 'react-use-clock-hook';

const App = () => {
  const { time, raw } = useClock("HH:mm:ss");

  return (
    <div>
      <div><b>Computer time:</b> {time}</div>
      <div><b>Raw time:</b> {raw.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
    </div>
  );
}

export default App;
```

#### `useClock(<format: String>, <period: Number>)`
Param | Type | Default | Description
--- | --- | --- | ---
format | `String` | `"DD/MM/YYYY HH:mm:ss"` | Any string accepted by [`moment.format`](https://momentjs.com/docs/#/displaying/format/)
period | `Number` | `1000` | Time, in miliseconds, that the clock is updated

## Dependency

[moment](https://github.com/moment/moment)

## License

MIT © [alexanderkhivrych](https://github.com/alexanderkhivrych)