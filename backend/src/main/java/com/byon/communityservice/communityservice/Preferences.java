package com.byon.communityservice.communityservice;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Preferences {
 
    private @Id @GeneratedValue Long id;
    private String name;
    private String location;
    private int radius;
    private boolean churches;
    private boolean hospitals;
    private boolean schools;
    private boolean libraries;
 
    private Preferences() {}
 
    public Preferences(String name, String location, int radius, boolean hospitals,
    boolean churches, boolean schools, boolean libraries) {
        this.name = name;
        this.location = location;
        this.radius = radius;
        this.churches = churches;
        this.hospitals = hospitals;
        this.schools = schools;
        this.libraries = libraries;
    }
}