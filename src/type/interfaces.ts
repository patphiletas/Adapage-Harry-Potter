export interface ChronologieItem {
  id: string;
  titre: string;
  date: string;
  description: string;
  photo: string;
}

export interface RecordItem {
  id: string;
  date: string;
  titre: string;
  description: string;
  photo: string;
}

export interface FormuleMagiqueItem {
  id: string;
  titre: string;
  date: string;
  description: string;
  photo: string;
}

export type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};
