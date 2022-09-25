export interface Pokemon{
  url: string,
  name: string
  forms: Array<Form>
}

export interface Form {
  url: string;
  name: string;
}
