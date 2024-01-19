package com.gestion.absence.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import javax.persistence.*;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Integer id;

    @Column(name = "fname")
    private String fname;
    @Column(name = "lname")
    private String lname;
    @Column(name = "email")
    private String email;
    @Column(name = "filliere")
    private String filliere;
    @Column(name = "class_id")
    private String classId;
    @Column(name = "tele")
    private String tele;
    @Column(name = "isPresent")
    private Boolean isPresent=false;
    @Column(name = "nbrAbsences")
    private Integer nbrAbsences;
    @ManyToMany
    @JoinColumn(name= "id")
    private List <Seance> seances;
    @ManyToMany
    @JoinColumn(name= "id")
    private List <Professor> professors;



}
