import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    gitGraph: {
      showCommitLabel: false
    },
    themeVariables: {
      lineColor: '#888888',
    }
  }
})