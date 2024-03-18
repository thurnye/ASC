
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


export interface DocumentRootState {
  documentData: {
    documents: DocumentItemsProps[] ;
    singleDocument: DocumentItemsProps | null;
  };
}