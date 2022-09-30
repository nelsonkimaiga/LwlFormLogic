package com.lwala.formlogic.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Slf4j
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String healthFacility;
    String supervisingCHA;
    String malariaQuantity;
    String familyPlanningQuantity;
    String zincTabletsQuantity;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    Date requestDate;


}
