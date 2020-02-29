import * as React from 'react'
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from 'luma.gl';
import * as vega from 'vega';
import { SandDance } from '@msrvida/sanddance-react';
import './demo.css'

class DemoSandDance extends React.Component {

  componentDidMount () {
    var test;
    (function (test) {
      var data = [
        { myUid: 0, myColor: 0, mySort: 0, myX: 0, myY: 0, myZ: 0 },
        { myUid: 1, myColor: 1, mySort: 1, myX: 1, myY: 1, myZ: 1 },
        { myUid: 2, myColor: 2, mySort: 2, myX: 2, myY: 2, myZ: 2 },
        { myUid: 3, myColor: 3, mySort: 4, myX: 4, myY: 3, myZ: 3 }
      ];
      var options = {
        columns: {
          color: 'myColor',
          sort: 'mySort',
          uid: 'myUid',
          x: 'myX',
          y: 'myY',
          z: 'myZ'
        },
        size: {
          height: 700,
          width: 700
        },
        chart: 'scatterplot'
        // chart:''
      };
      SandDance.use(vega, deck, layers, luma);
      test.viewer = new SandDance.Viewer(document.querySelector('#vis'));
      test.viewer.render(options, data);
    })(test || (test = {}));
  }

  render () {
    return (
      <div id="vis"></div>
    )
  }
}

export default DemoSandDance
