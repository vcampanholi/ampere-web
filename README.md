# AmpereWeb

[![Build Status](https://travis-ci.com/vandersozc/AmpereWeb.svg?branch=master)](https://travis-ci.com/vandersozc/AmpereWeb)

[https://sonarcloud.io/dashboard/index/com.vandersoncamp%3Aampereweb][file:https://sonarcloud.io/api/badges/measure?key=com.vandersoncamp%3Aampereweb&metric=coverage#.svg]

[![SonarQube Coverage](https://sonarcloud.io/api/badges/measure?id=com.vandersoncamp%3Aampereweb&metric=coverage#.svg)](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb)

[![SonarQube Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=org.jonlabelle-github%3ATrimmer%3Amaster&metric=alert_status)](https://sonarcloud.io/dashboard/index/org.jonlabelle-github:Trimmer:master)


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
- Build remoto: [Travis CI](https://travis-ci.com/vandersozc/AmpereWeb).
- Qualidade de código: [SonarCLoud](https://sonarcloud.io/dashboard?id=com.vandersoncamp%3Aampereweb).