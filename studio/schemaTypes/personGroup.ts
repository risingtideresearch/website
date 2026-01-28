import { RiGroup2Line, RiGroup3Line } from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const personGroup = defineType({
  name: 'personGroup',
  title: 'Group',
  type: 'document',
  icon: RiGroup3Line,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
