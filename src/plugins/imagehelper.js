var imageHelper = {}

imageHelper.install = function(Vue,options) {
    Vue.prototype.$i = (img,w,h,fill=true) => {
        var url = new URL('https:'+img.fields.file.url)
        var query = "?fm=jpg&fl=progressive" + (fill==true?"&fit=fill":"") + (w?"&w="+w:"") + (h?"&h="+h:"")
        var host = "images.contentful.com"
        return "https://"+host+url.pathname+query
    } 
}   

export default imageHelper