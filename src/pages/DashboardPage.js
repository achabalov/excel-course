import {Page} from '@core/Page';
import {$} from '@core/dom';
import {createRecordsTable} from './dashboard.functions';

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString();
        return $.create('div', 'db').html(`
        <div class="db_header">
            <h1>Excel Панель Управления</h1>
        </div>

        <div class="db_new">
            <div class="db_view">
                <a href="#excel/${now}" class="db_create">
                    Новая <br /> таблица
                </a>
            </div>
        </div>

    <div class="db_table db_view">        
        ${createRecordsTable()}
    </div>)
    `)
   }
}