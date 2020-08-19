import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}){
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter;
        this.unsubscribers = [];

        console.log(options);

        this.prepare();
    }

    // Настриваем наш компонент до init
    prepare() {}
    // Возвращает шаблон компонента
    toHTML(){
        return '';
    }

    // уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args);
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn);
        this.unsubscribers.push(unsub);
    }

    // Инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDomListeners();
    }

    // удаляем DOM компонент
    // Чистим слушателей
    destroy() {
        this.removeDOMListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}