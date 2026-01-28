import {RiArchive2Line} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const activity = defineType({
  name: 'activity',
  type: 'document',
  icon: RiArchive2Line,
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
      name: 'programs',
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

    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
