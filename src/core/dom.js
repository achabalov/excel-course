class Dom {
    constructor(selector){
        // #app 
        this.$el = typeof selector === 'string' ?
        document.querySelector(selector) : 
        selector
    }

    html(html) {
        if(typeof html === 'string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callBack) {
        this.$el.addEventListener(eventType, callBack)
    }

    off(eventType, callBack){
        this.$el.removeEventListener(eventType, callBack)
    }
    
    append(node) {
        if (node instanceof Dom){
            node = node.$el
        }
        if(Element.prototype.append){
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }
}

// event.target
export function $(selector) {
    return new Dom(selector)
}

$.create = (tagname, classes = '') => {
    const el = document.createElement(tagname)
    if(classes){
        el.classList.add(classes)
    }
    return $(el);
}

