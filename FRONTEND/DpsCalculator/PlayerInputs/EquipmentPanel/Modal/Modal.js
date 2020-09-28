import React from 'react';

import './Modal.css';

// import $ from 'jquery';

// const TESTS = [
//     "hello2",
//     "hello3",
//     "hello4",
//     "hello5"
// ]

class Modal extends React.Component {
    
    componentDidMount() {
        // for (var i=0; i<TESTS.length; i++) {
        //     $('#mySelect').append('<div><span>image</span>'+' '+TESTS[i]+'</div>')
        // }
        // var ICON_WIDTH = 100
        // var ICON_HEIGHT = 100
        // var ICONS_PER_ROW = 4
        // var img = new Image();
        // img.crossOrigin = "anonymous"
        // img.src = "./spritehelp.png";
        // img.onload = function() {
        //     for (var i = 0; i < 4; i++) {
        //         var offsetY = Math.ceil(i / ICONS_PER_ROW) * ICON_HEIGHT
        //         var offsetX = (i % ICONS_PER_ROW) * ICON_WIDTH
        //         var iconCanvas = document.createElement("canvas")
        //         iconCanvas.width = ICON_WIDTH
        //         iconCanvas.height = ICON_HEIGHT
        //         var iconCtx = iconCanvas.getContext("2d")
        //         iconCtx.drawImage(this, offsetX, offsetY, ICON_WIDTH, ICON_HEIGHT, 0, 0, ICON_WIDTH, ICON_HEIGHT)
        //         var span = document.createElement("div")
        //         span.classList.add("heeloo")
        //         span.appendChild(iconCanvas)
        //         var t = document.createTextNode(TESTS[i]); 
        //         span.appendChild(t);
                
        //         $('#mySelect').append(span)
        //     }
        // }
    }
    render() {

        return (
            <>
                <div className="modal" onClick={() => this.props.click()}>
                    {/* <Sprite filename="potions.png" x={40} y={40} width={40} height={40} /> */}
                    
                </div>

                


            </>
        )
    }

}

export default Modal;