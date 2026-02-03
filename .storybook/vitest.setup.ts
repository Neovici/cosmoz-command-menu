import { setProjectAnnotations } from '@storybook/web-components-vite';
import * as previewAnnotations from './preview';

const annotations = setProjectAnnotations([previewAnnotations]);
