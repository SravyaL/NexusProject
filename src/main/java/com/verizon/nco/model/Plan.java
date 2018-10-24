package com.verizon.nco.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


import com.verizon.nco.model.PlanType;;

@Entity
@Table(name="plans")
public class Plan {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long pid;
	
	@Enumerated(EnumType.STRING)
	private PlanType type;
	
	@NotEmpty
	private long amount;
	
	@NotEmpty
	private long validity;
	
	@Column(nullable = true)
	private Long dataUsage;
	
	@Column(nullable = true)
	private Long dataSpeed;
	
	@Column(nullable = true)
	private Long voiceInMin;

	public long getPid() {
		return pid;
	}

	public void setPid(long pid) {
		this.pid = pid;
	}

	public PlanType getType() {
		return type;
	}

	public void setType(PlanType type) {
		this.type = type;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}

	public long getValidity() {
		return validity;
	}

	public void setValidity(long validity) {
		this.validity = validity;
	}

	public Long getDataUsage() {
		return dataUsage;
	}

	public void setDataUsage(Long dataUsage) {
		this.dataUsage = dataUsage;
	}

	public Long getDataSpeed() {
		return dataSpeed;
	}

	public void setDataSpeed(Long dataSpeed) {
		this.dataSpeed = dataSpeed;
	}

	public Long getVoiceInMin() {
		return voiceInMin;
	}

	public void setVoiceInMin(Long voiceInMin) {
		this.voiceInMin = voiceInMin;
	}

	
	
	
}
