import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
    constructor($root, options={}){
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
        
    }
    
    static className = 'excel__table';
    toHTML(){
        return createTable(55)
    }

    onMousedown(event){
        if(event.target.dataset.set === 'col') {
        const getCoords = event.target.getBoundingClientRect();
        const resize = event.target.children;
        console.log(getCoords, resize);
        event.target.onmousemove = () => {
            resize.style.clientWidth += 10+'px';
        }

        event.target.onmouseup = ()=> {
            
        }

        }
    }
}

