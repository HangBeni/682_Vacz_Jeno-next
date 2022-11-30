
export type Event = {
    id:number,
    ProgramNeve: string,
    Részletek: string,
    Img: string,
    Program_Vege: Date,
    Program_Kezdete: Date
}

export type Greats = {
    id: number,
    Name: string,
    Promo: string,
    Link: string,
    Image: string,
    Quote: string
}
export type Poem = {
  id: number,
  Name: string,
  Topics: string,
  Link: string,
  Reszlet: string
}

export type Dal = {
    id: number,
    Name: string,
    Lyrics: string,
    Video: string
}


export type image = {  
    id: number
    imageSrc: string
    tags: string
  }