package com.verizon.nco.service;

import java.util.List;

import com.verizon.nco.model.Plan;


public interface PlansService {
	Plan getPlanById(long pid);
	List<Plan> getAllPlans();
}
