import { DefaultWidgetRegistry } from 'angular2-schema-form';
import { IonicStringWidget, IonicTextAreaWidget, IonicCheckboxWidget, 
         IonicDatetimeWidget, MediumWidget } from './widgets';

export class IonicRegistry extends DefaultWidgetRegistry {
    constructor() {
        super();
        this.register('string', IonicStringWidget);
        this.register('textarea', IonicTextAreaWidget);
        this.register('boolean', IonicCheckboxWidget);
        this.register('checkbox', IonicCheckboxWidget);
        this.register('date', IonicDatetimeWidget);
        this.register('tinymce', MediumWidget);
    }
}