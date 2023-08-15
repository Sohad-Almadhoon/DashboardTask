export interface Device {
  UID: string
  'App Version': string
  'Phone Model': string
  OS: string
  'OS Version': string
  'Last Login': string
}
export interface Events {
  id: number
  'Event Id': string
  Title: string
  OS: string
  Phase: string
  'Is Done': boolean
}
interface UserData {
  username: string
  img: string
  email: string
  phone: string
  birthDate: string
  languages: string
  role: string
}

interface OpData {
  opData: string
  method: string
  treatmentArea: string
  graft: number
}

interface TravelData {
  arrival: string
  depature: string
}

interface PhaseData {
  phase: number
  tasks: string
  lastUpload: string
}

interface OtherData {
  lastLogin: string
  registrationCode: string
}

export interface UserInfoData {
  user: UserData
  operation: OpData
  flight: TravelData
  status: PhaseData
  usage: OtherData
}
