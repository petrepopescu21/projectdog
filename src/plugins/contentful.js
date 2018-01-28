import {
  createClient
} from 'contentful'

var contentfulClient = createClient({
    space: 'hcvecrsqbehu',
    accessToken: 'a7f0e565ed84b0bce8fb4f518b1e63fc5c2b0b8cbe766c88824cc6df55404566'
  })

var ContentfulPlugin = {}
ContentfulPlugin.install = function (Vue, options) {
  Vue.prototype.$c = contentfulClient
}

ContentfulPlugin.getLang = function(lang) {
  return contentfulClient.getEntry("7svtXlu1aM6e6e2Q6IqweU",{locale:lang})
}

export default ContentfulPlugin;
