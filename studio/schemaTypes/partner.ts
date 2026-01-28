import { RiArrowLeftRightFill } from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const partner = defineType({
  name: 'partner',
  type: 'document',
  icon: RiArrowLeftRightFill,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
