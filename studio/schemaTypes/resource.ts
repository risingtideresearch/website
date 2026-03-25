
import {RiLinkM} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const resource = defineType({
  name: 'resource',
  type: 'document',
  icon: RiLinkM,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showOnHomepage',
      type: 'boolean',
      title: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'type',
      type: 'reference',
      to: [{ type: 'resourceType' }],
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      type: 'type.name',
      showOnHomepage: 'showOnHomepage',
    },
    prepare({ title, type, showOnHomepage }) {
      return {
        title,
        subtitle: [type, showOnHomepage && 'Homepage'].filter(Boolean).join(' · '),
      }
    },
  },
})
