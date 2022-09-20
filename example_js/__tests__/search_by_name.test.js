const { describe, expect, test } = require('@jest/globals');
const { search_by_name } = require('../search/by_name');

const uc_data = [
    { name: "STM32F3", vendor: "ST" },
    { name: "STM32F4", vendor: "ST" },
    { name: "STM32F7", vendor: "ST" },
    { name: "STM32H7", vendor: "ST" },
    { name: "ESP32S2", vendor: "Espressif" },
    { name: "ESP32C3", vendor: "Espressif" },
    { name: "ESP32H2", vendor: "Espressif" },
    { name: "ATSAMD21", vendor: "Microchip" },
    { name: "ATSAMD51", vendor: "Microchip" },
    { name: "ATSAME51", vendor: "Microchip" },
]

describe('search by name pattern', () => {
    test('search for uCs with "ST" in their names', () => {
        expect(search_by_name(uc_data, "ST")).toEqual([
            { name: "STM32F3", vendor: "ST" },
            { name: "STM32F4", vendor: "ST" },
            { name: "STM32F7", vendor: "ST" },
            { name: "STM32H7", vendor: "ST" },
        ])
    })
    test('search for uCs with "32" in their names', () => {
        expect(search_by_name(uc_data, "32")).toEqual([
            { name: "STM32F3", vendor: "ST" },
            { name: "STM32F4", vendor: "ST" },
            { name: "STM32F7", vendor: "ST" },
            { name: "STM32H7", vendor: "ST" },
            { name: "ESP32S2", vendor: "Espressif" },
            { name: "ESP32C3", vendor: "Espressif" },
            { name: "ESP32H2", vendor: "Espressif" },
        ])
    })
    test('search for uCs names that match the regex "[A-Z]32[A-Z][0-9]"', () => {
        expect(search_by_name(uc_data, "[A-Z]32[A-Z][0-9]")).toEqual([
            { name: "STM32F3", vendor: "ST" },
            { name: "STM32F4", vendor: "ST" },
            { name: "STM32F7", vendor: "ST" },
            { name: "STM32H7", vendor: "ST" },
            { name: "ESP32S2", vendor: "Espressif" },
            { name: "ESP32C3", vendor: "Espressif" },
            { name: "ESP32H2", vendor: "Espressif" },
        ])
    })
    test('search for non-existent uC, get []', () => {
        expect(search_by_name(uc_data, "LpAz")).toEqual([])
    })
})

