package com.vandersoncamp.ampereweb.service;import com.vandersoncamp.ampereweb.model.CalculoCorrente;import javax.ejb.Stateless;import javax.ejb.TransactionAttribute;import javax.ejb.TransactionAttributeType;@Stateless@TransactionAttribute(TransactionAttributeType.REQUIRED)public class CalculoCorrenteService extends GenericService<CalculoCorrente, Long> {    public CalculoCorrenteService() {        super(CalculoCorrente.class);    }}