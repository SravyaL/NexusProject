package com.verizon.nco.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.verizon.nco.model.Plan;
import com.verizon.nco.service.PlansService;

@RestController
@CrossOrigin
@RequestMapping("/plans")
public class PlansAPI {

	@Autowired
	private PlansService service;
	
	@GetMapping
	public ResponseEntity<List<Plan>> getAllPlans() {
		return new ResponseEntity<>(service.getAllPlans(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Plan> getPlanById(@PathVariable("id") long pid) {
		ResponseEntity<Plan> plan;
		Plan p = service.getPlanById(pid);
		if (p == null)
			plan = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			plan = new ResponseEntity<>(p, HttpStatus.OK);
		return plan;
	}
}
