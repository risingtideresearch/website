import { RiCalendarEventFill } from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  type: 'document',
  icon: RiCalendarEventFill,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'start',
      type: 'datetime',
    }),
    defineField({
      name: 'end',
      type: 'datetime',
    }),
  ],
})
