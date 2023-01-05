import App from './App.js'

const app = new App({
  stage: {
    w: 1920,
    h: 1080,
    precision: 1,
    memoryUnitInBytes: true,
    memoryPressure: 180 * 1024 * 1024, // 180 mb
    memoryThreshold: 10 * 1024 * 1024, // 10mb
    clearColor: 0x00000000,
    useImageWorker: false,
    autostart: true,
  },
  debug: true,
  keys: {},
  enablePointer: true,
})
document.body.appendChild(app.stage.getCanvas())
