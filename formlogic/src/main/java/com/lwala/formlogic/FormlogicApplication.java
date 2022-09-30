package com.lwala.formlogic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@ComponentScan(basePackages = {"com.lwala.formlogic.service", "com.lwala.formlogic.repository"})
@SpringBootApplication
public class FormlogicApplication {

	public static void main(String[] args) {
		SpringApplication.run(FormlogicApplication.class, args);
	}

}
