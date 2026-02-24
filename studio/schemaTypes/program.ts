import {RiBookletLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const program = defineType({
  name: 'program',
  type: 'document',
  icon: RiBookletLine,
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
      name: 'team',
      type: 'array',
      of: [
        defineField({
          name: 'person',
          type: 'reference',
          to: [
            {
              type: 'person',
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'content',
      title: 'Overview',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading', value: 'h2'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
})
