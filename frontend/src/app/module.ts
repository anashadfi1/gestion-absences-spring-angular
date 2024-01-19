// user.model.ts

export class Etudiant {
  id: number;
  fname: string;
  lname: string;
  email: string;
  filliere: string; // Fixed typo here
  classId: string;
  tele: string;
  isPresent: boolean;
  nbrAbsences: number;

  constructor(
    id: number,
    fname: string,
    lname: string,
    email: string,
    filliere: string, // Fixed typo here
    classId: string,
    tele: string,
    isPresent: boolean,
    nbrAbsences: number
  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.filliere = filliere; // Fixed typo here
    this.classId = classId;
    this.tele = tele;
    this.isPresent = isPresent;
    this.nbrAbsences = nbrAbsences;
  }
}

export class Absence {
  id: number;
  date: Date;
  hour: string;
  matiere: string;
  student: Etudiant;

  constructor(
    id: number,
    date: Date,
    hour: string,
    matiere: string,
    student: Etudiant
  ) {
    this.id = id;
    this.date = date;
    this.matiere = matiere;
    this.hour = hour;
    this.student = student;
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

