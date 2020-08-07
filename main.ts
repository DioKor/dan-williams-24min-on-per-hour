led.enable(false)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)
pins.digitalWritePin(DigitalPin.P4, 0)
pins.digitalWritePin(DigitalPin.P5, 0)
pins.digitalWritePin(DigitalPin.P6, 0)
pins.digitalWritePin(DigitalPin.P7, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
pins.digitalWritePin(DigitalPin.P10, 0)
pins.digitalWritePin(DigitalPin.P11, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P19, 0)
pins.digitalWritePin(DigitalPin.P20, 0)
basic.forever(function () {
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P6, 1)
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
    }
    pins.digitalWritePin(DigitalPin.P6, 0)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
    }
    pins.digitalWritePin(DigitalPin.P3, 0)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
    }
})
