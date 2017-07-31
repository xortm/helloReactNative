'use strict';
export type ComponentExample = {
    key: string,
    module: Object,
};
const ComponentExamplesList: Array<ComponentExample> = [
    {
        key: 'ActivityIndicatorExample',
        module: require('./ActivityIndicatorExample'),
    },
    {
        key: 'ButtonExample',
        module: require('./ButtonExample'),
    },
    {
        key: 'ImageExample',
        module: require('./ImageExample'),
    },
    {
        key: 'PickerExample',
        module: require('./PickerExample'),
    },
    {
        key: 'ProgressBarAndroidExample',
        module: require('./ProgressBarAndroidExample'),
        platform: 'android'
    },
]
module.exports = ComponentExamplesList