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

class SpellsPanel extends React.Component {
    render() {
        var regularSpells = spells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} select={this.props.selectSpell}/>
        })
        var godSpells = godspells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} staff={p.staff} equippedStaff={this.props.weapon} special={true} select={this.props.selectSpell}/>
        })
        var extraSpells = extraspells.map(p => {
            return <SpellIcon name={p.name} rsrc={p.rsrc} staff={p.staff} equippedStaff={this.props.weapon} special={p.name != "Crumble Undead" ? true : false} select={this.props.selectSpell}/>
        })
        return (
            <div className="spellspanel">
                {regularSpells}
                {godSpells}
                {extraSpells}
            </div>
        )
    }
}

export default SpellsPanel;