bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Giraffe)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        n1 += 1
        basic.showNumber(n1)
        basic.pause(1000)
        basic.clearScreen()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        n1 += -1
        basic.showNumber(n1)
        basic.pause(1000)
        basic.clearScreen()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        n2 += 1
        basic.showNumber(n2)
        basic.pause(1000)
        basic.clearScreen()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        n2 += -1
        basic.showNumber(n2)
        basic.pause(1000)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        ans = n1 + n2
        basic.showString("" + n1 + "+" + n2 + "=" + ans)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        ans = n1 - n2
        basic.showString("" + n1 + "-" + n2 + "=" + ans)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        ans = n1 * n2
        basic.showString("" + n1 + "*" + n2 + "=" + ans)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        ans = n1 / n2
        basic.showString("" + n1 + "/" + n2 + "=" + ans)
    }
})
let ans = 0
let n2 = 0
let n1 = 0
n1 = 0
n2 = 0
