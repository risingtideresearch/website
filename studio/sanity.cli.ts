import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'az48uhnz',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: 'kwxtda4jlnkptaumphcq2d1f'
  },
  // Deploys to https://ess-site.sanity.studio
  studioHost: 'ess-site',
})
