/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Feb 2026
 * This program tells you the temperature in kelvin using the microbit
*/

basic.clearScreen();
basic.showIcon(IconNames.Happy)

let temperature: number

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    temperature = (temperature + 273.15)

    basic.clearScreen();
    basic.showString('The temperature is: ' + temperature.toString() + ' K')
})

basic.clearScreen();
