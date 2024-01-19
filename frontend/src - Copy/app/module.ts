// user.model.ts

export class Etudiant {
  id: number;
  fname: string;
  lname: string;
  email: string;
  filliere: string;
  classId: string;
  tele: string;
  isPresent: boolean;
  nbrAbsence: number;

  constructor(
  id: number,
  fname: string,
  lname: string,
  email: string,
  filliere: string,
  classId: string,
  tele: string,
  isPresent: boolean,
  nbrAbsence: number

  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.filliere =filliere;
    this.classId =classId;
    this.tele =tele;
    this.isPresent = isPresent;
    this.nbrAbsence = nbrAbsence;
  }
}





export class User {
  id: number;
  username: string;
  password: string;
  role: string;

  constructor(
    id: number,
    username: string,
    password: string,
    role: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

export class Professor {
  id:number;
  name: string;
  filliere: string;
  matiere: string;
  classId: string;
  constructor(
    id:number,
    name: string,
    date: Date,
    filliere: string,
    matiere: string,
    classId:string
  
    ) {
      this.id = id;
      this.name = name;
      this.filliere = filliere;
      this.filliere = filliere;
      this.matiere = matiere;
      this.classId=classId
    }
}

// absence.model.ts

// absence.model.ts
export class Absence {
  id: number;
  date: Date;
  hour: string;
  matiere: string;
  etudiant: Etudiant;

  constructor(
  id: number,
  date: Date,
  hour: string,
  matiere: string,
  // group: string,
  etudiant: Etudiant,

  ) {
    this.id = id;
    this.date = date;
    this.matiere = matiere;
    // this.group = group;
    this.hour = hour;
    this.etudiant = etudiant;
  }
}

