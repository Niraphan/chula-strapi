import type { Schema, Struct } from '@strapi/strapi';

export interface AgencyGroup extends Struct.ComponentSchema {
  collectionName: 'components_agency_groups';
  info: {
    displayName: 'group';
  };
  attributes: {
    AgencyName: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommanderCommander extends Struct.ComponentSchema {
  collectionName: 'components_commander_commanders';
  info: {
    description: '';
    displayName: 'person';
    icon: 'briefcase';
  };
  attributes: {
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    priority: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface CommanderRole extends Struct.ComponentSchema {
  collectionName: 'components_commander_roles';
  info: {
    description: '';
    displayName: 'role';
  };
  attributes: {
    nameRole: Schema.Attribute.String;
    person: Schema.Attribute.Component<'commander.commander', true>;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['address', 'phone', 'email', 'other']>;
  };
}

export interface ContactContainerContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_container_contacts';
  info: {
    displayName: 'container contact';
    icon: 'phone';
  };
  attributes: {
    ContactDetail: Schema.Attribute.Component<'contact.contact', true>;
    title: Schema.Attribute.String;
  };
}

export interface DowloadFile extends Struct.ComponentSchema {
  collectionName: 'components_dowload_files';
  info: {
    displayName: 'file';
    icon: 'folder';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    fileName: Schema.Attribute.String;
  };
}

export interface DowloadTabsDowload extends Struct.ComponentSchema {
  collectionName: 'components_dowload_tabs_dowloads';
  info: {
    displayName: 'tabs-dowload';
    icon: 'archive';
  };
  attributes: {};
}

export interface HistoryGroup extends Struct.ComponentSchema {
  collectionName: 'components_history_groups';
  info: {
    description: '';
    displayName: 'Group';
  };
  attributes: {
    groupname: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HistoryYears extends Struct.ComponentSchema {
  collectionName: 'components_history_years';
  info: {
    displayName: 'Years';
  };
  attributes: {
    description: Schema.Attribute.Text;
    groups: Schema.Attribute.Component<'history.group', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    Year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'agency.group': AgencyGroup;
      'commander.commander': CommanderCommander;
      'commander.role': CommanderRole;
      'contact.contact': ContactContact;
      'contact.container-contact': ContactContainerContact;
      'dowload.file': DowloadFile;
      'dowload.tabs-dowload': DowloadTabsDowload;
      'history.group': HistoryGroup;
      'history.years': HistoryYears;
    }
  }
}
