import {RiPriceTag3Line} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const resourceType = defineType({
  name: 'resourceType',
  title: 'Resource Type',
  type: 'document',
  icon: RiPriceTag3Line,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
