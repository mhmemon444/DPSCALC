import React from 'react';

import SpellIcon from './SpellIcon/SpellIcon';

import './SpellsPanel.css';

const spells = [
    { name: "Air Strike", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJBAMAAAAbVLtZAAAAD1BMVEX/AP///v68wsCBgX0AAAFgbPlEAAAAAXRSTlMAQObYZgAAADVJREFUeNpjYGBgcHFhAAEXY2MHBgYGFmMjJRMGBhZnIyUlZQcGZ2MlJSFlBzgfJg9XD9EPABcoB9L5ss1cAAAAAElFTkSuQmCC" },
    { name: "Water Strike", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJBAMAAADwYwBaAAAAElBMVEX///+qrPx6evkxMe4gCscAAAHtjfDhAAAAAXRSTlMAQObYZgAAAC1JREFUeNpjYGBgYA0NYABRIS6uEMrYJABMKSm7MoS4OCspKrnC+TB5uHqIfgBhoAn6vUKWXgAAAABJRU5ErkJggg==" },
    { name: "Earth Strike", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJBAMAAAAbVLtZAAAAElBMVEX/AP8wwTAEsQQFbAUFNQUAAAGa68D0AAAAAXRSTlMAQObYZgAAADVJREFUeNpjYGBgCA1lAIFQF5cABgYGVhdnY1cGBtYQZyMlkwCGEBcjJSGVADgfJg9XD9EPAGddChGqhAhTAAAAAElFTkSuQmCC" },
    { name: "Fire Strike", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJBAMAAAAbVLtZAAAAElBMVEX/AP/8twf4kQLtcQPOAwAAAAGe0MwHAAAAAXRSTlMAQObYZgAAADVJREFUeNpjYGBgCA1lAIFQF5cABgYGVhdnY1cGBtYQZyMlkwCGEBcjJSGVADgfJg9XD9EPAGddChGqhAhTAAAAAElFTkSuQmCC" },
    { name: "Wind Bolt", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUBAMAAACg6XohAAAAElBMVEX/AP/m5/a8wsCBgX1UVFQAAAF4B/9kAAAAAXRSTlMAQObYZgAAAFZJREFUeNptzrERgDAMA0A1HgA2wCM4sAEDiCPafxUOx9CAqz8VkiEReX3/hYnoK2HyhMmdOJvkhSg0dyUiZCMRB0QktrtwISQANteOTR8cBbx43oTxApBUF82heIZjAAAAAElFTkSuQmCC" },
    { name: "Water Bolt", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUBAMAAACg6XohAAAAFVBMVEX/AP+OjfN6evlLS/sxMe4gCscAAAE6CjcLAAAAAXRSTlMAQObYZgAAAFtJREFUeNptzrERgDAMA0BV7mEDGCEeIYEN6MVdov1H4HACDaj6U2ELEhFpxy9MRNsIUwqYPBG1SJ7WQPbeFHdFk7MsUMQOEYH9PrgQEgCbxx+bPjgH8OKZCeMFxSEdK/RHtrEAAAAASUVORK5CYII=" },
    { name: "Earth Bolt", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUBAMAAACg6XohAAAAElBMVEX/AP9l/VoEsQQtcC0CiwIAAAFTMD78AAAAAXRSTlMAQObYZgAAAFVJREFUeNptzrERgDAMA0A1HgA2wCuwgQm9uKD9V+FwDA24+lMhGRKR19dfmIi+ESZPmNyJs0leiEJzVyJCNhJxQERivwsXQgJgc+3Y9MFRwIvnTRgvzNgYgvbX3IQAAAAASUVORK5CYII=" },
    { name: "Fire Bolt", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAUBAMAAACg6XohAAAAFVBMVEX/AP/69gz8twftcQPlUTjOAwAAAAEY8ggZAAAAAXRSTlMAQObYZgAAAFtJREFUeNptzrERgDAMA0BV7mEDGCEeIYEN6MVdov1H4HACDaj6U2ELEhFpxy9MRNsIUwqYPBG1SJ7WQPbeFHdFk7MsUMQOEYH9PrgQEgCbxx+bPjgH8OKZCeMFxSEdK/RHtrEAAAAASUVORK5CYII=" },
    { name: "Wind Blast", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEX/AP+8wsAAAAGnjRmeAAAAAXRSTlMAQObYZgAAAEFJREFUeNpjYOBawMCgtTJrBYPq0qgIBtWVWREMWpmZKxi0ZqatYFi2NGoWw9TQ0DAIAeaCJcBKwIrB2sAGgIwCAAO+GckZDsqBAAAAAElFTkSuQmCC" },
    { name: "Water Blast", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEX/AP9LS/sAAAE0xp18AAAAAXRSTlMAQObYZgAAAEFJREFUeNpjYOBawMCgtTJrBYPq0qgIBtWVWREMWpmZKxi0ZqatYFi2NGoWw9TQ0DAIAeaCJcBKwIrB2sAGgIwCAAO+GckZDsqBAAAAAElFTkSuQmCC" },
    { name: "Earth Blast", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEVRSUFQSD5QR0BQRj1LQjpJQDVJPjhIPjVFPDMEsQQAAAHC/kWFAAAACXRSTlMAAAAAAAAAAABzZJuhAAAAY0lEQVR42kWNywmAMBBE55w6LMEKJKDkHhBLsBHFDnZPEQK6U6UkQZ3Tg/nBjzvZTRsCaUreCEIRSgXTAgvV1HjhoJkqM6glY4RJlf7wWe4Nu1ZPcG0wvRcn1naaEeNM9n54ANbuSZdcsykwAAAAAElFTkSuQmCC" },
    { name: "Fire Blast", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEX/AP/OAwAAAAFDX5o5AAAAAXRSTlMAQObYZgAAAEFJREFUeNpjYOBawMCgtTJrBYPq0qgIBtWVWREMWpmZKxi0ZqatYFi2NGoWw9TQ0DAIAeaCJcBKwIrB2sAGgIwCAAO+GckZDsqBAAAAAElFTkSuQmCC" },
    { name: "Wind Wave", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEX/AP///v68wsCBgX0UES/0TNw3AAAAAXRSTlMAQObYZgAAAFRJREFUeAEFwUENwDAMBDA/QmDSEFRjkAKI2uOPaTYqASrdAenuHtTtnR5UdwSqNyA9Erh7aq3B3c764G7nG6ie84HqOVMJotTzDFBPAPUC1Atg+AF1ww4E2nHQ3gAAAABJRU5ErkJggg==" },
    { name: "Water Wave", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEX/AP+qrPx6evkxMe4UES8ifkeJAAAAAXRSTlMAQObYZgAAAFRJREFUeAEFwUENwDAMBDA/QmDSEFRjkAKI2uOPaTYqASrdAenuHtTtnR5UdwSqNyA9Erh7aq3B3c764G7nG6ie84HqOVMJotTzDFBPAPUC1Atg+AF1ww4E2nHQ3gAAAABJRU5ErkJggg==" },
    { name: "Earth Wave", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEX/AP9l/VoEsQQFbAUUES9ZKuhdAAAAAXRSTlMAQObYZgAAAFRJREFUeAEFwUENwDAMBDA/QmDSEFRjkAKI2uOPaTYqASrdAenuHtTtnR5UdwSqNyA9Erh7aq3B3c764G7nG6ie84HqOVMJotTzDFBPAPUC1Atg+AF1ww4E2nHQ3gAAAABJRU5ErkJggg==" },
    { name: "Fire Wave", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEX/AP/8+mL6WRXOAwAUES9ieMjgAAAAAXRSTlMAQObYZgAAAFRJREFUeAEFwUENwDAMBDA/QmDSEFRjkAKI2uOPaTYqASrdAenuHtTtnR5UdwSqNyA9Erh7aq3B3c764G7nG6ie84HqOVMJotTzDFBPAPUC1Atg+AF1ww4E2nHQ3gAAAABJRU5ErkJggg==" },
    { name: "Wind Surge", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEUAAAD+/v7AwMB/gH8VEi7//1L4AAAAAXRSTlMAQObYZgAAAGNJREFUeNpFzrENxEAIBdEJaADLDfjjCoACkHb7r+mCtXTZ00QDMABggx1aj/WJq1fto6g4tIyMGhhLlaLBVkmpBqtISTGwMuWuAct43K8BK31i/ZWP+w1gJfcXgJ16v7O9B35CFhAv9xk3TQAAAABJRU5ErkJggg==" },
    { name: "Water Surge", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEUAAACkpvt6evgzM+8VEi6eqiWeAAAAAXRSTlMAQObYZgAAAGNJREFUeNpFzrENxEAIBdEJaADLDfjjCoACkHb7r+mCtXTZ00QDMABggx1aj/WJq1fto6g4tIyMGhhLlaLBVkmpBqtISTGwMuWuAct43K8BK31i/ZWP+w1gJfcXgJ16v7O9B35CFhAv9xk3TQAAAABJRU5ErkJggg==" },
    { name: "Earth Surge", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEUAAABe/E4ErwQEbwQVEi7yfgVCAAAAAXRSTlMAQObYZgAAAGNJREFUeNpFzrENxEAIBdEJaADLDfjjCoACkHb7r+mCtXTZ00QDMABggx1aj/WJq1fto6g4tIyMGhhLlaLBVkmpBqtISTGwMuWuAct43K8BK31i/ZWP+w1gJfcXgJ16v7O9B35CFhAv9xk3TQAAAABJRU5ErkJggg==" },
    { name: "Fire Surge", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAD1BMVEUAAAD6+GD/XxnOAwAVEi7m0U4OAAAAAXRSTlMAQObYZgAAAGNJREFUeNpFzrENxEAIBdEJaADLDfjjCoACkHb7r+mCtXTZ00QDMABggx1aj/WJq1fto6g4tIyMGhhLlaLBVkmpBqtISTGwMuWuAct43K8BK31i/ZWP+w1gJfcXgJ16v7O9B35CFhAv9xk3TQAAAABJRU5ErkJggg==" }
    // { name: "", rsrc: "" }
]

const ancients = [
    { name: "Smoke Rush", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAHBAMAAAD3+wBMAAAAElBMVEX/AP/AwMCAgIBUVFQVEi8AAAE5cXoVAAAAAXRSTlMAQObYZgAAAC1JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUkMoQ6uFwD/zgdQsXheaAAAAABJRU5ErkJggg==" },
    { name: "Shadow Rush", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAHBAMAAAD3+wBMAAAAD1BMVEX/AP/AwMCAgIBAQEAAAAHhwS2JAAAAAXRSTlMAQObYZgAAAC1JREFUeNpjYGBxYYACZ2MXBzCDxcXZ2MSFxcGBwcXFxdnYyElFBEkMoQ6uFwAZHAfn5A29qgAAAABJRU5ErkJggg==" },
    { name: "Blood Rush", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAHBAMAAAD3+wBMAAAAElBMVEVvbWf1BAKHAQFdAQE3AQEAAAFup4x0AAAAAXRSTlMAQObYZgAAAC1JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUkMoQ6uFwD/zgdQsXheaAAAAABJRU5ErkJggg==" },
    { name: "Ice Rush", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAHBAMAAAD3+wBMAAAAElBMVEVvbWf//v6jpft8f/ZLS/sAAAFlq8ivAAAAAXRSTlMAQObYZgAAAC1JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUkMoQ6uFwD/zgdQsXheaAAAAABJRU5ErkJggg==" },
    { name: "Smoke Burst", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPBAMAAAAbqIIhAAAAElBMVEVvbWfAwMCAgIBUVFQVEi8AAAERK3i1AAAAAXRSTlMAQObYZgAAAC5JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUmMdurgbgEAWGESVALL738AAAAASUVORK5CYII=" },
    { name: "Shadow Burst", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPBAMAAAAbqIIhAAAAD1BMVEVvbWfAwMCAgIBAQEAAAAGebe2vAAAAAXRSTlMAQObYZgAAAC5JREFUeNpjYGBxYYACZ2MXBzCDxcXZ2MSFxcGBwcXFxdnYyElFBEmMdurgbgEAEwMUn6oTPt4AAAAASUVORK5CYII=" },
    { name: "Blood Burst", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPBAMAAAAbqIIhAAAAElBMVEVvbWf1BAKHAQFdAQE3AQEAAAFup4x0AAAAAXRSTlMAQObYZgAAAC5JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUmMdurgbgEAWGESVALL738AAAAASUVORK5CYII=" },
    { name: "Ice Burst", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPBAMAAAAbqIIhAAAAElBMVEVvbWf//v6jpft8f/ZLS/sAAAFlq8ivAAAAAXRSTlMAQObYZgAAAC5JREFUeNpjYGANZYCCIKXQADCDVVBISTWUNSCAIVBQUEhJOdjUFUmMdurgbgEAWGESVALL738AAAAASUVORK5CYII=" },
    { name: "Smoke Blitz", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAElBMVEVvbWfAwMCAgIBUVFQVEi8AAAERK3i1AAAAAXRSTlMAQObYZgAAADhJREFUeNpjYGBlYGBgCAlgYICwggNgBIIbBCNYlVRhhKIqA0OQolIAQ5CgEJRgFRRlYGAIhOoFAFZzCAS/tSPUAAAAAElFTkSuQmCC" },
    { name: "Shadow Blitz", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAD1BMVEVvbWfAwMCAgIBAQEAAAAGebe2vAAAAAXRSTlMAQObYZgAAADRJREFUeNpFy7ENACAMA8EvshEeIBDvPxMFiWhO78IQADvh1cnhzxpiaZCgtJJyNWED7u8FQc4Ibg5SmpoAAAAASUVORK5CYII=" },
    { name: "Blood Blitz", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASBAMAAABlZ9nIAAAAElBMVEVvbWf1BAKHAQFdAQE3AQEAAAFup4x0AAAAAXRSTlMAQObYZgAAADhJREFUeNpjYGBlYGBgCAlgYICwggNgBIIbBCNYlVRhhKIqA0OQolIAQ5CgEJRgFRRlYGAIhOoFAFZzCAS/tSPUAAAAAElFTkSuQmCC" },
    { name: "Ice Blitz", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAASCAMAAACglzTJAAADAFBMVEUAAAAAAAFLS/t8f/ajpfv//v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRDGmiAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAADZJREFUCNdlzLERwAAMwkArgf1HVlr7Uv2JglFRR3nQWf1y/O05koRjg0PShCFtl9IWR+n6/wDxITx0NXIU/AAAAABJRU5ErkJggg==" },
    { name: "Smoke Barrage", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATBAMAAACAfiv/AAAAElBMVEVvbWfAwMCAgIBUVFQVEi8AAAERK3i1AAAAAXRSTlMAQObYZgAAAGJJREFUeNpFj9EJwDAIRO/HAQxkAIXsY7Tdf5WiJlTkfJz3oQAhqzQsZ1jjY410u9w4rtf0g1QK0oWw1EI/KIWyABd9dbmowXkk8miURuKZGZ4AtqW1+4bEPjUzuFVb/C/gA8c1FrjGpR14AAAAAElFTkSuQmCC" },
    { name: "Shadow Barrage", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATBAMAAACAfiv/AAAAD1BMVEVvbWfAwMCAgIBAQEAAAAGebe2vAAAAAXRSTlMAQObYZgAAAFpJREFUeNpFj9ENwEAIQvlwIxnAHuw/U6NeU2PwBflQINA1eqrnqcWnFuPrcc91NVMXYxSRxKnWQV3kIAmI6aSYBVmN1iIXw+6MDcDVlveGxj21M/hqtvhfwAuWpBg+6jTAFwAAAABJRU5ErkJggg==" },
    { name: "Blood Barrage", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAElBMVEX/AP/1BAKHAQFdAQE3AQEAAAFG/Y7UAAAAAXRSTlMAQObYZgAAAF9JREFUeNplkEEOwCAQAoGW/3+5cYPrNnrQcQpRCwDGGWE/7l04q18Pl7zv7pwBazhNlzPC0oLKhdvp5zhcWJRcifD6RLYrPo7HwSR3q7guw04X7zee1vxvu4WfvNRsfeHRAnKaRBJCAAAAAElFTkSuQmCC" },
    { name: "Ice Barrage", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAElBMVEX/AP///v6jpft8f/ZLS/sAAAFN8coPAAAAAXRSTlMAQObYZgAAAF9JREFUeNplkEEOwCAQAoGW/3+5cYPrNnrQcQpRCwDGGWE/7l04q18Pl7zv7pwBazhNlzPC0oLKhdvp5zhcWJRcifD6RLYrPo7HwSR3q7guw04X7zee1vxvu4WfvNRsfeHRAnKaRBJCAAAAAElFTkSuQmCC" }
]

const godspells = [
    { staff: ["Saradomin staff", "Staff of light"], name: "Saradomin Strike", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADw5/WeAAAACVBMVEUAAAAAlP8AAAEO5153AAAAAXRSTlMAQObYZgAAAF1JREFUeNoFwbENgzAQAMDTd7BJ2AcLuUqJMgVLBEWp0tiyf8rcWS94XNAycbeCVju27DbWml3M811EyW8Vr1mG2Pd5icw5oB3Y7g9aPYh7nkRdkjiXQjzXSvxi/AERaR192Z2LIwAAAABJRU5ErkJggg==" },
    { staff: ["Guthix staff", "Void knight mace", "Staff of balance"], name: "Claws of Guthix", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARAgMAAACtNBRqAAAACVBMVEUAAAAAAAE1/0mFW62YAAAAAXRSTlMAQObYZgAAAEZJREFUeF5jYGAQDQESDFlLgQTj1CwHIOkgNYGBgYGBDUiyhoJIqZWOAQwMqVEg4QC2JUCSgXEJSBJIAiUdQjAkESQDUBIAMo8PqbZUMsUAAAAASUVORK5CYII=" },
    { staff: ["Zamorak staff", "Staff of the dead", "Toxic staff of the dead"], name: "Flames of Zamorak", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATAgMAAADt4sUmAAAACVBMVEUAAAD0BQIAAAEYjsWiAAAAAXRSTlMAQObYZgAAAF5JREFUeNodjbENhDAQwKx0yR6MdC+RihamOP0OiYAqTRB3U77uXbi0gaJAsr/lOyAdvkGqLdzvQfHnhFylvliTvXJN2TvNZHV8SlNYpill2qHkTwSyRyDrPeLRCRx+AeAgfk0B4bUAAAAASUVORK5CYII=" }
]

const extraspells = [
    { staff: "all", name: "Crumble Undead", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAMAAABh7EcdAAAAAXNSR0IArs4c6QAAAwBQTFRF/wD/AAABFRcJqQbtgYF9vMLA5uf2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1KSsGgAAAAF0Uk5TAEDm2GYAAABZSURBVBjTdY5RDsAgCEMpKPc/8loNE5Pt+cOLbcBMALAD4scYo1UYEbSob04RLdulb0CxbZLMXI4yuWEMd6o7leZE5h9GdlE9we7M2rnS8z1A6XGM7z5OwwPJTwG2pKChzwAAAABJRU5ErkJggg==" },
    { staff: ["Slayer's staff", "Slayer's staff (e)", "Staff of the dead", "Toxic staff of the dead", "Staff of light", "Staff of balance"], name: "Magic Dart", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAARVBMVEX/AP8AAAFpzZ1y1aVdwZFixpdmypkskmJv0qJ53Kt22alSt4cMc0NXvIwUe0sfhVUDazs1mmts0J86oHBBpnZNsYFGq3tqYShGAAAAAXRSTlMAQObYZgAAAFhJREFUeF51zMkKwEAMAtAxmb37+v+fWtJDkUC9+RADBW+4am+tfYIkuxrxBjAC34hU7SSIKaMqPQ9TBIQn14CATJPztkKwHQgclOJggYPZOsPoYf0BiocHP2MBylwkQqoAAAAASUVORK5CYII=" },
    { staff: ["Iban's staff"], name: "Iban Blast", rsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAMAAAAI/bVFAAAAAXNSR0IArs4c6QAAAAlQTFRF/wD///7+FBEvzkSeOgAAAAF0Uk5TAEDm2GYAAAA1SURBVHjadY4xDgAgCMR6/f+jHTAqRpnaNAQAAGWPyekm6fqOaqZNLF1YsbVr73XQb7r/LB43mwCIZoMd5QAAAABJRU5ErkJggg==" }
]

const regularSpellbook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVEhLlZRNaBNBFIDfRiuWuJJWU7Zp0qghFSNG40WMiKCIgjfxbqQXoeJBRJAeRCEQxIP/CvXQ3kTsQYvHih4UihcbbcCGGOs2abA1DQ0laDFr3tuddbLZ7K4fDO/N7jDfvtmZERRFAScIgksfqCh1QUsd4dKiJSh49fQRnD+2B+KxAeqzpg2xxLYSJpgYeQjp8i+AlWUI7xvQ3gKMjb+jaFWdpcRO4NqwBeq/f1LOZDxM3FbCBJ+n3sKH6QwU5xZ0QUisQK7qoZwn+3EWTh7ugU39cepfujFCIlMJL8inZyC/WIBD+3v1ifkKjEIURbdJlD+e/AR+f19rJVYCn9cNB/pWtZEAUwW3lql4Orspvng5SfF9bpEkTbuLF1RqZfoPUnhXi6BUWqUWXPeD+ggKOkSRGi4rEyC6xCjIzpYgvMNL75iATc6QJDdNzlc3PZOBwcGzWg9AlmWBJGYCd5dIgw5K6gTpXIUigpNj+1IOwM5umSJWwASS2KGNVGlsMaFJsJxdgJpnM73ECnj4L8aJEZwc4QXZ/BxMjI3Tj6fdhRI8yQwURPrVL1urVrWn5mAVX9ciLQJxqw/u3roPz1+n//34ro3rqS0p6qHNfJebBDgZA3P2g50IEKrk6qkYZGt/4FziNIS3B+lF8vYTint3Ryia4USAP54kJ6Lq/h5OpaC6VKTcKOusrFDkSX8rwejoTUsBRpJgEg95wRfshYuXL2C3RZZIXIEjx2P6ecDlxEM3fG3IUoDQicctrPXhzNEobV9cBoSX8SK8DbCS1L2kpQDRr5VAIKDMzxcoRxFiJktef0ARcSJAWu4upzK7JeIxvYURO9mbZ3egKLv0m7adAGkrYfAyPLS+QJ1yXoBYSRrHXnHU/H5/42vwdogq8VAPNezjc+NYY7OtxAi/Ex1V0eC/JQguoZbaCgAA/gILEQrdq06o7QAAAABJRU5ErkJggg==";
const ancientSpellbook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXBAMAAADjD5IeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURf///9nEoNC8a8Cym7eigqWUT5KFUXZoR2VLjl5XPVk7hkcxaj84Mi8jRwAAAb1n06kAAAABdFJOUwBA5thmAAAA1ElEQVR42k2QMQrCQBRE/wkCgZS2tkJIJSnNCSysxF4QOwtBrANpbUSxNWywSqHskDQpLPQECQuLjQRlzyDranS64f2BP0OkpSQ1stpT1ZjbYAPVgDEAZW41AI79jgEZAMxGBmSiBN8vTSI7iIRF0iSEOJRxKg0oq4pFrnwDLkoep86S6i1nLAGP3N6O6gkYY/EpdbqS6pWNMAwjt5cTPYvAxnq9dXxJpC5eYJ/7Qw3IUvCC1mzhv9+0HvCCa5F/Gmjnf7tqlzTFrTvL/0aY737mM88LH+5uFD1qQOwAAAAASUVORK5CYII=";

class SpellsPanel extends React.Component {
    state = {
        
    }

    // spellbookSwapHandler = () => {
    //     this.setState({
    //         spellbook: (this.state.spellbook == "regular") ? "ancients" : "regular"
    //     })
    // }

    render() {
        var regularSpells = spells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} select={this.props.selectSpell} />
        })
        var godSpells = godspells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} staff={p.staff} equippedStaff={this.props.weapon} special={true} select={this.props.selectSpell} />
        })
        var extraSpells = extraspells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} staff={p.staff} equippedStaff={this.props.weapon} special={p.name != "Crumble Undead" ? true : false} select={this.props.selectSpell} />
        })
        var ancientMagicks = ancients.map( p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} select={this.props.selectSpell} />
        })

        var showSpellbook = null;
        var showBookIcon = null;
        if (this.props.spellbook == "regular") {
            showSpellbook = (
                <>
                {regularSpells}
                {godSpells}
                {extraSpells}
                </>
            )
            showBookIcon = ancientSpellbook 
        } else {
            showSpellbook = (
                <>
                {ancientMagicks}
                </>
            )
            showBookIcon = regularSpellbook
        }
        return (
            <div className="totalspells-panel">
                <div className="spellspanel">
                    {showSpellbook}
                </div>
                <div className="swapspellbook-icon" onClick={this.props.swapSpellbook}>
                    <img style={{cursor: "pointer"}} src={showBookIcon}/>
                    
                </div>
                <span className="spellbooktext">Swap to {this.props.spellbook == "regular" ? "Ancient Magicks" : "Regular Spellbook"}</span>
            </div>
        )
    }
}

export default SpellsPanel;