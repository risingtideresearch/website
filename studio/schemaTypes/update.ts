import {RiArticleLine} from 'react-icons/ri'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const update = defineType({
  name: 'update',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'program',
      type: 'reference',
      to: [{type: 'program'}],
      validation: (Rule) => Rule.required(),
    }),
     defineField({
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'array',
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
        }),
      ],
    }),
    defineField({
      name: 'content',
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
  ],
  preview: {
    select: {
      title: 'title',
      program: 'program.name',
    },
    prepare({title, program}) {
      return {
        title,
        subtitle: program,
      }
    },
  },
})
