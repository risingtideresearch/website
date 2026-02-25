import {RiBookletLine} from 'react-icons/ri'
import {defineArrayMember, defineField, defineType} from 'sanity'

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
      name: 'link',
      type: 'array',
      // validation: (Rule) => Rule.max(1),
      of: [
        defineArrayMember({
          name: 'externalLink',
          type: 'object',
          title: 'External Link',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              type: 'string',
            }),
          ],
          // preview: {
          //   select: { url: 'url' },
          //   prepare: ({ url }) => ({ title: '🔗 External', subtitle: url }),
          // },
        }),
        // defineArrayMember({
        //   name: 'programLink',
        //   type: 'object',
        //   title: 'Program',
        //   fields: [
        //     defineField({
        //       name: 'program',
        //       type: 'reference',
        //       to: [{ type: 'program' }],
        //       validation: (Rule) => Rule.required(),
        //     }),
        //   ],
        //   preview: {
        //     select: { title: 'program.title' },
        //     prepare: ({ title }) => ({ title: '📄 Program', subtitle: title }),
        //   },
        // }),
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
            {title: 'Blockquote', value: 'blockquote'},
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
