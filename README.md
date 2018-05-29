# AmpereWeb

[![Build Status](https://travis-ci.com/vandersozc/AmpereWeb.svg?branch=master)](https://travis-ci.com/vandersozc/AmpereWeb)
[![GitHub stars](https://img.shields.io/github/stars/vandersozc/AmpereWeb.svg)](https://github.com/vandersozc/AmpereWeb/stargazers)
[![SonarQube Coverage](https://img.shields.io/sonar/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/coverage.svg)](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb)


## Projeto

Serviço de cálculos elétricos.


## Instalação

- Build e dependências: [Maven](https://maven.apache.org/).
- Stack: [WildFly Swarm](http://wildfly-swarm.io/).

```
mvn clean wildfly-swarm:run
```

## Testes e Cobertura

Testes e cobertura: [JUnit 5](https://junit.org/junit5/).
```
mvn clean test
```

## Build e Análise
- Build remoto: [Travis CI](https://travis-ci.com/vandersozc/Bankslip).
- Qualidade de código: [SonarCLoud](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb).