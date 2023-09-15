export interface AbstractEntity {
    isArchived: boolean;
  
    createdAt: Date;
  
    createdBy?: string;
  
    updatedAt: Date;
  
    updatedBy?: string;
  }
  