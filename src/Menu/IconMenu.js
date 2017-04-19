/**
 * @file IconMenu component
 * @author qiusiqi(qiusiqi@baidu.com)
 */

import san from 'san';
import './IconMenu.styl';
import Icon from '../Icon';
import Menu from './Menu';

let IconMenu = san.defineComponent({
    template: `
<div class="sm-iconmenu {{ className }}" style="{{ style | padStyles }}">
    <div class="sm-iconmenu-icon">
        <san-icon on-click="toggleMenu($event)">{{ icon }}</san-icon>
    </div>

    <div class="sm-menu-list {{ open | notOpen('list-hidden') }}"
        style="z-index:{{ zIndex }};transform:{{ transform }};transform-origin:{{ transformOrigin }};left:{{ left }}px;top:{{ top }}px;{{ menuStyle | padStyles }};">

        <slot></slot>
    </div>
    <div san-if="useLayerForClickAway" class="sm-layer-for-click {{ open | notOpen('list-hidden') }}" style="z-index:{{zIndex-1}}"></div>
</div>
    `,

    components: {
        'san-icon': Icon
    },

    initData() {
        return Object.assign({
            itemClickClose: true,
            useLayerForClickAway: false,
            targetOrigin: {
                horizontal: 'left',
                vertical: 'top'
            },
            zIndex: 101,
        }, this.defaultData());
    },

    attached() {
        this.rootClass = '.' + this.data.get('className');
        this.clickerClass = '.sm-iconmenu-icon';

        if (!this.data.get('useLayerForClickAway')) {
            this.data.set('zIndex', 1);
        }

        this.bindEvent();
    }
});
san.inherits(IconMenu, Menu);

export default IconMenu;
