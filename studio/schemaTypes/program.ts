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
      name: 'link',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          type: 'url',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'icon',
      title: 'Icon (SVG)',
      type: 'image',
      options: {
        accept: 'image/svg+xml',
      },
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
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'object',
          name: 'videoEmbed',
          title: 'Video Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Video URL',
              description: 'YouTube or Vimeo URL',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
          preview: {
            select: {url: 'url'},
            prepare({url}) {
              return {title: 'Video', subtitle: url}
            },
          },
        },
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
  ],
})
