
export interface TemplateType{
  id: number,
  label: string,
  value: string,
  sectionId: number
};


export interface ListItemsProps {
  id: number,
  label: string,
  value: string,
};
export interface DocumentItemsProps extends ListItemsProps {
  template: TemplateType[]
};


export interface selectedListItem {
  id:number, type: string
};

export interface ITemplate {
  _id: string,
  name: string
  htmlContents: string,
  sectionId: string,
  documentId: string,
  createdAt: string,
};
export interface ISections {
  _id: string,
  createdAt: string,
  htmlContents: string,
  modified: boolean,
  name: string,
  template?: ITemplate[]
};

export interface IDocumentRootState {
  _id: string,
  userId: string,
  createdAt: string,
  name: string,
  sections: ISections[]
};

export interface DocumentRootState {
  documentData: {
    documents: DocumentItemsProps[] ;
    singleDocument: DocumentItemsProps | null;
  };
}