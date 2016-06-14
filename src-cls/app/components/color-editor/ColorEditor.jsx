'use strict'
import React, { Component } from 'react'
import {col2rgba} from 'utils/color-utils'

console.log(col2rgba);

export default class ColorEditor extends Component {
  render() {
    return (
      <div className="color-editor">
        Hello from ColorEditor
      </div>
    )
  }
}
