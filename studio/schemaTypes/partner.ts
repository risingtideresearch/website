import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
