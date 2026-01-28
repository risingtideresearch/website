import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'RTRF Site',

  projectId: 'az48uhnz',
  dataset: 'production',

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool()],

  vite: {
    optimizeDeps: {
      exclude: ['@sanity/ui'],
      include: ['react-is'],
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'react-is'],
    },
  },

  schema: {
    types: schemaTypes,
  },
})
