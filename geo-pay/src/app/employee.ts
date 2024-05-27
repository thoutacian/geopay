export interface  Employees {
    count: number
    next: any
    previous: any
    details: Detail[]
  }
  
  export interface Detail {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    dob: string
    date_created: string
    county: string
    subCounty: string
    nationalId: string
    documents: Document[]
    equipments: Equipment[]
    department: string
  }
  
  export interface Document {
    name: string
    documentId: string
  }
  
  export interface Equipment {
    name: string
    description: string
  }
  