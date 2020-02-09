import { StyleSheet, Text, View, Button, Alert } from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import image from './image.png';
import './App.css';
import { Editor } from 'react-abc';
import { Notation } from 'react-abc';
import { Parallax, Background } from 'react-parallax';
import Forma from './forma'



const insideStyles = {
  background: "white",
  padding: 50,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const id = 'EditArea';
class printout extends React.Component{
  state = {
    form: {
      title: '',
      author: '',
      tsig: ''
    }
  }
  render() {
    console.log(this.state)
    var title ='T: ' + this.state.form.title;
    var author = 'C: ';
    var tsig = 'M: ';
    var notation=`
    T: ` + title + `
    C: ` + author + `
    M: ` + tsig + `
    %%staves {V1 V2 (V3 V4)}
    V: V1 clef=treble
    V: V2 clef=treble
    V: V3 clef=bass
    V: V4 clef=bass
    [V: V1] (d3 _B =B_A =A2  _A2 _B=B G2) (cB  d8)        ]
    [V: V2] E8-              E8                E8         ]
    [V: V3] G,8              _B,8              G,_B, ^F,6 ]
    [V: V4] _B,,8            _D,8              _B,,8      ]
    [V: V1] (d3 _B =B_A =A2  _A2 _B=B G2) (cB  d8)        ]
    [V: V2] E8-              E8                E8         ]
    [V: V3] G,8              _B,8              G,_B, ^F,6 ]
    [V: V4] _B,,8            _D,8              _B,,8      ]
    `;

    return (
      <div className="App">
      <Parallax blur={{ min: -75, max: 100 }} bgImage={image} strength={500} >
      <div style={{ height: 1000 }}>
        <div style={insideStyles}><h1>Composed.</h1></div>
      </div>
      </Parallax>
      <br></br>

      <Forma callback={form => this.setState({form})}/>


      <textarea defaultValue={notation} id={id} />

      <Editor editArea={id} />
      <br></br>
      <br></br>
      </div>

    );
  }
}

export default printout;
