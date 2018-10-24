package com.verizon.nco.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.verizon.nco.dao.PlanRepository;
import com.verizon.nco.model.Plan;

@Service
public class PlansServiceImpl implements PlansService {
	@Autowired
	private PlanRepository planRepo;

	@Override
	public Plan getPlanById(long pid) {
		Plan plan = null;
		Optional<Plan> optPlan =planRepo.findById(pid);
		if(optPlan.isPresent()) {
			plan = optPlan.get();
		}
		return plan;
	}

	@Override
	public List<Plan> getAllPlans() {
		return planRepo.findAll();	
		}

}
