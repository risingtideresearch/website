import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      // hidden: true,
      initialValue: 'Rising Tide Research Foundation',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})
