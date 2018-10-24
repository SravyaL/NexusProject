package com.verizon.nco.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.verizon.nco.model.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {

}
