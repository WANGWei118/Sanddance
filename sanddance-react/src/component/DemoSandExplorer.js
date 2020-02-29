import * as React from 'react'
import * as deck from '@deck.gl/core'
import * as layers from '@deck.gl/layers'
import * as luma from 'luma.gl'
import * as fabric from 'office-ui-fabric-react'
import * as vega from 'vega'
import { Explorer, use } from '@msrvida/sanddance-explorer'

class DemoSandExplorer extends React.Component {

  // componentDidMount () {
  //   fabric.initializeIcons();
  //   use(fabric, vega, deck, layers, luma);
  //
  //   const data = [
  //     { a: 1, b: "c1" },
  //     { a: 1, b: "c2" },
  //     { a: 2, b: "c3" },
  //     { a: 3, b: "c4" }
  //   ];
  //
  //   const explorerProps = {
  //     logoClickUrl: 'https://microsoft.github.io/SandDance/',
  //     mounted: explorer => {
  //       explorer.load(data);
  //     }
  //   };
  // }

  render () {
    fabric.initializeIcons()
    use(fabric, vega, deck, layers, luma)

    const data = [
      {a: 1, b: 'c1'},
      {a: 1, b: 'c2'},
      {a: 2, b: 'c3'},
      {a: 3, b: 'c4'}
    ]

    const explorerProps = {
      logoClickUrl: 'https://microsoft.github.io/SandDance/',
      mounted: explorer => {
        explorer.load(data)
      }
    }
    return (
      <Explorer />
    )
  }
}

export default DemoSandExplorer
