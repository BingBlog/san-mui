/**
 * @file textFieldHint component
 * @author liuchaofan(asd123freedom@gmail.com)
 */

import san from 'san';

export default san.defineComponent({
    template: `
        <div class="sm-text-field-hint {{show ? 'show' : ''}} {{hintTextClass}}">
            {{text}}
        </div>
    `,
    initData() {
        return {
            text: '',
            show: true
        };
    }
});
