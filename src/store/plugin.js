import contentfulPlugin from '../plugins/contentful'


export default function vuexContentfulPlugin(store) {
  store.subscribe((mutation, state) => {
    if (mutation.type == 'setLang') {
      let lang = mutation.payload
      if (sessionStorage.getItem('labels_'+lang!==null)) {
        store.commit('setLabels',JSON.parse(sessionStorage.getItem('labels_'+lang)))
        store.commit('setReady',true)
      }
      else {
        contentfulPlugin.getLang(lang).then((entry)=>{
          store.commit('setLabels',entry.fields)
          sessionStorage.setItem('labels_'+lang,JSON.stringify(entry.fields))
          store.commit('setReady',true)
        })
      }
    }
  })
}
