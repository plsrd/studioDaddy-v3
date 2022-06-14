import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'studioDaddy',

  projectId: 'k8p6uw8a',
  dataset: 'development',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
