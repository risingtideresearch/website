import { RiAccountCircle2Line } from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const person = defineType({
  name: 'person',
  type: 'document',
  icon: RiAccountCircle2Line,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'groups',
      type: 'array',
      of: [
        defineField({
          name: 'role',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              description: 'Title or role',
              type: 'string',
            }),
            defineField({
              name: 'group',
              type: 'reference',
              to: [{type: 'personGroup'}],
            }),
          ],
          preview: {
            select: {
              group: 'group.name',
              name: 'name',
            },
            prepare: ({group, name}) => ({
              title: `${group || ''}`,
              subtitle: name,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
