import {capitalize} from './utils';

export class DomListener {
    constructor($root, listeners = []){
        if(!$root){
            throw new Error(`No root provided is doom listener`)
        }
        this.$root = $root
        this.listeners = listeners;
    }

    initDomListeners() {
        // console.log(this.listeners, '  ', this.$root);
        this.listeners.forEach(listener => {
            const method = getMethodName(listener);
            if(!this[method]) {
                const name = this.name || '';
                // eslint-disable-next-line max-len
                throw new Error(`Method ${method} in not implemented in ${name} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
        const method = getMethodName(listener);
        this.$root.off(listener, this[method])
        })
    }
}   

// input => onInput
function getMethodName(eventName) {
    return 'on'+ capitalize(eventName);
}