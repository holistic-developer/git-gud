import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    gitGraph: {
      rotateCommitLabel: false,
      showCommitLabel: true
    },
    themeVariables: {
      lineColor: '#888888',
      commitLabelColor: '#ffffff',
      commitLabelBackground: '#000000'
    }
  }
})