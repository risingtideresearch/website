import {defineField, defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
