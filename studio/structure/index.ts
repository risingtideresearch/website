import {RiHome2Line} from 'react-icons/ri'
import type {ListItemBuilder, StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) => {
  const singletons = ['home']

  return S.list()
    .title('Content')
    .items([
      // Singleton section
      S.listItem()
        .title('Home')
        .id('home')
        .icon(RiHome2Line)
        .child(S.document().schemaType('home').documentId('home')),
      // Everything else
      S.divider(),
      ...S.documentTypeListItems().filter(
        (d: ListItemBuilder) =>
          !singletons.includes(d.getId() as string) && 
          d.getId() != 'media.tag',
      ),
    ])
}
