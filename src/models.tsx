export type Root = Todoitem[]

export interface Todoitem {
  userId: number
  id: number
  title: string
  body: string
}

export type Rooty = Root2[]

export interface Root2 {
  department: string
  sub_departments: string[]
}