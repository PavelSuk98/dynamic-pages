import { CompomentType, Field } from './schema';

export enum DynamicRoutesPaths {
  PAGEA = 'pageA', //CA
  PAGEB = 'pageB', //SA
  PAGEC = 'pageC', //User
  DOCS = 'docs', //User
}

export interface PageSettings {
  type: 'INDEX' | 'DETAIL';
  title: string;
  linkHref: string;
  linkTitle: string;
  order: number;
}

export interface Configuration {
  settings: PageSettings;
  schema: Field[];
}

export const DynamicPagesConfiguration: Record<
  DynamicRoutesPaths,
  Configuration
> = {
    [DynamicRoutesPaths.PAGEA]: {
        settings: {
            type: 'INDEX',
            title: 'Super Page A',
            linkHref: '/page-a',
            linkTitle: 'Page A',
            order: 1,
        },
        schema: [
            { type: CompomentType.HEADER, name: 'Header', label: 'Page A' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'This is my paragraph' }
        ],
    },
    [DynamicRoutesPaths.PAGEB]: {
        settings: {
            type: 'INDEX',
            title: 'Super Page B',
            linkHref: '/page-b',
            linkTitle: 'Page B',
            order: 5,
        },
        schema: [
            { type: CompomentType.HEADER, name: 'Header', label: 'Page Super B' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo. Fusce consectetuer risus a nunc. Nulla non lectus sed nisl molestie malesuada. In dapibus augue non sapien. Maecenas sollicitudin. Praesent in mauris eu tortor porttitor accumsan. Praesent id justo in neque elementum ultrices. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam erat volutpat. Nullam eget nisl.' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo. Fusce consectetuer risus a nunc. Nulla non lectus sed nisl molestie malesuada. In dapibus augue non sapien. Maecenas sollicitudin. Praesent in mauris eu tortor porttitor accumsan. Praesent id justo in neque elementum ultrices. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam erat volutpat. Nullam eget nisl.' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo. Fusce consectetuer risus a nunc. Nulla non lectus sed nisl molestie malesuada. In dapibus augue non sapien. Maecenas sollicitudin. Praesent in mauris eu tortor porttitor accumsan. Praesent id justo in neque elementum ultrices. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam erat volutpat. Nullam eget nisl.' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas aliquet accumsan leo. Fusce consectetuer risus a nunc. Nulla non lectus sed nisl molestie malesuada. In dapibus augue non sapien. Maecenas sollicitudin. Praesent in mauris eu tortor porttitor accumsan. Praesent id justo in neque elementum ultrices. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Aliquam erat volutpat. Nullam eget nisl.' },
            { type: CompomentType.HEADER, name: 'Header', label: 'Header 2' },
        ],
    },
    [DynamicRoutesPaths.PAGEC]: {
        settings: {
            type: 'INDEX',
            title: 'Super Page C',
            linkHref: '/page-c',
            linkTitle: 'Page C',
            order: 3,
        },
        schema: new Array<Field>(),
    },
    [DynamicRoutesPaths.DOCS]: {
        settings: {
            type: 'INDEX',
            title: 'Docs page',
            linkHref: '/docs',
            linkTitle: 'Docs',
            order: 6
        },
        schema: [
            { type: CompomentType.HEADER, name: 'Header', label: 'Docs' },
            { type: CompomentType.PARAGRAPH, name: 'Header', label: 'This is my paragraph' }
        ]
    }
};
