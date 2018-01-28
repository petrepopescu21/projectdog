var imageHelper = {}

imageHelper.install = function(Vue,options) {
    Vue.prototype.$i = (img,w,h) => {
        var url = new URL('https:'+img.fields.file.url)
        var query = "?fm=jpg&fl=progressive&fit=fill&" + (w?"&w="+w:"") + (h?"&h="+h:"")
        console.log(query)
        var host = "images.contentful.com"
        return "https://"+host+url.pathname+query
    } 
}   

export default imageHelper