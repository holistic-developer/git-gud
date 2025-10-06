import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    gitGraph: {
      rotateCommitLabel: false,
    },
    themeVariables: {
      commitLabelColor: '#ffffff',
      commitLabelBackground: '#111111',
      lineColor: '#888888',
    }
  }
})