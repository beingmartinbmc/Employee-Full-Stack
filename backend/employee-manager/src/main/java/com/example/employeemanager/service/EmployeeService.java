package com.example.employeemanager.service;

import com.example.employeemanager.entity.Employee;
import com.example.employeemanager.exception.EmployeeNotFoundException;
import com.example.employeemanager.repository.EmployeeRepository;
import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    private final Faker faker = new Faker();

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee findEmployeeById(final Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("No such employee exists!"));
    }

    public void deleteEmployeeById(final Long id) {
        employeeRepository.deleteById(id);
    }

    private Employee createEmployee() {
        return Employee.builder()
                .email(faker.internet().emailAddress())
                .firstName(faker.name().firstName())
                .lastName(faker.name().lastName())
                .build();
    }

    public void addRandoms() {
        List<Employee> employees = IntStream.rangeClosed(1, 10).mapToObj(i -> createEmployee()).collect(Collectors.toList());
        employeeRepository.saveAll(employees);
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
