import React from 'react';

import IndividualAttribute from './IndividualAttribute/IndividualAttribute';

import './AttributeRow.css';

const ROW_ICONS = {
    "Offensive": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAAFVBMVEUAAAAAAAF1e3x6awlGPC+0qwZVXFpfKXj9AAAAAXRSTlMAQObYZgAAAGJJREFUeF61zMENgCAQRFG2Awa0AInxjoQCVDowNGD/RWhMcNaDR+f28pMxnMAquaAkQcvdYhr+TNMrHd9pbUkANz5Jcp2v1JTyzkNBqpGH2DIlXUkUyuIpX6DURwvwBIY7AZisDOeMoOV7AAAAAElFTkSuQmCC",
    "Defensive": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATBAMAAACEi/vCAAAAD1BMVEUAAACSmpV1e3xVXFoAAAHBAcSuAAAAAXRSTlMAQObYZgAAAEhJREFUeNpjcIECBwZnY2MlJUVBQRDLSElJCcpScSGGZQI2BBeLSFNYICwRBgYGZ7ALHBgYGFhArgIJgQXBQgwMLC4uLgwMDADuqxzhpiA+7QAAAABJRU5ErkJggg==",
    "Other": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAAXNSR0IArs4c6QAAABtQTFRFAAAAwaR2tKsGkpqVdXt8emsJVVxaRjwvAAABaHDXLgAAAAF0Uk5TAEDm2GYAAADTSURBVHjaXc8xbsMwDAVQjlz/JM8BcgIv3UO0mo0a8AGMoKuBFOxoBUrKYxeU3EQOtwd+khLZVivVup/PIqe+f3oWkZ2jVbMPNc6yM8veufqrnOtXFonUuLYftmixvZcN5Y2b32LC0j2dUwgIj3veVoSOiItzBMKylMAsEiUhQKElIJLfPb6EunGOckmAqqL80vKHGHzA53k4fF4iJXjePQ5HWYkRFF3Jj4eJiH3A15F9DxMRJdT1/KvjZpi39edWDT9HN7Wdr9Nq1rig8X+9ms2Tf5nXcaPL1FHTAAAAAElFTkSuQmCC"
}

const ATTRIBUTES = [
    {name: "at", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAfCAMAAAA/UnbCAAAAXVBMVEUAAAAAAAGkmZhMQCq0hxW9jhi/jxjLmBi0qaixhRWlfBWugxXVoBqofhWfdxGbdBHIlhiLZxFkSgmHZQ3gqBqAYA2RbRFpTgnxtR2YchHFlBj2uR3Yohq6ixXTnhqsfKPGAAAAAXRSTlMAQObYZgAAAH5JREFUeF6N0kcOwzAMBVGPintJ7eX+x4yBLATrE1C0fBiQC6oyHpbhUGudKO2KDkVL3U8VVYuYVLGcKopmiJUygKYsQ0SGcp67uJP1h2PfxWYki6/7PtTNeNow3l+mlW9s0XOfAnlKRbKU6q2LmPTxVKV+KTK/P9aAwJ9f8AsyxgOokygVYQAAAABJRU5ErkJggg=="},
    {name: "al", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAMAAADqx5XUAAAAtFBMVEUAAAAAAAGkmZimm5qhlZWdkpKjl5aYjo2WjIusoKCbkJCflJSaj49RNwmrn5+rlRWJgH+TiIiyqKelkBWQhoa6r6+xpaWViomRfxG3oBWPhYWonJu0nhVIMAmEcw2/tra/qBipnp3Cqhi+tLSVgxGEenq2q6qLgoGHfn20qaiYhRGvpKS6oxU8KAC5rq1RSAmNg4OvoqJWOgnFrBjYvRqfixHFvLzNtBh8bQ2xmxXIrxiokxWvCTM3AAAAAXRSTlMAQObYZgAAANJJREFUeF510tWSA0EIBdBc2kZd4rru7v//X9tJXnZ2gEdOQVF1GQmFkShQkCRWIXhxnq44Q+NiCqsWLJk9rYeGWWAoq+7X7wPD4ziy87A7b0/+G4oy0UR00D7icr/R11H/Is4ujmNkxgD6VPjzlVLaHfp9mgWRVWQCLwxppSMMry8aT1udeOHIZlYgo0ICSy6eP3GZYVEmdnvDxolVPc064tN8+LzObz1xdrdMJxvBls/p6oU15K8pwNPb7kN6uEm+2Eh2Wn/tZJt+i/YD8fll+QXY6Q3Q2GsaIgAAAABJRU5ErkJggg=="},
    {name: "ac", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAdCAMAAACZrWzKAAAAllBMVEUAAAAAAAGWjIuQhoZbQwmdkpKNg4OYjo2JgH+bkJCkmZiflJSaj4+jl5arn59INQmViompnp1pTglwVA1WQAmLgoGFfHtMOQmAYA2Hfn2Eenqmm5p0Vw1RPQlCMAConJt8XQ1kSgmhlZWHZQ2PhYVnYGBza2uTiIisoKBgSAmvoqJ5cXCBeHh4Wg17cnJwaWl/dnaEYw0Nr+lnAAAAAXRSTlMAQObYZgAAAL1JREFUeF5t0tWuxDAMBNA6WGbmZb7w/z+3lRbcqvbjyWisRDG+AwDGeuDqR8QBnP3B9gBWHA321rE+B9jReFvp6vCzBDscy2UnrjJYdryZI9vROx1yUyNHmk0sJza5g+zJ7I9PrFXFmtlOMxbFLbN4vpeoBiSXrv+tQ7NikyLHaVAfftRdvRTDAHDM8+UtN2kAq2eEURQI8+aeYjr86FDnCwMq/E+Hk4BkQWpJNu8SUkcBhJYtUMVtTDD9957X5AwEcwgFqAAAAABJRU5ErkJggg=="},
    {name: "am", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXBAMAAAAMzfkgAAAAElBMVEUAAAAbBpIAAAEABv56PQm0qwYDZfXfAAAAAXRSTlMAQObYZgAAAH1JREFUeF5N0NENAyEMA9CKDVw6wOERklugVRjh9l+lGHqk/iFPcpDgoRQe8/zB/wW3FFEtqw2e1dKAmsIQb1GyLD4btgTYsQXAb5FbipSXNmkvSjhZONfeA1d89BKCEdF7mA+p9op+Vb+lDJiaa5bWC1AFcoiYNv2UuKL5C5gvFkaJ5qUwAAAAAElFTkSuQmCC"},
    {name: "ar", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXBAMAAAASBMmTAAAAElBMVEUAAAAAAAF6PQl1e3wJbAI1Lxvn8OCVAAAAAXRSTlMAQObYZgAAAJBJREFUeF49jdENwyAMRO82yJEyQL1BEnWASHQA1O4/S88h1F88PfwMApQWXFPEEvFcIBnCbxPKE6BfUgmtBpTdGwptMvBY0tfRWLeEbnEr1oi/Yndwqio5fasO6P7HVwYnfLYJVJWDAx6tZ1AJbO8zg8Vg8T0zeKVVm4HHOKpmj3W/yrSwGobjmHfmzKNzhB+ethFFd5FA4wAAAABJRU5ErkJggg=="},
]

const OTHER_ATTRIBUTES = [
    {name: "strengthBonus", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUAgMAAAD5DFXkAAAADFBMVEUAAADBpHYAAAFGPC8vY/5LAAAAAXRSTlMAQObYZgAAAFZJREFUeNptxLENgCAQQNEfOgah0H3I2UHpAkQaE5a43sbEicDGMbDV2PuKByPAfoDRCnaRwhAk4uTKaOo32ltFwzPhJGSsbydG+ozxKYKuX2kD9eWvFzLeIDMONgdXAAAAAElFTkSuQmCC"},
    {name: "rangedStrengthBonus", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZBAMAAADd8CNTAAAAGFBMVEUAAADBpHZ1e3wJbAJGPC81LxsAAAEAAAA7TiQqAAAAAXRSTlMAQObYZgAAAJJJREFUeNp9zr8KAjEMBvBMdf4g9gEc9AGKOgfC7SLcnLNcXeUGff1DaK51MduPL//o86KullPP5XDstPsjej+sWGMYp1gaZzC2NOAmGFwFLBAPJ0DZwwAIC9cwgIWhcIFVJbY5YRm2C2Dovi1VQRnrf99W2Jwu3qqwfE/mF6Plc7pWIVJO47MppEJNlK1X+BERraS9Hp5X0lP7AAAAAElFTkSuQmCC"},
    {name: "mageStrengthBonus", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAAXNSR0IArs4c6QAAABhQTFRFAAAAwaR2tKsGej0JRjwvAAb+GwaSAAABvPwTlwAAAAF0Uk5TAEDm2GYAAADCSURBVHjaTZCxDgMhDENvY7aExN5POKR2Pok/qCI+oMJdYbn8fkVC2/P2ZMeEbNtS0O0qhfY/hYEj/XHEiNgvZkFM3xoF4nG4HVQGIgqK2YFSUXBEL1O2OlBKgYVPiqdtNpxkG5hhQ5JNEQtSt1GyVSAiefZ9sg54cZhkCHUkKQOwd4LqFVeX/vC06rFwrkE+Nc1zBNU7yVt+qPQ5qDnnfc9VJs7kK++3Jj+cEpHa/RUDkbr+w5kUtR3dbnVdPajL4AMaflUTlujxNAAAAABJRU5ErkJggg=="},
    {name: "prayerBonus", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXBAMAAAASBMmTAAAAD1BMVEUAAAC2zboAAAHh79eSmpW4ABp2AAAAAXRSTlMAQObYZgAAAGFJREFUeF6N0NEJwCAMBNCQDU46QNQuUDKC7j9TL5a2fgjt/XiPQCDKiMqUan+gtUxo6cXeYEuU3pDs7sQlZe9+UNxYnQnAjZN4MSZMCP3ZAGzRr2TAZAlFkjUkf146/84JpVkMess7DiAAAAAASUVORK5CYII="},
]

const AttributeRow = (props) => {
    var attribs = null;
    if (props.attr == "Offensive" || props.attr == "Defensive") {
        attribs = ATTRIBUTES.map(a => {
            return <IndividualAttribute type={a.name} icon={a.icon} attrib={props[a.name]}/>
        })
    } else if (props.attr == "Other") {
        attribs = OTHER_ATTRIBUTES.map(a => {
            return <IndividualAttribute type={a.name} icon={a.icon}/>
        })
    }
    return (
        <div className="attr-row">
            {/* <IndividualAttribute /> <IndividualAttribute /> */}
            <span className="attr-row-header"><img src={ROW_ICONS[props.attr]} style={{marginRight: '5px', height: '20px'}} />{props.attr} Bonuses</span>
            <div className="attr-inner-row">{attribs}</div>
        </div>
    )
}

export default AttributeRow