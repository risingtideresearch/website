import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
