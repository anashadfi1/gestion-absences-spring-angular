package com.gestion.absence.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Seance {
    @Id
    @GeneratedValue
    @Column(name = "seance_id")
    private Integer seance_id;
    @Column(name = "date")
    private Date date;
    @Column(name = "grp")
    private int grp;
    @Column(name = "cours")
    private int cours;
    @Column(name = "heure")
    private int heure;
    @ManyToMany
    @JoinColumn(name= "student_id")
    private List<Student> student;


    }
