import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'start',
      type: 'datetime',
    }),
    defineField({
      name: 'end',
      type: 'datetime',
    }),
  ],
})
