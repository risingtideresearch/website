import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `program`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[(_type == "activity") && references($id)]`,
            params: {id: `_id`},
            options: {perspective: 'drafts'},
          })
          .title('Part of'),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "update" && references($id)] | order(date desc)`,
            params: {id: `_id`},
            options: {perspective: 'drafts'},
          })
          .title('Updates'),
      ])
    case `person`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[(_type == "person") && references($id)]`,
            params: {id: `_id`},
            options: {perspective: 'drafts'},
          })
          .title('Programs'),
      ])
    case `resourceType`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({
            query: `*[_type == "resource" && references($id)]`,
            params: {id: `_id`},
            options: {perspective: 'drafts'},
          })
          .title('Resources'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
