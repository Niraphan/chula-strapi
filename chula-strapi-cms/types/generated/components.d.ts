import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    description: '';
    displayName: 'content';
    icon: 'fileError';
  };
  attributes: {
    detail: Schema.Attribute.RichText;
    html: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    QandA: Schema.Attribute.Component<'qand-a.q-and-a', true>;
  };
}

export interface QandAQAndA extends Struct.ComponentSchema {
  collectionName: 'components_qand_a_q_and_as';
  info: {
    description: '';
    displayName: 'Q&A';
    icon: 'cup';
  };
  attributes: {
    Answer: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    Question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
      'qand-a.q-and-a': QandAQAndA;
    }
  }
}
