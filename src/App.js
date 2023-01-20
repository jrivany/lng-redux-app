import Lightning from '@lightningjs/core'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
  },
})

const appStore = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
})

export default class App extends Lightning.Application {
  static _template() {
    return {
      AppBackground: {
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xff000000,
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: this.bindProp('count', props => `Count: ${props.count.value}`),
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    }
  }

  _init() {
    appStore.subscribe(() => this.patch(appStore.getState()))
  }
}
