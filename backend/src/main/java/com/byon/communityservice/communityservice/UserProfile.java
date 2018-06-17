package com.byon.communityservice.communityservice;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserProfile {
 
    private @Id @GeneratedValue Long id;
    private int totalPoints;
    private int hospitalPoints;
    private int churchPoints;
    private int schoolPoints;
    private int libraryPoints;
    
 
    private UserProfile() {}
 
    public UserProfile(int totalPoints, int hospitalPoints, int churchPoints,
    int schoolPoints, int libraryPoints) {
        this.totalPoints = totalPoints;
        this.hospitalPoints = hospitalPoints;
        this.churchPoints = churchPoints;
        this.schoolPoints = schoolPoints;
        this.libraryPoints = libraryPoints;
    }
}