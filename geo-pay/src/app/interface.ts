export interface AdvanceRequest {
    count: number
    next: any
    previous: any
    details: Request[]
  }
  
  export interface Request {
    id: string
    applicant: Applicant
    description: string
    status?: 'approved' | 'cancelled' | 'pending';
    date: string
  }
  
  export interface Applicant {
    name: string
    photo: string
  }
  