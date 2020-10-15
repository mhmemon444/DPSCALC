import React from 'react';

import './AttackStyle.css';

const bookIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVEhLlZRNaBNBFIDfRiuWuJJWU7Zp0qghFSNG40WMiKCIgjfxbqQXoeJBRJAeRCEQxIP/CvXQ3kTsQYvHih4UihcbbcCGGOs2abA1DQ0laDFr3tuddbLZ7K4fDO/N7jDfvtmZERRFAScIgksfqCh1QUsd4dKiJSh49fQRnD+2B+KxAeqzpg2xxLYSJpgYeQjp8i+AlWUI7xvQ3gKMjb+jaFWdpcRO4NqwBeq/f1LOZDxM3FbCBJ+n3sKH6QwU5xZ0QUisQK7qoZwn+3EWTh7ugU39cepfujFCIlMJL8inZyC/WIBD+3v1ifkKjEIURbdJlD+e/AR+f19rJVYCn9cNB/pWtZEAUwW3lql4Orspvng5SfF9bpEkTbuLF1RqZfoPUnhXi6BUWqUWXPeD+ggKOkSRGi4rEyC6xCjIzpYgvMNL75iATc6QJDdNzlc3PZOBwcGzWg9AlmWBJGYCd5dIgw5K6gTpXIUigpNj+1IOwM5umSJWwASS2KGNVGlsMaFJsJxdgJpnM73ECnj4L8aJEZwc4QXZ/BxMjI3Tj6fdhRI8yQwURPrVL1urVrWn5mAVX9ciLQJxqw/u3roPz1+n//34ro3rqS0p6qHNfJebBDgZA3P2g50IEKrk6qkYZGt/4FziNIS3B+lF8vYTint3Ryia4USAP54kJ6Lq/h5OpaC6VKTcKOusrFDkSX8rwejoTUsBRpJgEg95wRfshYuXL2C3RZZIXIEjx2P6ecDlxEM3fG3IUoDQicctrPXhzNEobV9cBoSX8SK8DbCS1L2kpQDRr5VAIKDMzxcoRxFiJktef0ARcSJAWu4upzK7JeIxvYURO9mbZ3egKLv0m7adAGkrYfAyPLS+QJ1yXoBYSRrHXnHU/H5/42vwdogq8VAPNezjc+NYY7OtxAi/Ex1V0eC/JQguoZbaCgAA/gILEQrdq06o7QAAAABJRU5ErkJggg==";
const shieldIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAAAAXNSR0IB2cksfwAAAAlwSFlzAAASdAAAEnQB3mYfeAAABLJJREFUeJyVlQ9M1GUYxw9CDg+4O+4P9/8vcneI/DsP4giP30nUTCR0IkGzZdPQZstIZ5vLHZobFaSpaWQJWRbLWbOBOZ1pg1UuZjVkSdZA0eI8uOPPIZ7gfXt/r3o/bLbWu313d899n889v/d93ud4PB6PiYqK8ths1k1XLl+U8f7Hio/jPUtePCyD/ewRyJZBKHWFRInSc8vLc5nNm9aZ2tu+iP43QHUlY0mbIz8jURYG+CIX7sJ4HqmtCRLbQUisrdCaHwXDlPSXlRY919K8V1dXVzf78OFP4u4ysuWKjGaZxn1NnLIfYvNbSFA+NQNk3Q9FxhFoHd/BUOiFNO0g5Co78nIzT5YsdCy3mE3lrC8mztInTn0PSnsnJKlvgy0gXlHFgdT209A5e2Fw+WAsGoO5OARD0RAS9E3g85VEcohS2qArHIDG0QlVzikCegdS67sQ6Wo5kNZ5AUYmCMMCP5GPSu0cQX6FHx8c+hZHj52B/clRqPLHKEiZfQLJ5AmkFgLSzwAZmWGY3GMRCCtFbgBVa7vQ88s3+PNKJ56ovgClIwhdwR8E9DXU9rOQzz1EKnqZA5ndowQ0cj/IPow1tf3w+wcxGexHafXvZG9GoS+4QkEqFpT+KQFt+A9Qtg8bPSMAponCqKwJQJHF7uE4tHnn6OOxMJF+RkV6F4Ew/3i0rOvYsGUY4fAtCquqGSInex0m5ga0ud9DmdVOQJ1I1M6oqHj5EWKYIBs8RCGaAh+S5nrR+P4YAbEV3cZrDaMQ27zQue6A5BntkGV2wGCr4EA7G17Ftjd7MSvxGuJEV8nrAJY+48f4RBj3VvBGGKtfCiBWOAx+4gnECI5i8YrjWLSohANt3/46vH9dwmToNkIhYDwYxtT0HUA4HKZi162pMCYIcPLmFC73/4quH0+hdEkZB3q6pgMtn/Xi5qQf3ApHIByMq/DG+ABavxzAkooDHCjJ1gFVXgDusgBe3DyIru6buDo4HQHeA7Cx8z0h6nGX+2hOon4fB1KRK6InXa12+pE47zr5chDLVgcwMno7UgH7no2JzF7q0RSM0hypZffMu3YW2vyL5OSCMLr80JJTE6d64WkcIXs1TbWq1k9jukd81MOeMpsjtezhQMnprVCSi6jN64bW+dvdhhzCK1vZhrxFVboyQGNG1xD1qB0/0JwkUx0HkqS8QRqwjXTrSdqx6vmdkKf9TEDDkT1astJLY2oyaliPMus4zRFqXuBAs2WLyVDbi+T0z6HIPEZ+6TQkc9qxdn0bJsjpsCouPUpjKvsZ6pGlHaQ5fPGCCIjhz86G0LANMtuHkKbuJrf6IzJvvkLlqhPo6T5Plf/4cRqTp39MPTLrAZoTG5fRd29m8xYyD5dEPyTvmyV8jAywepKwi5j2wFG4BS0tTVSGuVtpjB1orCcm3glBvBLzc6xL7xvoQqEw12Qy/xQnXYekOTtJCzQgw7EGG2ufp9KnracxsXkHWA+fn7DDaNSWlJUuEN8Hqq+vn7WrcUt25jxTg1yh7xPJ8iDTrIC7uJwqQVaNWEEOjCbTpTSrxtO0b3vsA/9iZq5UcxLjyDE1CxIsEEuMVNHReggFsc1ud2H+g3L+BtI2VzACunvfAAAAAElFTkSuQmCC"
class AttackStyle extends React.Component {

    render() {
        var spellicon = bookIcon; //default - if no spell selected, display book icon
        if (this.props.currentSpell != null) { //if currently a spell is selected, display spell icon
            spellicon = this.props.currentSpell.rsrc
        }

        var spellImgClass = null;
        if (this.props.name=="Spell" && this.props.currentSpell != null) {
            if ( (this.props.currentSpell.name.includes(" Strike") && this.props.currentSpell.name!="Saradomin Strike") ) {
                spellImgClass = "chosenSpell-strike"
            } else if (this.props.currentSpell.name=="Crumble Undead") {
                spellImgClass = "chosenSpell-CU"
            } else if (this.props.currentSpell.name.includes(" Bolt")) {
                spellImgClass = "chosenSpell-bolt"
            } else if ((this.props.currentSpell.name.includes(" Rush"))) {
                spellImgClass = "chosenSpell-rush"
            } else {
                spellImgClass = "chosenSpell"
            }
                
        }

        var defensiveSpellImgClass = "def-spell-icon";
        if (this.props.currentSpell != null && (this.props.currentSpell.name.includes(" Bolt")||this.props.currentSpell.name=="Crumble Undead")) {
            defensiveSpellImgClass = "def-spell-icon-bolt"
        } else if (this.props.currentSpell != null && (this.props.currentSpell.name.includes(" Blitz"))) {
            defensiveSpellImgClass = "def-spell-icon-blitz"
        }

        return (
            <div className="attackstyle-entry" >
                <div className={!this.props.selected ? "attackstyle-individual" : "indiv-sel"} onClick={() => this.props.selectHandler(this.props.opt, this.props.name)}>
        {this.props.name != "Spell (Def)" ? <img className={spellImgClass} src={(this.props.name=="Spell" && this.props.currentSpell != null) ? spellicon : this.props.rsrc} /> : <span><img src={shieldIcon}/><img  className={defensiveSpellImgClass} src={spellicon}/></span> }
                    <div className="attackstyle-textinfo">{this.props.name}</div>
                </div>
            </div>
        )
    }


}

export default AttackStyle
