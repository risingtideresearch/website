import {defineField, defineType} from 'sanity'

export const program = defineType({
  name: 'program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'subprograms',
      type: 'array',
      of: [
        defineField({
          name: 'program',
          type: 'reference',
          to: [
            {
              type: 'program',
            },
          ],
        }),
      ],
    }),
  ],
})
